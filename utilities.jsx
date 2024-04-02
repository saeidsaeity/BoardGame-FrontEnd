import * as THREE from 'three';

export const createGameBoard = (
  boardGameMatrix, 
  tileSize, tileScale, 
  setReleaseTile,
  setNewTilePosition,
  setNewTile2DPosition
  ) => {
  const grid = [];
  for (let i = -5; i < 6; i++) {
    for (let j = -5; j < 6; j++) {
      // Create the tile
      const position = new THREE.Vector3(i, 0, j);
      const tile = (
        <mesh
          key={`${i}-${j}-tile`}
          onClick={() => {
            if (i === -5 || j === -5) {
              // board edge case
              if (boardGameMatrix[i + 5][j + 5]?.length === 0 &&
                  (boardGameMatrix[i + 6][j + 5]?.length > 0 ||
                  boardGameMatrix[i + 5][j + 6]?.length > 0)) 
                {
                  setReleaseTile(true);
                  setNewTilePosition([ position.x * tileSize, 4, position.z * tileSize,]);
                  setNewTile2DPosition([i + 5, j + 5]);
                }
              } 
              // selected a green tile
              else if 
                (boardGameMatrix[i + 5][j + 5]?.length === 0 &&
                (boardGameMatrix[i + 4][j + 5]?.length > 0 ||
                boardGameMatrix[i + 5][j + 4]?.length > 0 ||
                boardGameMatrix[i + 6][j + 5]?.length > 0 ||
                boardGameMatrix[i + 5][j + 6]?.length > 0)
              ) {
                setReleaseTile(true)
                setNewTilePosition([
                  position.x * tileSize,
                  6,
                  position.z * tileSize,
                ]);
                setNewTile2DPosition([i + 5, j + 5]);
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

export const tileColourLogic = (i, j, boardGameMatrix) => {
    if (i === -5 || j === -5) {
      if (
        boardGameMatrix[i + 5][j + 5]?.length === 0 &&
        (boardGameMatrix[i + 6][j + 5]?.length > 0 ||
          boardGameMatrix[i + 5][j + 6]?.length > 0)
      ) {
        return 0x32cd32;
      } else {
        return 0xc3c3c3;
      }
    } else if (
      boardGameMatrix[i + 5][j + 5]?.length === 0 &&
      (boardGameMatrix[i + 4][j + 5]?.length > 0 ||
        boardGameMatrix[i + 5][j + 4]?.length > 0 ||
        boardGameMatrix[i + 6][j + 5]?.length > 0 ||
        boardGameMatrix[i + 5][j + 6]?.length > 0)
    ) {
      return 0x32cd32;
    } else {
      console.log('no colour');
      // does not colour all cells
      return 0xc3c3c3;
    }
  }


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

