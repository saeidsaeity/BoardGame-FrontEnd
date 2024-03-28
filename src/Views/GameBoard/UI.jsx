import { myPlayer } from "playroomkit";
import { useGameEngine } from "../../Context/useGameEngine";
import { useEffect } from "react";

export const UI = () => {
    
    const {
        turn,
        turnPhase,
        playerTurn,
        timer,
        players,
        phaseEnd
    } = useGameEngine()

    // const currentPlayer = players[playerTurn]
    const me = myPlayer()
    const player = players[playerTurn]

    // endPhaseButton ends the phase, should only be visible on
    // player's turn during placing rounds
    const endPhaseButton = () => {
        if (player !== me) {return <div/>}
        if (turnPhase !== "Place Tile" && turnPhase !== "Place Citizen") {return <div/>}
        return (
            <button onClick={() => {phaseEnd()}}> Next Phase </button>
        )
    }

    // html/css inside this can be changed to alter UI interface
    return (
        <div className="text-black drop-shadow-xl fixed top-0 left-0 right-0 bottom-0 z-10 flex flex-col pointer-events-none">
            <div className="p-4 w-full flex items-center justify-between">
            
                <h2 className="text-2xl font-bold text-center uppercase">
                    Turn: {turn} | Player: {player.state.profile.name} | Phase: {turnPhase}
                </h2>

                <div className=" flex items-center gap-1 w-14">
                    <h2 className="text-2xl font-bold text-center uppercase">
                            Time: {timer}
                        </h2>
                </div>
            </div>
            {endPhaseButton()}
        </div>
    )
}