import { myPlayer } from "playroomkit";
import { useContext, useEffect, useState } from "react";
import { Center, OrbitControls, PresentationControls } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import { Citizen } from "../../assets/citizens/Citizen";
import { useGameEngine } from "../../Context/useGameEngine";

import CitizenControls from "../CitizenControls/CitizenControls";

// import PopUp from "../popUpRules";
import styles from './UI.module.css'
import TileControls from "../TileControls/TileControls";
import { BoardGameContext } from "../../Context/BoardGameContext";


export const UI = ({drawEventHandler}) => {
    const {
        newTileType,
        citizenPosition,
        showTile,
        setShowTile
        }= useContext(BoardGameContext)

    const [ newPlayerTile, setNewPlayerTile ] = useState()
 
    const [ currScoreBoard, setCurrScoreBoard] = useState([])
    
    const {
        turn,
        turnPhase,
        playerTurn,
        timer,
        players,
        phaseEnd,
        boardGameMatrix,
        setBoardGameMatrix,
        setNewTileArray,
        newTileArray,
        gameTileCount,
        scoreBoard
    } = useGameEngine()



    // const currentPlayer = players[playerTurn]
    const me = myPlayer()
    const player = players[playerTurn]

    // endPhaseButton ends the phase, should only be visible on
    // player's turn during placing rounds
    // const endPhaseButton = () => {
    //     if (player !== me) {return <div/>}
    //     if (turnPhase !== "Place Tile" && turnPhase !== "Place Citizen") {return <div/>}
    //     return (
    //         <button className={styles.nextPhase} onClick={() => {phaseEnd()}}>Next Phase</button>
    //     )
    // }

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }

      function hexToHexadecimalNumber(hexString) {
        // Remove the ‘#’ character if present
        hexString = hexString.replace('#', '');
        // Convert the hexadecimal string to a hexadecimal number
        const hexadecimalNumber = parseInt(hexString, 16);
        // Add the ‘0x’ prefix to the hexadecimal number
        return 0x000000 | hexadecimalNumber;
    }
      

    useEffect(() => {
        if(newTileType !== undefined){
            import(`../../assets/tiles/tile${newTileType}.jsx`
              ).then((asset) => {
                const tileComp = (<asset.default />)
                setNewPlayerTile(tileComp)
              })
        }
    }, [newTileType])


    // const playerScores = () => {
    //     return scoreBoard.map((playerScore, index) => {
    //         return <div>
    //             {players[index].state.profile.name}: {playerScore}
    //         </div>
    //     })
    // }


    return (
        <div className={styles.UIWrapper}>
            <div className={styles.turnInfo}>
                <div className={styles.profile}>
                    <img src={me.state.profile.photo}/>
                    <h2 style={{color: me.state.profile.color}}>{me.state.profile.name}</h2>
                </div>
                <h2>{me.id === player.id ? `It's your turn!` : `${player.state.profile.name}'s turn...` }</h2>
                {me.id === player.id && turnPhase === 'Place Tile' ? <h2>Place a tile!</h2> : null}
                {me.id === player.id && turnPhase === 'Place Citizen' ? <h2>Place a citizen / End turn</h2> : null}
            </div>
            {players.map((player) => {
                return <div style={{ backgroundColor: player.state.profile.color }} className={styles.eachPlayer}>
                    <img src={player.state.profile.photo}/>
                    <p>{player.state.profile.name}</p>
                    <p className={styles.score}>{player.state.score}</p>
                </div>
            })}
            <div className={styles.canvasWrapper}>
                <Canvas camera={{ fov: 40, position: [0, 8, 8] }}>
                    <ambientLight intensity={1.2}/>
                    <directionalLight intensity={3.5} position={ [4, 10, 12] } castShadow/>
                    <OrbitControls
                        enableZoom={false}
                        enableRotate={false}
                        minDistance={5}
                        maxDistance={5}
                        maxPolarAngle={Math.PI / 4}
                        rotateSpeed={0.6}
                    />
                    <PresentationControls
                        enabled={true} // the controls can be disabled by setting this to false
                        global={true} // Spin globally or by dragging the model
                        cursor={true} // Whether to toggle cursor style on drag
                        snap={true} // Snap-back to center (can also be a spring config)
                        speed={1} // Speed factor
                        zoom={1} // Zoom factor when half the polar-max is reached
                        rotation={[0, 0, 0]} // Default rotation
                        polar={[0, Math.PI / 4]} // Vertical limits
                        azimuth={[-Infinity, Infinity]} // Horizontal limits
                        config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
                    >
                        {turnPhase === 'Place Citizen' ? <Center><Citizen scale={0.25} rotation={[-0.8, 0, 0]} color={me.state.profile.color} citizenPosition={citizenPosition}/></Center> : newPlayerTile}
                    </PresentationControls>
                </Canvas>
            </div>
            {/* <PopUp/> */}
            {turnPhase === 'Place Citizen' ?  
                <CitizenControls 
                    me={me}
                /> : null }
            {player !== me ? 
                null
                :
                <div className={styles.buttonWrapper}>
                { turnPhase === 'Place Citizen' ? 
                    null
                    :

                    <TileControls
                        me={me}
                        drawEventHandler={drawEventHandler}
                    />

                }
            </div>
            }
        </div>
    )
}