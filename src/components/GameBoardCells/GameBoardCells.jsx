import * as THREE from 'three';
import { tileChecks, tileColourLogic } from '../../../utils.js';

export const GameBoardCells = ({
  boardGameMatrix,
  tileSize,
  tileScale,
  setReleaseTile,
  setNewTilePosition,
  setNewTile2DPosition,
  setNewTileMesh,
  setNewTileData,
  turnPhase,
  isCitizenPhase,
}) => {
  const grid = [];
  for (let i = -5; i < 6; i++) {
    for (let j = -5; j < 6; j++) {
      // Create the tile
      const position = new THREE.Vector3(i, 0, j);
      const tile = (
        <mesh
          key={`${i}-${j}-tile`}
          onClick={() => {
            if (turnPhase !== 'Place Tile') {
              console.log('You can not place during the citizen phase!');
              return [];
            }
            if (i === -5 || j === -5) {
              // board edge case
              if (
                boardGameMatrix[i + 5][j + 5]?.length === 0 &&
                (boardGameMatrix[i + 6][j + 5]?.length > 0 ||
                  boardGameMatrix[i + 5][j + 6]?.length > 0 ||
                  boardGameMatrix[i + 5][j + 4]?.length > 0)
              ) {
                tileChecks(
                  position.x,
                  position.z,
                  i,
                  j,
                  setReleaseTile,
                  setNewTilePosition,
                  setNewTileMesh,
                  setNewTile2DPosition,
                  tileSize
                );
                setNewTileData((currTileData) => {
                  const newtilepos = { ...currTileData };
                  newtilepos.grid_id = { row: position.x, column: position.z };
                  return newtilepos;
                });
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
              tileChecks(
                position.x,
                position.z,
                i,
                j,
                setReleaseTile,
                setNewTilePosition,
                setNewTileMesh,
                setNewTile2DPosition,
                tileSize
              );
              setNewTileData((currTileData) => {
                const newtilepos = { ...currTileData };
                newtilepos.grid_id = {
                  row: position.x + 5,
                  column: position.z + 5,
                };
                return newtilepos;
              });
            }
          }}
          position={[i * tileSize, 0, j * tileSize]}
          scale={tileScale}
        >
          <boxGeometry args={[tileSize, 0.1, tileSize]} />
          <meshPhongMaterial
            color={tileColourLogic(i, j, boardGameMatrix, isCitizenPhase)}
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
};
