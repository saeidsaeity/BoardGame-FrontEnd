

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



const connectingTiles = (tile, asset) => {
    const dirArr =  asset.connects.map((direction) => {
        return (direction+(tile.orientation/90))%4
    })
    return dirArr.map((direction) => {
        return { coords: adjacentTileCoords(tile, direction), dir: (direction + 2)%4}
    })
}



const checkTileCompletes = (origTile, matrix) => {
    // for loop iterates through each direction of tile
    const directions = [0, 1, 2, 3]
    directions.forEach((directionNum) => {

        // get tile asset for that direction
        const directionAsset = assetInDirection(origTile, directionNum)
        
        // only proceed if asset is road or city
        if (directionAsset.asset !== undefined) {
            console.log(directionAsset.asset)
            
            // remove directions in directions array that connect to
            // the asset, as we do not want to check the same asset twice
            directionAsset.connects.forEach((direction) => {
                const arrIndex = directions.indexOf((direction+(origTile.orientation/90))%4)
                if (arrIndex !== -1) {
                    directions.splice(arrIndex, 1)
                }
            })
            
            // create array of directions that asset goes to
            const directionsToCheck = [directionNum, ...directionAsset.connects.map((direction) => {
                return (direction+(origTile.orientation/90))%4
            })]
            
            // use directionsToCheck to create tilesToCheck array, containing objects with 
            // an object containing row/column coords and direction the asset is coming from
            // e.g. [ { coords: { row: 2, column: 1 }, dir: 0 }, { coords: { row: 1, column: 0 }, dir: 1 } ]
            const tilesToCheck = directionsToCheck.map((direction) => {
                return { coords: adjacentTileCoords(origTile, direction), dir: (direction + 2)%4}
            })

            console.log('tilesToCheck: ', tilesToCheck)

            // for loop iterates through the tilesToCheck and runs a function that checks
            // whether the asset ends there, or if it continues, it adds the new tiles to
            // tilesToCheck array
            for (let i = 0; i < tilesToCheck.length; i++) {

                // get next tileInfo in tilesToCheck
                const tileInfo = tilesToCheck[i]
                console.log('tileInfo: ', tileInfo)

                // if tile does not exist, asset has not yet ended, so end the function
                const tile = matrix[tileInfo.coords.row][tileInfo.coords.column][0]
                if (tile === undefined) {console.log('returned'); return}

                // fetch asset in corresponding direction
                const tileAsset = assetInDirection(tile, tileInfo.dir)
                console.log('tileAsset: ', tileAsset)

                // add connecting tile info to tilesToCheck
                const newTileInfo = connectingTiles(tile, tileAsset)
                for (const info of newTileInfo) {

                    // checks if tile is already in tilesToCheck
                    // create new function that iterates through array to checl for coords

                    // adds tileInfo to tilesToCheck
                    tilesToCheck.push(info)
                }
            }

            // runs if asset is complete
            console.log('asset is complete!')
        }
    })
}


const tileD = {
    grid_id: { row: 1, column: 2 },
    orientation: 180,
    corresponding_tiles: {
        north: null,
        east: null,
        south: null,
        west: null
    },
    tile_type: 'D',
    is_monestary: false,
    citizen: {
        is_citizen: false,
        asset: null,
        location: null,
        player: null
    },
    assets: {
        0: {
            asset: 'road',
            connects: [2]
        },
        1: {
            asset: 'city',
            connects: []
        },
        2: {
            asset: 'road',
            connects: [0]
        },
        3: {}
    }
}

const tileJ = {
    grid_id: { row: 1, column: 1 },
    orientation: 0,
    corresponding_tiles: {
        north: null,
        east: null,
        south: null,
        west: null
    },
    tile_type: 'J',
    is_monestary: false,
    citizen: {
        is_citizen: false,
        asset: null,
        location: null,
        player: null
    },
    assets: {
        0: {
            asset: 'city',
            connects: []
        },
        1: {
            asset: 'road',
            connects: [2]
        },
        2: {
            asset: 'road',
            connects: [1]
        },
        3: {}
    }
}

const tileK = {
    grid_id: { row: 1, column: 2 },
    orientation: 270,
    corresponding_tiles: {
        north: null,
        east: null,
        south: null,
        west: null
    },
    tile_type: 'K',
    is_monestary: false,
    citizen: {
        is_citizen: false,
        asset: null,
        location: null,
        player: null
    },
    assets: {
        0: {
            asset: 'road',
            connects: [3]
        },
        1: {
            asset: 'city',
            connects: []
        },
        2: {},
        3: {
            asset: 'road',
            connects: [0]
        }
    }
}


checkTileCompletes(tileJ, [[[], [], []], [[], [], [tileK]], [[], [], []]])


/*
module.exports = { 
    assetInDirection, 
    adjacentTileCoords,
    checkSide,
    checkTilePlacement,
    checkTileCompletes
}
*/