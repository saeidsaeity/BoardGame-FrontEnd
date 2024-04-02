import { getTile } from "../../../api";


const randomTileGenerator = async () => {
    const randInt = Math.floor(Math.random() * 24);
    const tileType = String.fromCharCode(randInt + 64);
    console.log(tileType, "tileType FUNC");
    const randomTile = await getTile(tileType);
    console.log(randomTile.tile_type);
    return randomTile;
  };

  export default randomTileGenerator