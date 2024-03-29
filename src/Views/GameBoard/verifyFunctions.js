

/*
Verifications:
- Tile can be placed
- Citizen can be placed
- Check if tile placed completes road
- Check if tile placed completes 
- End of Game, count unearned points

Functions:
- assetInDirection
- Verify tile can be placed
*/





// Takes a tile and a direction, and gives the asset in that 
// direction taking into account the orientation
// e.g. tile D with orientation 90 and given direction south
// would return asset city with no connects

const assetInDirection = (tile, directionNum) => {
    // convert the orientation into a number from 0-3
    const turn = tile.orientation/90

    // orientation added (mod 4) to get asset direction
    const assetDir = (directionNum + turn) % 4

    // return asset in that direction
    return tile.assets[assetDir]
}





const adjacentTileCoords = (tile, directionNum) => {
    // switch case returns coordinates of the tile in that
    // direction relative to the input tile
    switch(directionNum) {
        case 0:
            return {
                row: tile.grid_id.row - 1, 
                column: tile.grid_id.column,
            }
            break;
        case 1:
            return {
                row: tile.grid_id.row, 
                column: tile.grid_id.column + 1,
            }
            break;
        case 2:
            return {
                row: tile.grid_id.row + 1, 
                column: tile.grid_id.column,
            }
            break;
        case 3:
            return {
                row: tile.grid_id.row, 
                column: tile.grid_id.column - 1,
            }
            break;
    }
}



const checkTilePlacement = (tile) => {
    for (i=0; i<=3; i++) {
        // get adjacent tile in direction
    }
}

module.exports = { assetInDirection, adjacentTileCoords }