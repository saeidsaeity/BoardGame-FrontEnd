import * as THREE from "three";
import { tileChecks, tileColourLogic } from "../../../utils.js";
import { useGameEngine } from "../../Context/useGameEngine.jsx";
import { useContext } from "react";
import { BoardGameContext } from "../../Context/BoardGameContext.jsx";
import { myPlayer } from "playroomkit";
import useSound from "use-sound";
export const GameBoardCells = ({ newTilePosition }) => {
  const [sound] = useSound("drop.wav");
  const [falling]= useSound('falling.mp3')
  const tileScale = [0.92, 0.92, 0.92];
  const tileSize = 2;
  const {
    setReleaseTile,
    setNewTile2DPosition,
    setNewTileData,
    newTileMesh,
    setNewTileMesh,
  } = useContext(BoardGameContext);
  const {
    setNewTilePosition,
    boardGameMatrix,
    turnPhase,
    isCitizenPhase,
    players,
    playerTurn,
  } = useGameEngine();
  const player = players[playerTurn];
  const me = myPlayer();
  const grid = [];
  for (let i = -5; i < 6; i++) {
    for (let j = -5; j < 6; j++) {
      // Create the tile
      const position = new THREE.Vector3(i, 0, j);
      const tile = (
        <mesh
          key={`${i}-${j}-tile`}
          onClick={() => {
            if (newTileMesh) {
              if (me.id === player.id) {
                if (turnPhase !== "Place Tile") {
                  console.log("You can not place during the citizen phase!");
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
                    falling()
                    tileChecks(
                      position.x,
                      position.z,
                      i,
                      j,
                      setReleaseTile,
                      setNewTilePosition,
                      setNewTile2DPosition,
                      tileSize,
                      newTileMesh,
                      setNewTileMesh
                    );
                    setNewTileData((currTileData) => {
                      const newtilepos = { ...currTileData };
                      newtilepos.grid_id = {
                        row: position.x,
                        column: position.z,
                      };
                      
                      setTimeout(function () {
                        sound();
                      }, 900);
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
                  falling()
                  //setReleaseTile(!releaseTile);
                  tileChecks(
                    position.x,
                    position.z,
                    i,
                    j,
                    setReleaseTile,
                    setNewTilePosition,
                    setNewTile2DPosition,
                    tileSize,
                    newTileMesh,
                    setNewTileMesh
                  );
                  setNewTileData((currTileData) => {
                    const newtilepos = { ...currTileData };
                    newtilepos.grid_id = {
                      row: position.x + 5,
                      column: position.z + 5,
                    };
                    
                    setTimeout(function () {
                      sound();
                    }, 1000);
                    return newtilepos;
                  });
                }
              }
            } else {
              console.log("please draw a tile");
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
