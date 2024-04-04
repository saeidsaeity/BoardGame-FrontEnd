import { useEffect, useState } from 'react';
import { Cloud, Clouds, OrbitControls, Sky, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import { useGameEngine } from '../../Context/useGameEngine.jsx';

// Components
import { UI } from '../../components/Ui/UI.jsx';
import { GameBoardCells } from '../../components/GameBoardCells/GameBoardCells.jsx';
import { CitizenRed } from '../../assets/citizens/CitizenRed.jsx';
// 3D components

import TileD from "../../assets/tiles/tileD.jsx";

// Functions
import { checkTilePlacement } from './verifyFunctions.js';
import { randomTileGenerator } from '../../../utils.js';
// styling
import styles from './GameBoard.module.css';

const GameBoard = () => {
  // TILE
  const tileScale = [0.92, 0.92, 0.92];
  const tileSize = 2;
  // STATES //
  // CAMERA & ENVIRONMENT
  const [enableRotate, setEnableRotate] = useState(true);
  const [sunPosition, setSunPosition] = useState([50, -6, 150]);
  //NEW TILE
  const [newTileMesh, setNewTileMesh] = useState(); // the new tile mesh thing
  const [newTileData, setNewTileData] = useState(); //the new tile object

  const [newTileType, setNewTileType] = useState(); // string of tile type
  const [newTilePosition, setNewTilePosition] = useState([12, 4, 0]); //updates the postion

  const [newTile2DPosition, setNewTile2DPosition] = useState([]); //updates the 2D tile position
  const [releaseTile, setReleaseTile] = useState(false); //makes it so you cant click after confirm
  const [tileRotation, setTileRotation] = useState(0); // sets tile rotation
  const [renderTileArr, setRenderTileArr] = useState([]); // renders 3D models to canvas
  // Citizen
  const [citizenPosition, setCitizenPosition] = useState([]);
  const [isCitizenPhase, setIsCitizenPhase] = useState(false);
  const [replaceTile, setReplaceTile] = useState(true);


  const drawEventHandler = async (tileType) => {
    const TileComponent = await import(
      `../../assets/tiles/tile${tileType}.jsx`
    );
    const renderNewTile = (
      <RigidBody
        canSleep={true}
        position={newTilePosition}
        rotation={[0, tileRotation, 0]}
        restitution={0}
        enabledTranslations={[false, true, false]}
        enabledRotations={[false, false, false]}
      >
        <TileComponent.default scale={tileScale} />
      </RigidBody>
    );
    setNewTileMesh(renderNewTile);
  };

  const getRenderTileMesh = async (tileType, position, rotation) => {
    if (tileType !== undefined) {
      const TileComponent = await import(
        `../../assets/tiles/tile${tileType}.jsx`
      );
      const renderNewTile = (
        <RigidBody
          canSleep={true}
          position={position}
          rotation={[0, rotation, 0]}
          scale={tileScale}
        >
          <TileComponent.default  />
        </RigidBody>
      );
      return renderNewTile;
    }
  };

  const {
    turn,
    turnPhase,
    playerTurn,
    timer,
    players,
    phaseEnd,
    boardGameMatrix,
    setBoardGameMatrix,
    newTileArray,
    setNewTileArray,
  } = useGameEngine();

  console.log(newTileArray, "newTileArray");

  useEffect(() => {
    // console.log(renderTileArr, 'RENDER TILE ARR');
    console.log(boardGameMatrix, 'MATRIX');
    // setting rendered tile array
    console.log(newTileData);
    setRenderTileArr([])
    boardGameMatrix.forEach((row) => {
      row.forEach((col) => {
        // A tile exists in Matrix cell
        if (col.length > 0) {
          // only render non-starting tile (which has an undefined id)
          if(col[0]._id){
            const position = [
              (col[0].grid_id.row - 5) * 2,
              0,
              (col[0].grid_id.column - 5) * 2,
            ];
            getRenderTileMesh(
              col[0].tile_type,
              position,
              ((col[0].orientation * Math.PI) / 180)
            )
              .then((tileMesh) => {
                // const gameEngineNewTileArr = [...newTileArray, tileMesh]
                // setNewTileArray(gameEngineNewTileArr)
                setRenderTileArr((currArray) => {
                  console.log(currArray, "CURRENT ARRAY");
                  return [...currArray, tileMesh];
                });
              })
              .catch((err) => {
                console.log(err);
              });
          }
          }
      });
    });
  }, [boardGameMatrix]);


  // RENDERING STARTS HERE //
  return (
    <>
      <UI
        newTileType={newTileType}
        newTileMesh={newTileMesh}
        setNewTileMesh={setNewTileMesh}
        tileRotation={tileRotation}
        setTileRotation={setTileRotation}
        boardGameMatrix={boardGameMatrix}
        checkTilePlacement={checkTilePlacement}
        setReleaseTile={setReleaseTile}
        randomTileGenerator={randomTileGenerator}
        setNewTileData={setNewTileData}
        drawEventHandler={drawEventHandler}
        setNewTileType={setNewTileType}
        newTileData={newTileData}
        newTile2DPosition={newTile2DPosition}
        replaceTile={replaceTile}
        setReplaceTile={setReplaceTile}
        setCitizenPosition={setCitizenPosition}
      />

      <div className={styles.gameBoard}>
        <Canvas shadows camera={{ fov: 70, position: [0, 8, 14] }}>
          <Physics debug>
            <ambientLight intensity={1.5} />
            <Sky
              sunPosition={sunPosition}
              distance={5000}
              inclination={1}
              azimuth={0.1}
              turbidity={0.1}
              rayleigh={1}
              mieDirectionalG={0.01}
              mieCoefficient={0.005}
            />
            <Clouds>
              <Cloud position={[4, 20, -6]} scale={0.8} />
              <Cloud position={[-2, 18, 12]} scale={0.5} />
              <Cloud position={[4, 24, 19]} scale={0.9} />
              <Cloud position={[-6, 20, -32]} scale={1.5} />
              <Cloud position={[0, 43, -16]} scale={1.111} />
              <Cloud position={[34, 24, 0]} scale={1} />
              <Cloud position={[-20, 20, 4]} scale={1.2} />
              <Cloud position={[10, 18, 40]} scale={1} />
              <Cloud position={[20, 24, -23]} scale={1.64} />
            </Clouds>

            <Stars />

            <directionalLight
              castShadow
              intensity={3}
              position={sunPosition}
              shadow-normalBias={0.03}
            />

            <OrbitControls
              minDistance={2}
              maxDistance={30}
              enableRotate={enableRotate}
              maxPolarAngle={Math.PI / 2 - 0.1}
              // dampingFactor={0.8}
              rotateSpeed={0.6}
              target={[0, 1, 0]}
            />
            
            <RigidBody>
              <TileD position={[0, 4, 0]} scale={tileScale} 
                restitution={0}
                enabledTranslations={[false, true, false]}
                enabledRotations={[false, false, false]}
              />
            </RigidBody>

            

            <GameBoardCells
              boardGameMatrix={boardGameMatrix}
              tileSize={tileSize}
              tileScale={tileScale}
              setReleaseTile={setReleaseTile}
              setNewTilePosition={setNewTilePosition}
              setNewTile2DPosition={setNewTile2DPosition}
              setNewTileMesh={setNewTileMesh}
              setNewTileData={setNewTileData}
              turnPhase={turnPhase}
              isCitizenPhase={isCitizenPhase}
            />

            {releaseTile && replaceTile ? newTileMesh : null}

            {turnPhase === 'Place Citizen' && citizenPosition.length > 0 ? (
              <RigidBody
                gravityScale={0.5}
                position={citizenPosition}
                scale={0.095}
                friction={100}
                mass={1000}
                rotation={[0, 0, 0]}
                canSleep={true}
                lockRotations={true}
                restitution={0}
              >
                <CitizenRed />
              </RigidBody>
            ) : null}

            {renderTileArr}

            <RigidBody type="fixed">
              <mesh receiveShadow position-y={-0.3}>
                <boxGeometry args={[25, 0.5, 25]} />
                <meshStandardMaterial color="#8f4111" />
              </mesh>
              {/* {boardGrid} */}
            </RigidBody>
          </Physics>

          {/* HELPERS */}
          {/* <Perf position="top-left" /> */}
          {/* <axesHelper args={[5]} />
          <gridHelper args={[50, 25, "black", "red"]} /> */}
        </Canvas>
      </div>
    </>
  );
};

export default GameBoard;
