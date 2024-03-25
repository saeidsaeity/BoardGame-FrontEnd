import { isHost, onPlayerJoin, useMultiplayerState, usePlayersList } from 'playroomkit'
import { createContext, useEffect, useContext, useRef } from 'react'
import { setState, getState } from 'playroomkit'
import { randInt } from 'three/src/math/MathUtils'
import { useControls } from 'leva'



const GameEngineContext = createContext()

const TIME_PHASE_TILE_DRAW = 5
const TIME_PHASE_TILE_PLACE = 20
const TIME_PHASE_MEEPLE_PLACE = 20
const TIME_PHASE_CALCULATE_POINTS = 10

export const GameEngineProvider = ({ children }) => {

    // Game States
    const [timer, setTimer] = useMultiplayerState('timer', 0)
    const [turnPhase, setTurnPhase] = useMultiplayerState('turnPhase', "start")
    const [turn, setTurn] = useMultiplayerState('turn', 1)
    const [playerTurn, setPlayerTurn] = useMultiplayerState('playerTurn', 0)
    const [tileDeck, setTileDeck] = useMultiplayerState('tileDeck', [])
    // const [playerTile, setPlayerTile] = useMultiplayerState('playerTile', null)
    // const [grid, setGrid] = useMultiplayerState('grid', [])
    // const [gridSpaces, setGridSpaces] = useMultiplayerState('gridSpaces', [])


    // Create platers and sort them so all players have same order of players
    const players = usePlayersList(true)
    players.sort((p1,p2) => {p1.id.localeCompare(p2.id)})

    const gameState = {
        timer,
        turnPhase,
        turn,
        playerTurn,
        tileDeck,
        players
    }

    // give every player a tile
    // needs to be adapted to give just current player
    // a tile
    const givePlayerTile = () => {
        const newTileDeck = [...getState('tileDeck')]
        players.forEach((player) => {
            const tile = []
            const randomIndex = randInt(0, newTileDeck.length - 1)
            tile.push(newTileDeck[randomIndex])
            newTileDeck.splice(randomIndex, 1)
            player.setState('tile', tile)
        })
        setTileDeck(newTileDeck, true)
    }

    // startGame resets all game states
    const startGame = () => {
        if (isHost()) {
            console.log('StartGame')
            setTimer(TIME_PHASE_TILE_DRAW, true)
            setPlayerTurn(0, true)
            setTurn(1, true)

            // this is where we fill insert all the tiles into the deck
            setTileDeck(
                [
                    ...new Array(15).fill(0).map(() => 'road'),
                    ...new Array(10).fill(0).map(() => 'city'),
                    ...new Array(5).fill(0).map(() => 'monastery')
                ],
                true
            )

            // give each player states
            players.forEach((player) => {
                console.log(player)
                console.log('Setting states for player', player.id)
                player.setState('tile', [], true)
                player.setState('meeples', 7, true)
                player.setState('score', 0, true)
                player.setState('winner', false, true)
            })

            // give player a tile
            givePlayerTile()
            setTurnPhase('drawTile', true)
        }
    }
    
    // invoke startgame upon loading
    useEffect(() => {
        startGame()
    }, [])

    // 
    const nextPlayerTurn = () => {
        // change playerTurn to the next player or player 0
        // if at last player
        console.log(players)
        const nextPlayer = getState('timer') + 1
        console.log('player turn: ', nextPlayer)
        setPlayerTurn(nextPlayer)
        const nextTurn = getState('turn') + 1
        console.log('turn: ', nextTurn)
        setTurn(nextTurn)
    }

    // phaseEnd switches phase, and will likely be where we deal with
    // the logic of doing most things via calling functions: i.e.
    // drawing tile, placing tile, placing meeple, calculating points
    const phaseEnd = () => {
        console.log('turn phase', getState('turnPhase'))
        let newTime = 0
        switch (getState('turnPhase')) {
            case 'start':
                console.log('in lobby')
                setTurnPhase('drawTile', true)
                newTime = TIME_PHASE_TILE_DRAW
                setTimer(newTime)
                break
            case 'drawTile':
                // check if any tiles are left/no tiles are playable
                // if so, game ends, calculates remaining points (maybe
                // via meeples?) and declares winner, maybe have a new game
                // button


                // whatever logic for between draw and place phases
                setTurnPhase('placeTile', true)
                newTime = TIME_PHASE_TILE_PLACE
                setTimer(newTime)
                break
            case 'placeTile':
                // main logic of tile being placed
                setTurnPhase('meeplePlace', true)
                newTime = TIME_PHASE_MEEPLE_PLACE
                setTimer(newTime)
                break
            case 'meeplePlace':
                // main logic of meeple being placed
                setTurnPhase('calculatePoints', true)
                newTime = TIME_PHASE_CALCULATE_POINTS
                setTimer(newTime)
                break
            case 'calculatePoints':
                // main logic of road/city/monestary checks

                // some way to change playerTurn to next player
                nextPlayerTurn()
                setTurnPhase('drawTile', true)
                newTime = TIME_PHASE_TILE_DRAW
                setTimer(newTime)
                break
        }
    }
    
    // paused allows host to pause, along with Leva in app.jsx
    const { paused } = useControls({
        paused: false
    })

    // declare timerInterval
    const timerInterval = useRef()

    // runTimer counts down the timer
    const runTimer = () => {
        timerInterval.current = setInterval(() => {
            if (!isHost()) {return}
            if (paused) {return}
            let newTime = getState("timer") - 1
            console.log("Timer: ", newTime)

            if (newTime <= 0) {
                phaseEnd()
            } else {
                setTimer(newTime, true)
            }
        }, 1000)
    }

    const clearTimer = () => {
        clearInterval(timerInterval.current)
    }

    useEffect(() => {
        runTimer()
        return clearTimer
    }), [turnPhase, paused]
    
    return (
        <GameEngineContext.Provider value={{
            ...gameState
        }}>
            {children}
        </GameEngineContext.Provider>
    )
}

// throws error if useGameEngine not used within GameEngineProvider
export const useGameEngine = () => {
    const context = useContext(GameEngineContext)
    if (context === undefined) {
        throw new Error('useGameEngine must be used within a GameEngineProvider')
    }
    return context
}