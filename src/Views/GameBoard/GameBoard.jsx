

import { useEffect, useRef, useState } from "react";
import { DragControls, OrbitControls, Sky } from "@react-three/drei";
import { Perf } from 'r3f-perf'
import { Physics, RigidBody } from '@react-three/rapier'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { UI } from './UI.jsx'
import { GameEngineProvider } from '../../Context/useGameEngine.jsx'

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

// styling
import styles from "./GameBoard.module.css";

//test
import { tiledata } from "./testboarddata.js";
import { useControls } from "leva";

function GameBoard() {
  const tileScale = [0.94, 0.94, 0.94];
  const tileSize = 2;
  
  const [boardGameMatrix, setBoardGameMatrix] = useState(
    [[[],[],[],[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[],[],[],[]]]
    )
    
    

  // CAMERA  
  const [enableRotate, setEnableRotate] = useState(true);

  // TILE DRAGGING
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0, z: 0 });
  const [placedPosition, setPlacedPosition] = useState([0,4,2]);

  const draggedTileRef = useRef({ localMatrix: [] });
  const tile = useRef()
  const starterTileRef = useRef({ position: [0, 0, 0] });

  const { sunPosition } = useControls('sky', {
    sunPosition: { value: [ 1, 2, 3 ]}
  })

  const tileJump = () => {
    console.log('jump');
    tile.current.applyImpulse({ x: 0, y: 5, z: 0})
    tile.current.applyTorqueImpulse({ x: 0, y: 2, z: 0})
  }
  
  //rotatiom
  const [tileRotation, setTileRotation] = useState(0);
  useEffect(()=>{
    setBoardGameMatrix((currBoard) => {
      
          const newboard = JSON.parse(JSON.stringify(currBoard))
        
        newboard[placedPosition[5]]=JSON.parse(JSON.stringify([[],[],[],[],[],[],[],[],[],[],[],[]]))
        
        tiledata.orientation=tileRotation*(180/Math.PI)
        
        newboard[5][5] = [tiledata];
        return newboard;
      });
  },[])


  const snapToGrid = (currentPosition) => {
    return {
      x: Math.round(currentPosition.x / tileSize) * tileSize,
      y: 0,
      z: Math.round(currentPosition.z / tileSize) * tileSize,
    };
  };

  console.log(boardGameMatrix);
  const confirmTilePlacement = ()=>{
    const snappedPosition = snapToGrid(currentPosition);
    setPlacedPosition([
        snappedPosition.x,
        snappedPosition.y,
        snappedPosition.z,
    ]);
    
    setBoardGameMatrix((currBoard) => {
      const newboard = JSON.parse(JSON.stringify(currBoard))
      if (newboard[placedPosition[0]/2+5] === undefined) {
        newboard[placedPosition[0]/2+5]=JSON.parse(JSON.stringify([[],[],[],[],[],[],[],[],[],[],[]]))
      }
      tiledata.orientation=tileRotation*(180/Math.PI)
      newboard[placedPosition[0]/2+5][placedPosition[2]/2+5] = [tiledata];
      console.log(newboard, "newboard");
      return newboard;
    });
  }
  const tileColourLogic=(i,j)=>{
    // console.log(boardGameMatrix[i+5][j+5],boardGameMatrix[i+6][j+5],boardGameMatrix[i+5][j+6]);
    if(i===-5 || j=== -5){
      if(boardGameMatrix[i+5][j+5]?.length === 0 && ( boardGameMatrix[i+6][j+5]?.length>0 ||boardGameMatrix[i+5][j+6]?.length>0 ) ){
        return 0x32CD32
      }
      else{
        return  0xffffff
      }
    }
    else if(boardGameMatrix[i+5][j+5]?.length === 0 && (boardGameMatrix[i+4][j+5]?.length>0 || boardGameMatrix[i+5][j+4]?.length>0 || boardGameMatrix[i+6][j+5]?.length>0 ||boardGameMatrix[i+5][j+6]?.length>0 ) ){
    //   console.log('i am here');
      return 0x32CD32
     }
     else{
     console.log('no colour');
     return  0xffffff
     }



  }
  const grid =[]
  for (let i = -5; i < 6; i++) {
    for (let j = -5; j < 6; j++) {
        // Create the tile
        const position = new THREE.Vector3(i, 0, j)
        const tile = (
            <mesh
                key={`${i}-${j}-tile`}
                onClick={()=>{console.log(position);
                  setBoardGameMatrix((currBoard) => {
      
                    const newboard = JSON.parse(JSON.stringify(currBoard))
                  
                  newboard[placedPosition[5]]=JSON.parse(JSON.stringify([[],[],[],[],[],[],[],[],[],[],[],[]]))
                  
                  tiledata.orientation=tileRotation*(180/Math.PI)
                  
                  newboard[i+5][j+5] = [tiledata];
                  return newboard;
                });
                  
                }}
                position={[i * tileSize, 0, j * tileSize]}
                scale={tileScale}

                
            >
                <boxGeometry args={[tileSize, 0.1, tileSize]} />
                <meshBasicMaterial color={tileColourLogic(i,j)} />
            </mesh>
        );
        grid.push(tile);

              }

            }



  return (
    <GameEngineProvider>
    <UI/>
    <div className={styles.gameBoard}>
      <button className={styles.button}
        onClick={() => {
          setTileRotation((currRotation) => {
            return currRotation - Math.PI / 2;
          });
        }}
      >
        Press to Rotate
      </button>

      <button 
        onClick={()=>{
          // confirmTilePlacement()
          tileJump()
        }}
        className={styles.confirmbutton}
      >
        Confirm Tile
      </button>
      
      <Canvas 
        shadows 
        camera={{ fov: 60, position: [0, 5, 10] }}
      >
        <Physics debug>
        
        <ambientLight intensity={0.1} />

        <Sky sunPosition={sunPosition}/>

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
          maxPolarAngle = { ( Math.PI / 2 ) - 0.1}
        />
{/* 
        <DragControls
          autoTransform={true}
          axisLock={"y"}
          dragLimits={[
            [-5, 5],
            [-10, 10],
            [-5, 5],
          ]}
          onDragStart={(origin) => {}}
          onDrag={(localMatrix) => {
            draggedTileRef.current.localMatrix = {
              x: localMatrix.elements[12],
              y: 0,
              z: localMatrix.elements[14],
            };
          }}
          onDragEnd={() => {
            setEnableRotate(true);
            setCurrentPosition(draggedTileRef.current.localMatrix);
          }}
          onHover={(hovering) => {
            if (hovering) {
              setEnableRotate(false);
            } else {
              setEnableRotate(true);
            }
          }}
        > */}
          
        <RigidBody ref={tile} canSleep={ false } restitution={ 0.2 }>
          <TileA
            position={placedPosition}
            scale={tileScale}
            ref={draggedTileRef}
            rotation-y={tileRotation}
            onCollisionExit={ () => { console.log('collision exit') } }
            onSleep = { () => { console.log('sleep') } }
            onWake = { () => { console.log( 'wake' ) } }
          />
        </RigidBody>

        {/* </DragControls> */}
        
        <RigidBody>
          <TileD position={[0, 4, 0]} scale={tileScale} ref={starterTileRef} />
        </RigidBody>

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

        



        {/* <TileE position={[2, 0, 2]} scale={tileScale} />
        <TileF
          position={[2, 0, -2]}
          scale={tileScale}
          rotation-y={Math.PI * 0.5}
        />
        <TileG
          position={[2, 0, -4]}
          scale={tileScale}
          rotation-y={Math.PI * 0.5}
        />
        <TileH position={[4, 0, 0]} scale={tileScale} />
        <TileI
          position={[0, 0, -4]}
          scale={tileScale}
          rotation-y={Math.PI * -0.5}
        />
        <TileJ
          position={[0, 0, 2]}
          scale={tileScale}
          rotation-y={Math.PI * 1}
        />
        <TileK
          position={[0, 0, -2]}
          scale={tileScale}
          rotation-y={Math.PI * 0.5}
        />
        <TileL
          position={[-2, 0, -2]}
          scale={tileScale}
          rotation-y={Math.PI * 0.5}
        /> */}


        {/* HELPERS */}
        <Perf position="top-left"/>
        <axesHelper args={[5]} />
        <gridHelper args={[50, 25, "black", "red"]} />
        </Canvas>
        </div>
         </GameEngineProvider>
    );

}

export default GameBoard;
