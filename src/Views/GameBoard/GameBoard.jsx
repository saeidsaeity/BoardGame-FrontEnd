import { useEffect, useRef, useState } from "react";
import { Cloud, Clouds, OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { GameEngineProvider, useGameEngine } from "../../Context/useGameEngine.jsx";
import PopUp from '../../components/popUpRules.jsx';
// Components
import { UI } from "../../components/Ui/UI.jsx";
// Functions
import { createGameBoard, tileJump } from "../../../utilities.jsx";
import { getTile } from "../../api.js";
// Asset loader
import * as THREE from "three";
// asset loader
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
// 3D components
import TileD from "../../assets/tiles/tileD.jsx";
// styling
import styles from "./GameBoard.module.css";
//test
import { tileData } from "./testboarddata.js";
import { useControls } from "leva";
import Menu from "../../components/Menu/Menu.jsx";
import tileColourLogic from "./utils/tileColourLogic.js";
import randomTileGenerator from "./utils/randomTileGenerator.js";
import { checkTilePlacement } from "./verifyFunctions.js";
import { CitizenRed } from '../../assets/citizens/CitizenRed.jsx';
const GameBoard = () => {
  const tileScale = [0.94, 0.94, 0.94];
  const tileSize = 2;
  // CAMERA
  const [enableRotate, setEnableRotate] = useState(true);
  // TILE DRAGGING
  const tile = useRef();
  // States
  const [ newTileType, setNewTileType ] = useState()
  const [ citizenPosition, setCitizenPosition ] = useState([ -0.6, 7, 0.6])
  const [ sunPosition, setSunPosition ] = useState([150, 150, -250])
  const [showMenu, setShowMenu] = useState(false)
  const [newTilePosition, setNewTilePosition] = useState([12,4,0]);
  const [newTile2DPosition, setNewTile2DPosition] = useState([]);
  const [releaseTile, setReleaseTile] = useState(false);
  const [tileRotation, setTileRotation] = useState(0);
  const [boardGameMatrix, setBoardGameMatrix] = useState([
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
  ]);

  // CAMERA
  const [newTileArray, setNewTileArray] = useState([]);
  const [newTile, setNewTile] = useState();
  const droptile = true;
  const [newTileData, setNewTileData] = useState();
  const [replaceTile,setReplaceTile]=useState(true)

  console.log(newTile, "LATEST NEW TILE");

  const drawEventHandler = async (tileType) => {
    const TileComponent = await import(
      `../../assets/tiles/tile${tileType}.jsx`
    );
    const renderNewTile = (
      <RigidBody
        ref={tile}
        canSleep={false}
        position={newTilePosition}
        rotation={[0, tileRotation, 0]}
      >
        <TileComponent.default scale={tileScale} />
      </RigidBody>
    );
    
    setNewTile(renderNewTile);
    // setReleaseTile(true);
    // console.log(renderNewTile);
  };

  useEffect(() => {
    setBoardGameMatrix((currBoard) => {
      const newboard = JSON.parse(JSON.stringify(currBoard));
      tileData.grid_id={row:5,column:5}
      newboard[5][5] = [tileData];
      return newboard;
    });
  }, []);

  const {
    turn,
    turnPhase,
    playerTurn,
    timer,
    players,
    phaseEnd
} = useGameEngine()

  const grid = createGameBoard(
    boardGameMatrix,
    tileSize,
    tileScale,
    setReleaseTile,
    setNewTilePosition,
    setNewTile2DPosition,
    setNewTile,
    setNewTileData
  );
  // RENDERING STARTS HERE //
  return (
    <>
      <UI
        newTileType={newTileType}
        newTile={newTile}
        setBoardGameMatrix={setBoardGameMatrix}
        tileRotation={tileRotation}
        setTileRotation={setTileRotation}
        boardGameMatrix={boardGameMatrix}
        checkTilePlacement={checkTilePlacement}
        setNewTileArray={setNewTileArray}
        setReleaseTile={setReleaseTile}
        setNewTile={setNewTile}
        randomTileGenerator={randomTileGenerator}
        setNewTileData={setNewTileData}
        drawEventHandler={drawEventHandler}
        setNewTileType={setNewTileType}
        newTileData={newTileData}
        newTile2DPosition={newTile2DPosition}
        replaceTile={replaceTile}
        setReplaceTile={setReplaceTile}
      />

      <div className={styles.gameBoard}>
        <Canvas shadows camera={{ fov: 70, position: [0, 8, 14] }}>
          <Physics >
            <ambientLight intensity={0.4} />
            <Sky 
              sunPosition={sunPosition} 
              distance={45000} 
              inclination={0.6} 
              azimuth={0.1} 
              turbidity={1}
              rayleigh={0.5}
              mieDirectionalG={0.8}
              mieCoefficient={0.005}
            />
            {/* <Clouds>
              <Cloud position={[ 4, 8, -6 ]} scale={0.5} />
              <Cloud position={[ -2, 12, 6 ]} scale={0.5}/>
              <Cloud position={[ 4, 15, 0 ]} scale={0.5}/>
            </Clouds> */}

            <directionalLight
              castShadow
              intensity={3}
              position={sunPosition}
              shadow-normalBias={0.04}
            />

            <OrbitControls
              minDistance={2}
              maxDistance={30}
              enableRotate={enableRotate}
              maxPolarAngle={Math.PI / 2 - 0.1}
              // dampingFactor={0.8}
              rotateSpeed={0.6}
            />

            <RigidBody>
              <TileD position={[0, 4, 0]} scale={tileScale} />
            </RigidBody>


            <RigidBody 
              gravityScale={0.5} 
              position={citizenPosition} 
              scale={0.095} 
              friction={1} 
              mass={10} 
              rotation={[ 0 ,0 ,0 ]} 
              canSleep={false} 
            >
              <CitizenRed />
            </RigidBody>
            {releaseTile && replaceTile ? newTile : null}
            {newTileArray}
            <RigidBody type="fixed">
              <mesh receiveShadow position-y={-0.3}>
                <boxGeometry args={[25, 0.5, 25]} />
                <meshStandardMaterial color="#8f4111" />
              </mesh>
              {grid}
            </RigidBody>
          </Physics>
          {/* HELPERS */}
          {/* <Perf position="top-left" /> */}
          <axesHelper args={[5]} />
          <gridHelper args={[50, 25, "black", "red"]} />
        </Canvas>
      </div>
    </>
  );
};

export default GameBoard;
