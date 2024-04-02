
import { useEffect, useRef, useState } from 'react';
import { Cloud, Clouds, OrbitControls, Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import { Perf } from 'r3f-perf';

import { GameEngineProvider } from '../../Context/useGameEngine.jsx';

// Components
import { UI } from '../../components/Ui/UI.jsx';

// Functions
import { createGameBoard, tileColourLogic, tileJump, randomTileGenerator } from '../../../utilities.jsx';
import { getTile } from '../../api.js';

// Asset loader
import { useEffect, useRef, useState } from "react";
import { DragControls, OrbitControls, Sky } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Physics, RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { UI } from "./UI.jsx";
import { GameEngineProvider } from "../../Context/useGameEngine.jsx";
import { getTile } from "../../api.js";
// asset loader
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";


// 3D components
import TileA from "../../assets/tiles/tileA.jsx";
import TileB from "../../assets/tiles/tileB.jsx";
import TileC from "../../assets/tiles/tileC.jsx";
import TileD from "../../assets/tiles/tileD.jsx";
import TileE from "../../assets/tiles/tileE.jsx";
import TileF from "../../assets/tiles/tileF.jsx";
import TileG from "../../assets/tiles/tileG.jsx";
import TileH from "../../assets/tiles/tileH.jsx";
import TileI from "../../assets/tiles/tileI.jsx";
import TileJ from "../../assets/tiles/tileJ.jsx";
import TileK from "../../assets/tiles/tileK.jsx";
import TileL from "../../assets/tiles/tileL.jsx";
import TileM from "../../assets/tiles/tileM.jsx";
import TileN from "../../assets/tiles/tileN.jsx";
import TileO from "../../assets/tiles/tileO.jsx";
import TileP from "../../assets/tiles/tileP.jsx";
// styling
import styles from "./GameBoard.module.css";

//test

import { tileData } from './testboarddata.js';
import { useControls } from 'leva';
import Menu from '../../components/Menu/Menu.jsx';
import tileColourLogic from "./utils/tileColourLogic.js";
import randomTileGenerator from "./utils/randomTileGenerator.js";
const GameBoard = () => {

  const tileScale = [0.94, 0.94, 0.94];
  const tileSize = 2;
  
  // CAMERA
  const [enableRotate, setEnableRotate] = useState(true);

  // TILE DRAGGING
  const tile = useRef();

  // Leva
  const { sunPosition } = useControls('sky', {
    sunPosition: { value: [1, 2, 3] },
  });



  // States
  const [showMenu, setShowMenu] = useState(false)
  const [newTilePosition, setNewTilePosition] = useState([]);
  const [newTile2DPosition, setNewTile2DPosition] = useState([]);
  const [relaseTile, setReleaseTile] = useState(false);
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

  console.log(boardGameMatrix);

  // CAMERA
  const [enableRotate, setEnableRotate] = useState(true);

  // TILE DRAGGING
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0, z: 0 });
  const [placedPosition, setPlacedPosition] = useState([0, 4, 2]);
  const [newTilePosition, setNewTilePosition] = useState([0, 4, 0]);
  const [newTile2DPosition, setNewTile2DPosition] = useState([]);
  const [releaseTile, setReleaseTile] = useState(false);

  const [isNewTile, setIsNewTile] = useState(false);

  const draggedTileRef = useRef({ localMatrix: [] });
  const tile = useRef();
  const starterTileRef = useRef({ position: [0, 4, 0] });

  const { sunPosition } = useControls("sky", {
    sunPosition: { value: [1, 2, 3] },
  });

  const tileJump = () => {
    console.log("jump");
    tile.current.applyImpulse({ x: 0, y: 10, z: 0 });
    tile.current.applyTorqueImpulse({ x: 0, y: 0.94, z: 0 });
  };
  //Generate Random tile function
 
  const[newTileArray,setNewTileArray]=useState([])
  const [newTile, setNewTile] = useState();
  const droptile = true;
  const [newTileData,setNewTileData]=useState()
  const drawEventHandler = async (tileType) => {
    console.log(tileType);

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
        <TileComponent.default scale={tileScale}   />
      </RigidBody>
    );
    
    setNewTile(renderNewTile);
    setReleaseTile(true);
    console.log(renderNewTile);
  };


  useEffect(() => {
    setBoardGameMatrix((currBoard) => {
      const newboard = JSON.parse(JSON.stringify(currBoard));

      tileData.orientation = tileRotation * (180 / Math.PI);
      newboard[5][5] = [tileData];
      return newboard;
    });
  }, []);

  
  const grid = createGameBoard(
    boardGameMatrix, 
    tileSize, 
    tileScale, 
    setReleaseTile, 
    setNewTilePosition,
    setNewTile2DPosition
  )

  // RENDERING STARTS HERE //


  function tileChecks(x,z,i,j){
    setReleaseTile(true);
                setNewTilePosition([
                  x * tileSize,
                  4,
                  z * tileSize,
                ]);
                setNewTile((currTile) => {
                  if(currTile ===  undefined){
                    return currTile
                  }
                  const updatedTile = {
                    ...currTile,
                    props: {
                      ...currTile.props,
                      position: [
                        x * tileSize,
                        4,
                        z * tileSize,
                      ]
                    }
                  };
                  return updatedTile; 
                });
                setNewTile2DPosition([i + 5, j + 5]);

  }
  
  const grid = [];

  for (let i = -5; i < 6; i++) {
    for (let j = -5; j < 6; j++) {
      // Create the tile
      const position = new THREE.Vector3(i, 0, j);
      const tile = (
        <mesh
          key={`${i}-${j}-tile`}
          onClick={() => {
            console.log(position);
           
            if (i === -5 || j === -5) {
              // board edge case
              if (
                boardGameMatrix[i + 5][j + 5]?.length === 0 &&(boardGameMatrix[i + 6][j + 5]?.length > 0 || boardGameMatrix[i + 5][j + 6]?.length > 0 || boardGameMatrix[i + 5][j + 4]?.length > 0 )) {
                tileChecks(position.x,position.z,i,j)
              }
            } else if (
              // selected a green tile
              boardGameMatrix[i + 5][j + 5]?.length === 0 &&
              (boardGameMatrix[i + 4][j + 5]?.length > 0 ||
                boardGameMatrix[i + 5][j + 4]?.length > 0 ||
                boardGameMatrix[i + 6][j + 5]?.length > 0 ||
                boardGameMatrix[i + 5][j + 6]?.length > 0)
            ) {
              //setReleaseTile(!releaseTile);
              tileChecks(position.x,position.z,i,j)
            }
          }}
          position={[i * tileSize, 0, j * tileSize]}
          scale={tileScale}
        >
          <boxGeometry args={[tileSize, 0.1, tileSize]} />
          <meshBasicMaterial color={tileColourLogic(i, j,boardGameMatrix)} />
        </mesh>
      );
      grid.push(tile);
    }
  }


  return (
    <GameEngineProvider>
      <UI 
        setBoardGameMatrix={setBoardGameMatrix} 
        tileRotation={tileRotation}
        setTileRotation={setTileRotation}
      />
      
      <div className={styles.gameBoard}>
        <button
          className={styles.button}
          onClick={() => {
            setBoardGameMatrix((currBoard) => {
              const newboard = JSON.parse(JSON.stringify(currBoard));
              tileData.orientation = tileRotation * (180 / Math.PI);
              newboard[newTile2DPosition[0]][newTile2DPosition[1]] = [newTileData];
              return newboard;
            });
            setNewTileArray((currArray)=>{
              return [...currArray,newTile]
            })
            setReleaseTile(false)
            console.log(newTileArray);
          }}
        >
          Confirm
        </button>

        <button onClick={() => {
            // tileJump();
            setTileRotation((currRotation) => {
              return currRotation - Math.PI / 2
            })
          }}
          className={styles.confirmbutton}>
          Rotate
        </button>
        <button
          onClick={async () => {
            console.log(releaseTile,'heeeeeeeeeereeeeee');
            const randomTile = await randomTileGenerator();
            console.log(randomTile.tile_type);
            setNewTileData(randomTile)
            drawEventHandler(randomTile.tile_type);
            
            setReleaseTile(true);
            console.log(newTile.props.position);
          }}
        >
          Get Tile
        </button>

        <Canvas shadows camera={{ fov: 60, position: [0, 5, 10] }}>
          <Physics debug>
            <ambientLight intensity={0.1} />


        <Canvas shadows camera={{ fov: 100, position: [0, 8, 16] }}>
          <Physics >
            <ambientLight intensity={0.4} />
            <Sky sunPosition={sunPosition} />
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
              minDistance={5}
              maxDistance={30}
              enableRotate={enableRotate}
              maxPolarAngle={Math.PI / 2 - 0.1}
            />

            <RigidBody>
              <TileD
                position={[0, 4, 0]}
                scale={tileScale}
              />
            </RigidBody>


            {releaseTile ? newTile : null}
            {releaseTile ? console.log("i am here") : null}
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
    </GameEngineProvider>
  );
}

export default GameBoard;
