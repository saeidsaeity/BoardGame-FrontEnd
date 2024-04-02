import { useEffect, useRef, useState } from 'react';
import { Cloud, Clouds, OrbitControls, PresentationControls, Sky } from '@react-three/drei';
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
// import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

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
import { tileData } from './testboarddata.js';
import { useControls } from 'leva';
import Menu from '../../components/Menu/Menu.jsx';
import { CitizenRed } from '../../assets/citizens/CitizenRed.jsx';

const GameBoard = () => {

  const tileScale = [0.94, 0.94, 0.94];
  const tileSize = 2;
  
  // CAMERA
  const [enableRotate, setEnableRotate] = useState(true);

  // TILE DRAGGING
  const tile = useRef();

  // Leva
  // const { sunPosition } = useControls('sky', {
  //   sunPosition: { value: [1, 2, 3] },
  // });

  // States
  const [ sunPosition, setSunPosition ] = useState([150, 150, -250])
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

  console.log(boardGameMatrix)

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
              newboard[newTile2DPosition[0]][newTile2DPosition[1]] = [tileData];
              return newboard;
            });
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
          className={styles.confirmbutton}
        >Rotate</button>

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
              <TileD
                position={[0, 4, 0]}
                scale={tileScale}
              />
            </RigidBody>

            <RigidBody gravityScale={0.5} position={ [ 0, 6, 0]} scale={0.095} friction={1} mass={10} rotation={[ 0 ,0 ,0 ]} canSleep={false} >
              <CitizenRed />
            </RigidBody>

            {relaseTile ? (
              <RigidBody ref={tile} 
                canSleep={false}  
                position={newTilePosition}
                rotation={[ 0, tileRotation , 0 ]}
              >
                <TileD scale={tileScale} />
              </RigidBody>
            ) : null}

            <RigidBody type="fixed">
              <mesh position-y={ -0.3 } >
                <boxGeometry args={ [ 25, 0.5, 25 ] } />
                <meshStandardMaterial color="#8f4111" />
              </mesh>
              {grid}
            </RigidBody>
          </Physics>

          {/* HELPERS */}
          {/* <Perf position="top-left" /> */}
          {/* <axesHelper args={[5]} />
          <gridHelper args={[50, 25, 'black', 'red']} /> */}
        </Canvas>
      </div>
    </GameEngineProvider>
  );
}

export default GameBoard;
