

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

    // orientation minused to get asset direction
    let assetDir = (directionNum - turn)
    if (assetDir < 0) {assetDir += 4}


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



const checkSide = (tile, directionNum, matrix) => {
    // get coordinates for the tile on that side
    const sideTileCoords = adjacentTileCoords(tile, directionNum)

    // check tile is not off the grid
    if (sideTileCoords.row < 0 ||
        sideTileCoords.row > 10 ||
        sideTileCoords.column < 0 ||
        sideTileCoords.column > 10)
        {return true}

    // get the tile on that side
    let sideTile = matrix[sideTileCoords.row][sideTileCoords.column]
    
    // return true if there is no adjacent tile in that direction
    if (sideTile.length === 0) {return true}
    else {sideTile = sideTile[0]}

    // get asset of tile
    const tileAsset = assetInDirection(tile, directionNum)

    // get corresponding asset of side tile
    const sideDirectionNum = (directionNum + 2) % 4
    const sideTileAsset = assetInDirection(sideTile, sideDirectionNum)

    // return true if assets are the same:
    return tileAsset.asset === sideTileAsset.asset
}



const checkTilePlacement = (tile, matrix) => {
    for (i=0; i<=3; i++) {
        if (!checkSide(tile, i, matrix)) {
            return false
        }
    }
    return true
}

module.exports = { 
    assetInDirection, 
    adjacentTileCoords,
    checkSide,
    checkTilePlacement
}