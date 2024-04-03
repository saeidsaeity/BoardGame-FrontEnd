import * as THREE from 'three';
import { useGameEngine } from './src/Context/useGameEngine';
import { setState, getState } from 'playroomkit'

export const createGameBoard = (
  tileSize, 
  tileScale, 
  setReleaseTile,
  setNewTilePosition,
  setNewTile2DPosition,
  setNewTile,
  setNewTileData,
  turnPhase
  ) => {

  const boardGameMatrix = getState('boardGameMatrix')

  function tileChecks(x,z,i,j,){
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
            // console.log(position);
            if(turnPhase !== 'Place Tile') {
              console.log('You can not place during the citizen phase!');
              return []
            }
            if (i === -5 || j === -5) {
              // board edge case
              if (
                boardGameMatrix[i + 5][j + 5]?.length === 0 &&(boardGameMatrix[i + 6][j + 5]?.length > 0 || boardGameMatrix[i + 5][j + 6]?.length > 0 || boardGameMatrix[i + 5][j + 4]?.length > 0 )) {
                tileChecks(position.x,position.z,i,j)
                setNewTileData((currTileData)=>{
                  const newtilepos = {...currTileData}
                  newtilepos.grid_id={row:position.x,column:position.z}
                  return newtilepos
                })
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
              setNewTileData((currTileData)=>{
                const newtilepos = {...currTileData}
                newtilepos.grid_id={row:position.x+5,column:position.z+5}
                return newtilepos
              })
            }
          }}

          position={[i * tileSize, 0, j * tileSize]}
          scale={tileScale}
        >
          <boxGeometry args={[tileSize, 0.1, tileSize]} />

          <meshPhongMaterial 
            color={tileColourLogic(i, j, boardGameMatrix)} 
            transparent={true} 
            opacity={0.2} 
            receiveShadow
          />

        </mesh>
      );
      grid.push(tile);
    }
  
    }
  return grid;
}

export const tileColourLogic = (i, j) => {

  const boardGameMatrix = getState('boardGameMatrix')

  if (i === -5 || j === -5) {
    if (
      boardGameMatrix[i + 5][j + 5]?.length === 0 &&
      (boardGameMatrix[i + 6][j + 5]?.length > 0 ||
        boardGameMatrix[i + 5][j + 6]?.length > 0 || 
        boardGameMatrix[i + 5][j + 4]?.length > 0 )
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
   
    // does not colour all cells?
    return 0xc3c3c3;
  }
};


  export const tileJump = () => {
    console.log('jump');
    tile.current.applyImpulse({ x: 0, y: 10, z: 0 });
    tile.current.applyTorqueImpulse({ x: 0, y: 0.94, z: 0 });
  }

  export const randomTileGenerator=async ()=>{
    const randInt= Math.floor(Math.random() * 24);
    const char=String.fromCharCode(randInt + 64);
    const randomTile=await getTile(char)
    return randomTile
  }

