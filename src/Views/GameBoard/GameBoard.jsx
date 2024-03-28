import { useEffect, useRef, useState } from 'react';
import { DragControls, OrbitControls, Sky } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { Physics, RigidBody } from '@react-three/rapier';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { UI } from './UI.jsx';
import { GameEngineProvider } from '../../Context/useGameEngine.jsx';

// asset loader
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

// 3D components
import TileA from '../../assets/tiles/tileA.jsx';
import TileB from '../../assets/tiles/tileB.jsx';
import TileC from '../../assets/tiles/tileC.jsx';
import TileD from '../../assets/tiles/tileD.jsx';
import TileE from '../../assets/tiles/tileE.jsx';
import TileF from '../../assets/tiles/tileF.jsx';
import TileG from '../../assets/tiles/tileG.jsx';
import TileH from '../../assets/tiles/tileH.jsx';
import TileI from '../../assets/tiles/tileI.jsx';
import TileJ from '../../assets/tiles/tileJ.jsx';
import TileK from '../../assets/tiles/tileK.jsx';
import TileL from '../../assets/tiles/tileL.jsx';

// styling
import styles from './GameBoard.module.css';

//test
import { tiledata } from './testboarddata.js';
import { useControls } from 'leva';

function GameBoard() {
  const tileScale = [0.94, 0.94, 0.94];
  const tileSize = 2;

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
  const [enableRotate, setEnableRotate] = useState(true);

  // TILE DRAGGING
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0, z: 0 });
  const [placedPosition, setPlacedPosition] = useState([0, 4, 2]);
  const [newTilePosition, setNewTilePosition] = useState([]);
  const [newTile2DPosition, setNewTile2DPosition] = useState([]);
  const [relaseTile, setReleaseTile] = useState(false);

  const draggedTileRef = useRef({ localMatrix: [] });
  const tile = useRef();
  const starterTileRef = useRef({ position: [0, 0, 0] });

  const { sunPosition } = useControls('sky', {
    sunPosition: { value: [1, 2, 3] },
  });

  const tileJump = () => {
    console.log('jump');
    tile.current.applyImpulse({ x: 0, y: 10, z: 0 });
    tile.current.applyTorqueImpulse({ x: 0, y: 1, z: 0 });
  };

  //rotation
  const [tileRotation, setTileRotation] = useState(0);
  useEffect(() => {
    setBoardGameMatrix((currBoard) => {
      const newboard = JSON.parse(JSON.stringify(currBoard));

      newboard[placedPosition[5]] = JSON.parse(
        JSON.stringify([[], [], [], [], [], [], [], [], [], [], [], []])
      );

      tiledata.orientation = tileRotation * (180 / Math.PI);

      newboard[5][5] = [tiledata];
      return newboard;
    });
  }, []);

  const dropTile = () => {

  }

  // console.log(boardGameMatrix);

  const confirmTilePlacement = () => {
    const snappedPosition = snapToGrid(currentPosition);
    setPlacedPosition([
      snappedPosition.x,
      snappedPosition.y,
      snappedPosition.z,
    ]);

    setBoardGameMatrix((currBoard) => {
      const newboard = JSON.parse(JSON.stringify(currBoard));
      if (newboard[placedPosition[0] / 2 + 5] === undefined) {
        newboard[placedPosition[0] / 2 + 5] = JSON.parse(
          JSON.stringify([[], [], [], [], [], [], [], [], [], [], []])
        );
      }
      tiledata.orientation = tileRotation * (180 / Math.PI);
      newboard[placedPosition[0] / 2 + 5][placedPosition[2] / 2 + 5] = [
        tiledata,
      ];
      console.log(newboard, 'newboard');
      return newboard;
    });
  };

  const tileColourLogic = (i, j) => {
    // console.log(boardGameMatrix[i+5][j+5],boardGameMatrix[i+6][j+5],boardGameMatrix[i+5][j+6]);
    if (i === -5 || j === -5) {
      if (
        boardGameMatrix[i + 5][j + 5]?.length === 0 &&
        (boardGameMatrix[i + 6][j + 5]?.length > 0 ||
          boardGameMatrix[i + 5][j + 6]?.length > 0)
      ) {
        return 0x32cd32;
      } else {
        return 0xffffff;
      }
    } else if (
      boardGameMatrix[i + 5][j + 5]?.length === 0 &&
      (boardGameMatrix[i + 4][j + 5]?.length > 0 ||
        boardGameMatrix[i + 5][j + 4]?.length > 0 ||
        boardGameMatrix[i + 6][j + 5]?.length > 0 ||
        boardGameMatrix[i + 5][j + 6]?.length > 0)
    ) {
      //   console.log('i am here');
      return 0x32cd32;
    } else {
      console.log('no colour');
      return 0xffffff;
    }
  };

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
                boardGameMatrix[i + 5][j + 5]?.length === 0 &&
                (boardGameMatrix[i + 6][j + 5]?.length > 0 ||
                  boardGameMatrix[i + 5][j + 6]?.length > 0)
              ) {
                setReleaseTile(true);
                setNewTilePosition([
                  position.x * tileSize,
                  4,
                  position.z * tileSize,
                ]);
                setNewTile2DPosition([i + 5, j + 5]);
              }
            } else if (
              // selected a green tile
              boardGameMatrix[i + 5][j + 5]?.length === 0 &&
              (boardGameMatrix[i + 4][j + 5]?.length > 0 ||
                boardGameMatrix[i + 5][j + 4]?.length > 0 ||
                boardGameMatrix[i + 6][j + 5]?.length > 0 ||
                boardGameMatrix[i + 5][j + 6]?.length > 0)
            ) {
              setReleaseTile(true)
              setNewTilePosition([
                position.x * tileSize,
                4,
                position.z * tileSize,
              ]);
              setNewTile2DPosition([i + 5, j + 5]);
            }
          }}
          position={[i * tileSize, 0, j * tileSize]}
          scale={tileScale}
        >
          <boxGeometry args={[tileSize, 0.1, tileSize]} />
          <meshBasicMaterial color={tileColourLogic(i, j)} />
        </mesh>
      );
      grid.push(tile);
    }
  }

  return (
    <GameEngineProvider>
      <UI />
      <div className={styles.gameBoard}>
        <button
          className={styles.button}
          onClick={() => {
            setBoardGameMatrix((currBoard) => {
              const newboard = JSON.parse(JSON.stringify(currBoard));
              tiledata.orientation = tileRotation * (180 / Math.PI);
              newboard[newTile2DPosition[0]][newTile2DPosition[1]] = [tiledata];
              return newboard;
            });
          }}
        >
          Confirm
        </button>

        <button
          onClick={() => {
            // confirmTilePlacement()
            tileJump();
            setTileRotation((currRotation) => {
              return currRotation - Math.PI / 2;
            });
          }}
          className={styles.confirmbutton}
        >
          Rotate
        </button>

        <Canvas shadows camera={{ fov: 60, position: [0, 5, 10] }}>
          <Physics debug>
            <ambientLight intensity={0.1} />

            <Sky sunPosition={sunPosition} />

            <directionalLight
              castShadow
              intensity={3}
              position={sunPosition}
              shadow-normalBias={0.04}
            />

            <OrbitControls
              minDistance={5}
              maxDistance={20}
              enableRotate={enableRotate}
              maxPolarAngle={Math.PI / 2 - 0.1}
            />

            {/* <RigidBody ref={tile} canSleep={false} restitution={0.2}>
              <TileA
                position={placedPosition}
                scale={tileScale}
                ref={draggedTileRef}
                rotation-y={tileRotation}
                onCollisionExit={() => {
                  console.log('collision exit');
                }}
                onSleep={() => {
                  console.log('sleep');
                }}
                onWake={() => {
                  console.log('wake');
                }}
              />
            </RigidBody> */}

            <RigidBody>
              <TileD
                position={[0, 4, 0]}
                scale={tileScale}
                ref={starterTileRef}
              />
            </RigidBody>

            {relaseTile ? (
              <RigidBody ref={tile} canSleep={false}>
                <TileD
                  position={newTilePosition}
                  scale={tileScale}
                  rotation-y={tileRotation}
                />
              </RigidBody>
            ) : null}

            <RigidBody type="fixed">
              {/* <mesh receiveShadow position-y={ -0.3 } >
                <boxGeometry args={ [ 25, 0.5, 25 ] } />
                <meshStandardMaterial color="#8f4111" />
              </mesh> */}
              {grid}
            </RigidBody>

            {/* <RigidBody ref={tile} canSleep={ false } restitution={ 0.2 }>
          <TileC
            position={[0,0,4]}
            scale={tileScale}
            ref={draggedTileRef}
            rotation-y={tileRotation}
            onCollisionExit={ () => { console.log('collision exit') } }
            onSleep = { () => { console.log('sleep') } }
            onWake = { () => { console.log( 'wake' ) } }
          />
        </RigidBody> */}
          </Physics>

          {/* HELPERS */}
          <Perf position="top-left" />
          <axesHelper args={[5]} />
          <gridHelper args={[50, 25, 'black', 'red']} />
        </Canvas>
      </div>
    </GameEngineProvider>
  );
}

export default GameBoard;
