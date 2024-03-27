import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { DragControls, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

// asset loader
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

// 3D components
import TileA from "../../assets/tiles/tileA.jsx";
import TileB from "../../assets/tiles/tileB.jsx";
import TileC from "../../assets/tiles/tileC.jsx";
import TileD from "../../assets/tiles/tileD.jsx";

// styling
import styles from "./GameBoard.module.css";
import TileE from "../../assets/tiles/tileE.jsx";
import TileF from "../../assets/tiles/tileF.jsx";
import TileG from "../../assets/tiles/tileG.jsx";
import TileH from "../../assets/tiles/tileH.jsx";
import TileI from "../../assets/tiles/tileI.jsx";
import TileJ from "../../assets/tiles/tileJ.jsx";
import TileK from "../../assets/tiles/tileK.jsx";
import TileL from "../../assets/tiles/tileL.jsx";

//test
import { tiledata } from "./testboarddata.js";

function GameBoard() {
  const [enableRotate, setEnableRotate] = useState(true);
  const tileScale = [0.94, 0.94, 0.94];
  const tileSize = 2;

  const [boardGameMatrix, setBoardGameMatrix] = useState(
    Array(11).fill([[], [], [], [], [], [], [], [], [], [], []], 0, 11)
  );

  // TILE DRAGGING
  console.log(boardGameMatrix);
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0, z: 0 });
  const [placedPosition, setPlacedPosition] = useState([]);
  const draggedTileRef = useRef({ localMatrix: [] });
  const starterTileRef = useRef({ position: [0, 0, 0] });

  //rotatiom
  const [tileRotation, setTileRotation] = useState(0);
  useEffect(() => {
    const useEffectPosition = snapToGrid(currentPosition);
    console.log(currentPosition, "currentPosition EFFECT");
    console.log(useEffectPosition, "useEffectPosition");
    // console.log(draggedTileRef.current.position)
    console.log(tiledata, "tiledata");
    setPlacedPosition([
      useEffectPosition.x,
      useEffectPosition.y,
      useEffectPosition.z,
    ]);
    console.log(useEffectPosition);
    if (useEffectPosition) {
      setBoardGameMatrix((currBoard) => {
        console.log('here');
         const newboard = JSON.parse(JSON.stringify(currBoard))
        
        if (newboard[useEffectPosition.x+5] === undefined) {
        newboard[useEffectPosition.x+5]=JSON.parse(JSON.stringify([[],[],[],[],[],[],[],[],[],[],[]]))
        }
        tiledata.orientation=tileRotation*(180/Math.PI)
        console.log(useEffectPosition.x);
        newboard[useEffectPosition.x+5][useEffectPosition.z+5] = tiledata;
        return newboard;
      });
    }
  }, [currentPosition]);

  const snapToGrid = (currentPosition) => {
    // console.log(currentPosition.x, "snaptoGrid curr");
    return {
      x: Math.round(currentPosition.x / tileSize) * tileSize,
      y: 0,
      z: Math.round(currentPosition.z / tileSize) * tileSize,
    };
  };

  const handleDragStart = () => {
    setEnableRotate(false);
  };

  return (
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
      <Canvas shadows camera={{ fov: 60, position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          intensity={5}
          position={[-2, 3, 4]}
          shadow-normalBias={0.04}
        />
        <OrbitControls
          minDistance={5}
          maxDistance={20}
          enableRotate={enableRotate}
        />
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
            console.log(draggedTileRef.current.localMatrix, "local");
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
        >
          {/* <TileA
            position={placedPosition}
            scale={tileScale}
            ref={draggedTileRef}
            rotation-y={tileRotation}
          /> */}
        </DragControls>
{/* 
        <TileB
          position={[4, 0, -2]}
          scale={tileScale}
          rotation-y={Math.PI * 1}
        />
        <TileC position={[2, 0, 0]} scale={tileScale} rotation-y={Math.PI} /> */}
        <TileD position={[0, 0, 0]} scale={tileScale} ref={starterTileRef} />
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

        <axesHelper args={[5]} />
        <gridHelper args={[50, 25, "black", "red"]} />
      </Canvas>
    </div>
  );
}

export default GameBoard;
