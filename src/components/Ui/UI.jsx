import { myPlayer } from "playroomkit";
import { useEffect, useState } from "react";
import { Center, OrbitControls, PresentationControls, SpotLight } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import { CitizenRed } from "../../assets/citizens/CitizenRed";
import { useGameEngine } from "../../Context/useGameEngine";

import CitizenControls from "../CitizenControls/CitizenControls";

import PopUp from "../popUpRules";
import styles from './UI.module.css'

export const UI = (
    { 
        tileRotation, 
        setTileRotation, 
        newTileType,
        newTileData,
        checkTilePlacement,
        setReleaseTile,
        setNewTile,
        randomTileGenerator,
        setNewTileData,
        drawEventHandler,
        setNewTileType,
        newTile2DPosition,
        setReplaceTile,
        setCitizenPosition

    }) => {
    const [ newPlayerTile, setNewPlayerTile ] = useState()
    const [ showTile, setShowTile ] = useState(false)
    
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
        newTileArray
    } = useGameEngine()

    // console.log(newTileData, "newTileData");


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

    useEffect(() => {
        if(newTileType !== undefined){
            import(`../../assets/tiles/tile${newTileType}.jsx`
              ).then((asset) => {
                const tileComp = (<asset.default />)
                setNewPlayerTile(tileComp)
              })
        }
    }, [newTileType])


    return (
        <div className={styles.UIWrapper}>
            <div className={styles.turnInfo}>
                <h2>Turn: {turn} | Player: {player.state.profile.name} | Phase: {turnPhase}</h2>
            </div>
            <div className={styles.canvasWrapper}>
                <Canvas camera={{ fov: 40, position: [0, 8, 8] }}>
                    <ambientLight intensity={1}/>
                    <directionalLight intensity={1.8} position={ [4, 8, 8] } castShadow/>
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
                        {turnPhase === 'Place Citizen' ? <Center><CitizenRed scale={0.25} rotation={[-0.8, 0, 0]}/></Center> : newPlayerTile}
                    </PresentationControls>
                </Canvas>
            </div>
            <PopUp/>
            {turnPhase === 'Place Citizen' ?  <CitizenControls newTileData={newTileData} setCitizenPosition={setCitizenPosition} tileRotation={tileRotation} setNewTileData={setNewTileData}/> : null }
            {player !== me ? 
                null
                :
                <div className={styles.buttonWrapper}>
                { turnPhase === 'Place Citizen' ? 
                    null
                    :
                    <>
                        <button 
                            onClick={() => {
                                setTileRotation((currRotation) => {
                                    if(currRotation <= -2*Math.PI){
                                        return currRotation + 1.5 * Math.PI
                                    }
                                    return currRotation - Math.PI / 2;
                                });
                                newTileData.orientation = (tileRotation - Math.PI / 2)*-1*(180 / Math.PI)%360;
                                newTileData.orientation /= 90
                                setNewTile((currTile) => {
                                    if (currTile === undefined) {
                                        return currTile;
                                    }
                                    const updatedTile = {
                                        ...currTile,
                                        props: {
                                        ...currTile.props,
                                        rotation: [0, tileRotation - Math.PI / 2, 0],
                                        },
                                    };
                                    return updatedTile;
                                });
                            }}
                            className={styles.button}
                        >
                            Rotate
                        </button>
                        <button 
                            onClick={async () => {
                                setReleaseTile(false)
                                setShowTile(false)
                                const randomTile = await randomTileGenerator();
                                setNewTileData(randomTile);
                                drawEventHandler(randomTile.tile_type)
                                setNewTileType(randomTile.tile_type)
                                setShowTile(true)
                                setReplaceTile(true)
                            }}
                            className={styles.button}
                        >
                            {showTile ? 'Take a new tile' : 'Get Tile'}
                        </button>
                        <button 
                            className={styles.button}
                            onClick={() => {
                                if (checkTilePlacement(newTileData, boardGameMatrix)) {
                                    setReplaceTile(false)
                                    const newerBoard = JSON.parse(JSON.stringify(boardGameMatrix))
                                    newerBoard[newTile2DPosition[0]][newTile2DPosition[1]] = [newTileData];
                                    console.log(newTileData, "newTileData");
                                    console.log(newerBoard, "newerBoard");
                                    setBoardGameMatrix(newerBoard)
                                    phaseEnd()
                                } else {
                                    console.log("tile not been placed");
                                }
                            }}
                        >
                            Confirm
                        </button>
                    </>
                }
            </div>
            }
        </div>
    )
}