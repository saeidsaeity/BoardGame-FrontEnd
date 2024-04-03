import { getTile } from './src/api';


export const randomTileGenerator = async () => {
    const randInt = Math.floor((Math.random() * 23)+1);
    const tileType = String.fromCharCode(randInt + 64);
    console.log(tileType, "tileType FUNC");
    const randomTile = await getTile(tileType);
    console.log(randomTile.tile_type);
    return randomTile;
};

export default randomTileGenerator



export const tileChecks = (x,z,i,j,setReleaseTile, setNewTilePosition, setNewTile, setNewTile2DPosition, tileSize) => {
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


  export const tileColourLogic = (i, j, boardGameMatrix, isCitizenPhase ) => {
    if (i === -5 || j === -5) {
      if (
        boardGameMatrix[i + 5][j + 5]?.length === 0 &&
        (boardGameMatrix[i + 6][j + 5]?.length > 0 ||
          boardGameMatrix[i + 5][j + 6]?.length > 0 || 
          boardGameMatrix[i + 5][j + 4]?.length > 0 )
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
      if(isCitizenPhase === true) return 0xc3c3c3;
      else return 0x32cd32;
    } else {
      if(isCitizenPhase === false) return 0xc3c3c3;
    }
  };
