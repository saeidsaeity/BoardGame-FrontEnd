import { useEffect, useState } from "react";
import { Cloud, Clouds, OrbitControls, Sky, SpotLight, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { useGameEngine } from "../../Context/useGameEngine.jsx";
// Components
import { UI } from "../../components/Ui/UI.jsx";
// Functions
import { createGameBoard, tileJump } from "../../../utilities.jsx";
// 3D components
import TileD from "../../assets/tiles/tileD.jsx";
// styling
import styles from "./GameBoard.module.css";
//test
import { tileData } from "./testboarddata.js";
import randomTileGenerator from "./utils/randomTileGenerator.js";
import { checkTilePlacement } from "./verifyFunctions.js";
import { CitizenRed } from '../../assets/citizens/CitizenRed.jsx';


const GameBoard = () => {
  // STATES //
  // TILE
  const tileScale = [0.92, 0.92, 0.92];
  const tileSize = 2;
  // CAMERA & ENVIRONMENT
  const [enableRotate, setEnableRotate] = useState(true);
  const [sunPosition, setSunPosition ] = useState([50, 100, 150])
  //NEW TILE
  const [newTileArray, setNewTileArray] = useState([]);//all tiles
  const [newTile, setNewTile] = useState();// the new tile mesh thing
  const [newTileData, setNewTileData] = useState();//the tile object 
  const [newTileType, setNewTileType ] = useState() // string of tile type
  const [newTilePosition, setNewTilePosition] = useState([12,4,0]);//updates the postion
  const [newTile2DPosition, setNewTile2DPosition] = useState([]);//updates the position
  const [releaseTile, setReleaseTile] = useState(false);//mkaes it so you cant click after confirm
  const [tileRotation, setTileRotation] = useState(0);
  // Citizen
  const [citizenPosition, setCitizenPosition ] = useState([])
  // Board
  // const [boardGameMatrix, setBoardGameMatrix] = useState([
  //   [[], [], [], [], [], [], [], [], [], [], []],
  //   [[], [], [], [], [], [], [], [], [], [], []],
  //   [[], [], [], [], [], [], [], [], [], [], []],
  //   [[], [], [], [], [], [], [], [], [], [], []],
  //   [[], [], [], [], [], [], [], [], [], [], []],
  //   [[], [], [], [], [], [], [], [], [], [], []],
  //   [[], [], [], [], [], [], [], [], [], [], []],
  //   [[], [], [], [], [], [], [], [], [], [], []],
  //   [[], [], [], [], [], [], [], [], [], [], []],
  //   [[], [], [], [], [], [], [], [], [], [], []],
  //   [[], [], [], [], [], [], [], [], [], [], []],
  //   [[], [], [], [], [], [], [], [], [], [], []],
  // ]);

  const {
    turn,
    turnPhase,
    playerTurn,
    timer,
    players,
    phaseEnd,
    boardGameMatrix,
    setBoardGameMatrix
} = useGameEngine()


  // CAMERA


  const [replaceTile,setReplaceTile]=useState(true)

  

  const drawEventHandler = async (tileType) => {
    const TileComponent = await import(`../../assets/tiles/tile${tileType}.jsx`);
    const renderNewTile = (
      <RigidBody
        canSleep={false}
        position={newTilePosition}
        rotation={[0, tileRotation, 0]}
      >
        <TileComponent.default scale={tileScale} />
      </RigidBody>
    );
    console.log(renderNewTile,'render new tile');
    setNewTile(renderNewTile);
  };

  useEffect(() => {
    console.log('settingBoardGameMatrix')
    setBoardGameMatrix((currBoard) => {
      const newboard = JSON.parse(JSON.stringify(currBoard));
      tileData.grid_id={row:5,column:5}
      newboard[5][5] = [tileData];
      return newboard;
    }, true);
    console.log('finished settingBoardGameMatrix')
    console.log(boardGameMatrix)
  }, []);

  const grid = createGameBoard(
    boardGameMatrix,
    tileSize,
    tileScale,
    setReleaseTile,
    setNewTilePosition,
    setNewTile2DPosition,
    setNewTile,
    setNewTileData,
    turnPhase
  );

  console.log(turnPhase);


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
        setCitizenPosition={setCitizenPosition}

      />

      <div className={styles.gameBoard}>
        <Canvas shadows camera={{ fov: 70, position: [0, 8, 14] }}>
          <Physics debug>
            <ambientLight intensity={0.8} />
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
              <Cloud position={[ 4, 20, -6 ]} scale={0.8} />
              <Cloud position={[ -2, 18, 12 ]} scale={0.5}/>
              <Cloud position={[ 4, 24, 19 ]} scale={0.9}/>
              <Cloud position={[ -6, 20, -32 ]} scale={1.5} />
              <Cloud position={[ 0, 43, -16 ]} scale={1.111}/>
              <Cloud position={[ 34, 24, 0 ]} scale={1}/>
              <Cloud position={[ -20, 20, 4 ]} scale={1.2} />
              <Cloud position={[ 10, 18, 40 ]} scale={1}/>
              <Cloud position={[ 20, 24, -23 ]} scale={1.64}/>
            </Clouds>

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
              <TileD position={[0, 4, 0]} scale={tileScale} />
            </RigidBody>


            {releaseTile && replaceTile ? newTile : null}

            {turnPhase === 'Place Citizen' && citizenPosition.length > 0 ? 
              <RigidBody 
                gravityScale={0.5} 
                position={citizenPosition} 
                scale={0.095} 
                friction={100} 
                mass={1000} 
                rotation={[ 0 ,0 ,0 ]} 
                canSleep={true}
                restitution={0}
              >
                <CitizenRed />
              </RigidBody>
              : null
            }
      
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
          <Perf position="top-left" />
          {/* <axesHelper args={[5]} />
          <gridHelper args={[50, 25, "black", "red"]} /> */}
        </Canvas>
      </div>
    </>
  );
};

export default GameBoard;
