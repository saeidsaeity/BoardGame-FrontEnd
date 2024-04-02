import { myPlayer } from "playroomkit";
import { useGameEngine } from "../../Context/useGameEngine";
import { useEffect } from "react";

import styles from './UI.module.css'
import { Canvas } from "@react-three/fiber";
import { CitizenRed } from "../../assets/citizens/CitizenRed";
import { OrbitControls, PresentationControls, SpotLight } from "@react-three/drei";
import TileA from "../../assets/tiles/tileA";

export const UI = (boardGameMatrix, setBoardGameMatrix, tileRotation, setTileRotation) => {
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
            <button className={styles.nextPhase} onClick={() => {phaseEnd()}}>Next Phase</button>
        )
    }

    // html/css inside this can be changed to alter UI interface
    return (
        <div className={styles.UIWrapper}>
            <div className={styles.turnInfo}>
                <h2>Time: {timer}</h2>
                <h2>Turn: {turn} | Player: {player.state.profile.name} | Phase: {turnPhase}</h2>
            </div>
            {endPhaseButton()}
            <div className={styles.canvasWrapper}>
                <Canvas camera={{ fov: 40, position: [0, 8, 8] }}>
                    <ambientLight intensity={0.75}/>
                    <directionalLight intensity={1.8} position={ [4, 4, 8] } castShadow/>
                    <OrbitControls
                        enableZoom={false}
                        enableRotate={false}
                        minDistance={5}
                        maxDistance={5}
                        maxPolarAngle={Math.PI / 4}
                        // dampingFactor={0.8}
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
                        // domElement={events.connected} // The DOM element events for this controller will attach to
                    >
                        <TileA />
                    {/* <CitizenRed scale={0.2} rotation={[ -0.5, 0.1, 0]} /> */}
                    </PresentationControls>
                </Canvas>
            </div>
        </div>
    )
}