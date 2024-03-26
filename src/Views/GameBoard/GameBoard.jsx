import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// asset loader
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/addons';

// 3D components
import TileA from "../../assets/tiles/tileA.jsx";
import TileB from "../../assets/tiles/tileB.jsx";
import TileC from "../../assets/tiles/tileC.jsx";
import TileD from "../../assets/tiles/tileD.jsx";

// styling
import styles from "./GameBoard.module.css";
import * as THREE from "three";
import { useGLTF, DragControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
function GameBoard() {
  const [input, setinput] = useState([]);
  const [enableRotate, setEnableRotate] = useState(true);
  const[currentPosition,setCurrentPosition]=useState([])
  const draggedTileRef = useRef([0,0,-2]);
  const tileScale = [0.94, 0.94, 0.94];
  const tileSize=2
const[newTilePosition,setnewTilePosition]=useState(draggedTileRef.current)
  const snapToGrid = ({ x, y, z }) => {
    return {
      x: Math.round(x / tileSize) * tileSize,
      y: 0,
      z: Math.round(z / tileSize) * tileSize,
    };
  };

  const handleDragStart = (event) => {
    setEnableRotate(false);
    // console.log(event);
  };

  const handleDragEnd = (reference) => {
    // console.log(draggedTileRef.current.position,'reference');
    console.log(currentPosition,'currentPosition');
    const newPosition=snapToGrid(currentPosition)
     console.log(newPosition,'newpos');
    
    draggedTileRef.current.position.set(newPosition.x,newPosition.y,newPosition.z)
    const {x,y,z}=draggedTileRef.current.position
    setnewTilePosition([x,y,z])
    console.log(newTilePosition,'new tile pos');
    setEnableRotate(true);
  };
 
 
  return (
    <div className={styles.gameBoard}>
      <Canvas shadows camera={{ fov: 60, position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          intensity={5}
          position={[-2, 3, 4]}
          shadow-normalBias={0.04}
        >
          +{" "}
        </directionalLight>
        <OrbitControls
          minDistance={5}
          maxDistance={20}
          enableRotate={enableRotate}
        />
        <DragControls
            
          onDragStart={(event) => {
            handleDragStart(event);
          }}
          onDragEnd={()=>{
            handleDragEnd()
          }
          }
          onDrag={(localMatrix) => {
            setCurrentPosition({x:localMatrix.elements[12],y:localMatrix.elements[13],z:localMatrix.elements[14]})
            // console.log(
            //   localMatrix.elements[12],
            //   localMatrix.elements[13],
            //   localMatrix.elements[14]
            // );
          }}
        >
            
          <TileA position={newTilePosition} scale={tileScale}  ref={draggedTileRef} />
          
        </DragControls>
        <TileB
          position={[-2, 0, 0]}
          scale={tileScale}
          rotation-y={Math.PI * -0.5}
        />
        <TileC position={[2, 0, 0]} scale={tileScale} rotation-y={Math.PI} />
        <TileD position={[0, 0, 0]} scale={tileScale} />

        <axesHelper args={[5]} />
        <gridHelper args={[50, 25, "black", "red"]} />
      </Canvas>
    </div>
  );
}

export default GameBoard;
