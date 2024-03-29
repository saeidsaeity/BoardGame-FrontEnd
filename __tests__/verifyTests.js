const { assetInDirection, adjacentTileCoords } = require('../src/Views/GameBoard/verifyFunctions')

describe("assetInDirection", () => {
    test("returns correct for tile with 0 orientation north", () => {
        const tileD =     {
            grid_id: { row: null, column: null },
            orientation: 0,
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
        expect(assetInDirection(tileD, 0)).toEqual({
            asset: 'road',
            connects: [2]
        })
    })
    test("returns correct for tile with 0 orientation west", () => {
        const tileD =     {
            grid_id: { row: null, column: null },
            orientation: 0,
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
        expect(assetInDirection(tileD, 3)).toEqual({})
    })
    test("returns correct for object with 270 orientation north (so west on tile)", () => {
        const tileD =     {
            grid_id: { row: null, column: null },
            orientation: 270,
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
        expect(assetInDirection(tileD, 0)).toEqual({})
    })
    test("returns correct for object with 270 orientation west (so south on tile)", () => {
        const tileD =     {
            grid_id: { row: null, column: null },
            orientation: 270,
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
        expect(assetInDirection(tileD, 3)).toEqual({
            asset: 'road',
            connects: [0]
        })
    })
})

describe("adjacentTileCoords", () => {
    const tileD =     {
        grid_id: { row: 5, column: 6 },
        orientation: 270,
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
    test("returns correct for all different directions", () => {
        expect(adjacentTileCoords(tileD, 0)).toEqual({ row: 4, column: 6 })
        expect(adjacentTileCoords(tileD, 1)).toEqual({ row: 5, column: 7 })
        expect(adjacentTileCoords(tileD, 2)).toEqual({ row: 6, column: 6 })
        expect(adjacentTileCoords(tileD, 3)).toEqual({ row: 5, column: 5 })
    })
})