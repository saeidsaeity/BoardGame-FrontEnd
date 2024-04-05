

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

export const assetInDirection = (tile, directionNum) => {
    // convert the orientation into a number from 0-3
    const turn = tile.orientation/90
    // orientation minused to get asset direction
   
    let assetDir = (directionNum - turn)
    if (assetDir < 0) {assetDir += 4}

    // return asset in that direction
    return tile.assets[assetDir]
}





export const adjacentTileCoords = (tile, directionNum) => {
    // switch case returns coordinates of the tile in that
    // direction relative to the input tile
    switch(directionNum) {
        case 0:
            return {
                row: tile.grid_id.row, 
                column: tile.grid_id.column -1,
            }
            break;
        case 1:
            return {
                row: tile.grid_id.row + 1, 
                column: tile.grid_id.column,
            }
            break;
        case 2:
            return {
                row: tile.grid_id.row, 
                column: tile.grid_id.column + 1,
            }
            break;
        case 3:
            return {
                row: tile.grid_id.row - 1, 
                column: tile.grid_id.column,
            }
            break;
    }
}



export const checkSide = (tile, directionNum, matrix) => {
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



export const checkTilePlacement = (tile, matrix) => {
    for (let i=0; i<=3; i++) {
        if (!checkSide(tile, i, matrix)) {
            return false
        }
    }
    return true
}

export const connectingTiles = (tile, asset) => {
    const dirArr =  asset.connects.map((direction) => {
        return (direction+(tile.orientation/90))%4
    })
    return dirArr.map((direction) => {
        return { coords: adjacentTileCoords(tile, direction), dir: (direction + 2)%4}
    })
}


// returns true if tile coords are in array
export const checkIfInArray = (tileInfo, array) => {
    // assume tile is not in array
    let isInArray = false

    // iterate through each element in the array
    array.forEach((arrTileInfo) => {
        // check if tile coords in array, if so, set isInArray to true
        if (arrTileInfo.coords.row === tileInfo.coords.row &&
            arrTileInfo.coords.column === tileInfo.coords.column) {
            isInArray = true
        }
    })
    

    return isInArray
}


// this function checks whether the original
export const checkOrigTile = (tileInfo, origTile, tilesToCheck, directions, citizenObj) => {
    if (tilesToCheck[0].coords.row === tileInfo.coords.row &&
        tilesToCheck[0].coords.column === tileInfo.coords.column &&
        origTile.disconnected === true) {
        const arrIndex = directions.indexOf((tileInfo.dir-(origTile.orientation/90))%4)
        directions.splice(arrIndex, 1)

        // the following check is necessary, as a citizen may be placed on the original disconnected tile
        // on a completed asset, but since we only check the first end of this asset we come across on the
        // original tile, the citizen will otherwise be ignored
        if (origTile.citizen.is_citizen) {

            // check of citizen is on asset
            let alteredDir = (origTile.citizen.location-(origTile.orientation/90))%4
            if (alteredDir<0) {alteredDir += 4}
            if (alteredDir === origTile.citizen.location) {
                addToCitizen(citizenObj, origTile.citizen.player)
            }
        }
    }
}



export const addToCitizen = (citObj, player) => {
    if (player in citObj) {
        citObj[player] += 1
    } else {
        citObj[player] = 1
    }
}



export const checkTileCompletes = (origTile, matrix) => {
    // for loop iterates through each direction of tile
    const directions = [0, 1, 2, 3]
    const pointsObj = {}
    directions.forEach((directionNum) => {

        // get tile asset for that direction
        const directionAsset = assetInDirection(origTile, directionNum)
        
        // only proceed if asset is road or city
        if (directionAsset.asset !== undefined) {

            // create citizen array to store placed citizens
            const citizenObj = {}

            // check if citizen is on placed tile
            if (origTile.citizen.is_citizen) {

                // dirNum is direction Number without orientation
                let dirNum = directionNum-(origTile.orientation/90)
                if (dirNum < 0) {dirNum += 4}

                // check of citizen is on asset
                if ([dirNum, ...directionAsset.connects].includes(origTile.citizen.location)) {
                    addToCitizen(citizenObj, origTile.citizen.player)
                }
            }
            
            // remove directions in directions array th            // check if citizen is on placed tileat connect to
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
            const tilesToCheck = [{coords: origTile.grid_id, dir: directionNum}
                , ...directionsToCheck.map((direction) => {
                return { coords: adjacentTileCoords(origTile, direction), dir: (direction + 2)%4}
            })]

            // for loop iterates through the tilesToCheck and runs a function that checks
            // whether the asset ends there, or if it continues, it adds the new tiles to
            // tilesToCheck array
            for (let i = 1; i < tilesToCheck.length; i++) {

                // get next tileInfo in tilesToCheck
                const tileInfo = tilesToCheck[i]
                console.log('tileInfo: ', tileInfo)

                // if tile does not exist, asset has not yet ended, so end the function
                const tile = matrix[tileInfo.coords.row][tileInfo.coords.column][0]
                if (tile === undefined) {return}

                // fetch asset in corresponding direction
                const tileAsset = assetInDirection(tile, tileInfo.dir)

                // check if tile has a citizen on it
                if (tile.citizen.is_citizen) {
                    
                    // get original direction without orientation
                    let dir = tileInfo.dir-(tile.orientation/90)
                    if (dir < 0) {dir += 4}

                    // check if citizen is on asset
                    if ([dir, ...tileAsset.connects]
                        .includes(tile.citizen.location)) {
                        addToCitizen(citizenObj, tile.citizen.player)
                    }
                }


                // add connecting tile info to tilesToCheck
                const newTileInfo = connectingTiles(tile, tileAsset)
                for (const info of newTileInfo) {
                    // if tile is not already in array, add to array
                    if (!checkIfInArray(info, tilesToCheck)) {
                        tilesToCheck.push(info)

                        // removes connecing asset from direction if tile is disconnected
                    } else {
                        checkOrigTile(info, origTile, tilesToCheck, directions, citizenObj)
                    }
                }
            }

            // calculates points
            let points = tilesToCheck.length
            if (directionAsset.asset === 'city') {
                points *= 2
            }
            
            // find the player(s) with the most citizens
            let maxcits = -1
            let maxPlayers = []
            for (let player in citizenObj) {
                if (citizenObj[player] > maxcits) {
                    maxcits = citizenObj[player]
                    maxPlayers = [player]
                } else if (citizenObj[player] === maxcits) {
                    maxPlayers.push(player)
                }
            }

            // adds points to pointsObj
            maxPlayers.forEach((player) => {
                if (!(player in pointsObj)) {
                    pointsObj[player] = points
                } else {
                    pointsObj[player] += points
                }
            })
        }
    })
    return pointsObj
}

/*
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
    disconnected: false,
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
    disconnected: false,
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
    disconnected: false,
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

const tileI = {
    grid_id: { row: 1, column: 1 },
    orientation: 90,
    corresponding_tiles: {
        north: null,
        east: null,
        south: null,
        west: null
    },
    tile_type: 'I',
    is_monestary: false,
    disconnected: true,
    citizen: {
        is_citizen: true,
        asset: 'city',
        location: 1,
        player: 1
    },
    assets: {
        0: {},
        1: {
            asset: 'city',
            connects: []
        },
        2: {
            asset: 'city',
            connects: []
        },
        3: {}
    }
}

const tileM = {
    grid_id: { row: 1, column: 0 },
    orientation: 180,
    corresponding_tiles: {
        north: null,
        east: null,
        south: null,
        west: null
    },
    tile_type: 'M',
    is_monestary: false,
    disconnected: false,
    citizen: {
        is_citizen: true,
        asset: 'city',
        location: 1,
        player: 0
    },
    assets: {
        0: {
            asset: 'city',
            connects: [3]
        },
        1: {},
        2: {},
        3: {
            asset: 'city',
            connects: [0]
        }
    }
}

const tileN = {
    grid_id: { row: 2, column: 1 },
    orientation: 0,
    corresponding_tiles: {
        north: null,
        east: null,
        south: null,
        west: null
    },
    tile_type: 'N',
    is_monestary: false,
    disconnected: false,
    citizen: {
        is_citizen: true,
        asset: 'city',
        location: 0,
        player: 0
    },
    assets: {
        0: {
            asset: 'city',
            connects: [3]
        },
        1: {},
        2: {},
        3: {
            asset: 'city',
            connects: [0]
        }
    }
}

const tileO = {
    grid_id: { row: 2, column: 0 },
    orientation: 90,
    corresponding_tiles: {
        north: null,
        east: null,
        south: null,
        west: null
    },
    tile_type: 'O',
    is_monestary: false,
    disconnected: false,
    citizen: {
        is_citizen: true,
        asset: 'city',
        location: 1,
        player: 1
    },
    assets: {
        0: {
            asset: 'city',
            connects: [3]
        },
        1: {
            asset: 'road',
            connects: [2]
        },
        2: {
            asset: 'road',
            connects: [1]
        },
        3: {
            asset: 'city',
            connects: [0]
        }
    }
}


checkTileCompletes(tileI, [[[], [], []], [[tileM], [], []], [[tileO], [tileN], []]])
*/

