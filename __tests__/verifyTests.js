const { assetInDirection, 
    adjacentTileCoords, 
    checkSide,
    checkTilePlacement
} = require('../src/Views/GameBoard/verifyFunctions')





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
        expect(assetInDirection(tileD, 0)).toEqual({
            asset: 'city',
            connects: []
        })
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
            connects: [2]
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





describe("checkSide", () => {
    test("returns true for two tiles with 0 orientation and matching sides", () => {
        const tileD =     {
            grid_id: { row: 1, column: 0 },
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
        const tileJ = {
            grid_id: { row: 0, column: 0 },
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
        matrix = [[[tileJ]], [[]]]
        expect(checkSide(tileD, 0, matrix)).toBe(true)
    })
    test("returns false for two tiles with 0 orientation and non-matching sides", () => {
        const tileD =     {
            grid_id: { row: 0, column: 0 },
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
        const tileJ = {
            grid_id: { row: 0, column: 1 },
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
        matrix = [[[], [tileJ]]]
        expect(checkSide(tileD, 1, matrix)).toBe(false)
    })
    test("returns true for two tiles with non-0 orientation and matching sides", () => {
        const tileD =     {
            grid_id: { row: 0, column: 1 },
            orientation: 90,
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
            grid_id: { row: 0, column: 0 },
            orientation: 270,
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
        matrix = [[[tileJ], []]]
        expect(checkSide(tileD, 3, matrix)).toBe(true)
    })
    test("returns false for two tiles with non-0 orientation and non-matching sides", () => {
        const tileD =     {
            grid_id: { row: 0, column: 0 },
            orientation: 90,
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
            grid_id: { row: 1, column: 0 },
            orientation: 180,
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
        matrix = [[[]], [[tileJ]]]
        expect(checkSide(tileD, 2, matrix)).toBe(false)
    })
    test("returns true for tile at the 0 edge of the grid", () => {
        const tileD =     {
            grid_id: { row: 0, column: 0 },
            orientation: 90,
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
        matrix = [[[], []]]
        expect(checkSide(tileD, 0, matrix)).toBe(true)
    })
    test("returns true for tile at the 10 edge of the grid", () => {
        const tileD =     {
            grid_id: { row: 0, column: 10 },
            orientation: 90,
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
        matrix = [[[], [], [], [], [], [], [], [], [], [], []]]
        expect(checkSide(tileD, 1, matrix)).toBe(true)
    })
    test("returns true for empty adjacent tile", () => {
        const tileD =     {
            grid_id: { row: 1, column: 1 },
            orientation: 90,
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
        matrix = [[[], [], []], [[], [], []], [[], [], []]]
        expect(checkSide(tileD, 1, matrix)).toBe(true)
    })
})





describe("checkTilePlacement", () => {
    test("return true if placed correctly with one adjacent tile, 0 orientation", () => {
        const tileD = {
            grid_id: { row: 1, column: 1 },
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
        const tileJ = {
            grid_id: { row: 0, column: 1 },
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
        matrix = [[[], [tileJ], []], [[], [], []], [[], [], []]]
        expect(checkTilePlacement(tileD, matrix)).toBe(true)
    })
    test("return false if placed incorrectly with one adjacent tile, 0 orientation", () => {
        const tileD = {
            grid_id: { row: 1, column: 1 },
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
        const tileJ = {
            grid_id: { row: 0, column: 1 },
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
        matrix = [[[], [], []], [[tileJ], [], []], [[], [], []]]
        expect(checkTilePlacement(tileD, matrix)).toBe(false)
    })
    test("return true if placed correctly with one adjacent tile, non-0 orientation", () => {
        const tileD = {
            grid_id: { row: 1, column: 1 },
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
            grid_id: { row: 1, column: 2 },
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
        matrix = [[[], [], []], [[], [], [tileJ]], [[], [], []]]
        expect(checkTilePlacement(tileD, matrix)).toBe(true)
    })
    test("return false if placed incorrectly with one adjacent tile, non-0 orientation", () => {
        const tileD = {
            grid_id: { row: 1, column: 1 },
            orientation: 90,
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
            grid_id: { row: 2, column: 1 },
            orientation: 90,
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
        matrix = [[[], [], []], [[], [], []], [[], [tileJ], []]]
        expect(checkTilePlacement(tileD, matrix)).toBe(false)
    })
    test("return true if placed correctly with multiple adjacent tiles", () => {
        const tileD = {
            grid_id: { row: 1, column: 1 },
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
        const tileJ = {
            grid_id: { row: 0, column: 1 },
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
        const tileH = {
            grid_id: { row: 1, column: 2 },
            orientation: 0,
            corresponding_tiles: {
                north: null,
                east: null,
                south: null,
                west: null
            },
            tile_type: 'H',
            is_monestary: false,
            citizen: {
                is_citizen: false,
                asset: null,
                location: null,
                player: null
            },
            assets: {
                0: {},
                1: {
                    asset: 'city',
                    connects: []
                },
                2: {},
                3: {
                    asset: 'city',
                    connects: []
                }
            }
        }
        const tileA = {
            grid_id: { row: 1, column: 0 },
            orientation: 0,
            corresponding_tiles: {
                north: null,
                east: null,
                south: null,
                west: null
            },
            tile_type: 'A',
            is_monestary: true,
            citizen: {
                is_citizen: false,
                asset: null,
                location: null,
                player: null
            },
            assets: {
                0: {},
                1: {},
                2: {
                    asset: "road",
                    connects: []
                },
                3: {}
            }
        }
        const tileL = {
            grid_id: { row: 2, column: 1 },
            orientation: 0,
            corresponding_tiles: {
                north: null,
                east: null,
                south: null,
                west: null
            },
            tile_type: 'L',
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
                    connects: [2, 3]
                },
                1: {
                    asset: 'city',
                    connects: []
                },
                2: {
                    asset: 'road',
                    connects: [0, 3]
                },
                3: {
                    asset: 'road',
                    connects: [0, 2]
                }
            }
        }
        matrix = [[[], [tileJ], []], [[tileA], [], [tileH]], [[], [tileL], []]]
        expect(checkTilePlacement(tileD, matrix)).toBe(true)
    })
    test("return false if placed incorrectly with multiple adjacent tiles", () => {
        const tileD = {
            grid_id: { row: 1, column: 1 },
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
        const tileJ = {
            grid_id: { row: 0, column: 1 },
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
        const tileH = {
            grid_id: { row: 1, column: 2 },
            orientation: 270,
            corresponding_tiles: {
                north: null,
                east: null,
                south: null,
                west: null
            },
            tile_type: 'H',
            is_monestary: false,
            citizen: {
                is_citizen: false,
                asset: null,
                location: null,
                player: null
            },
            assets: {
                0: {},
                1: {
                    asset: 'city',
                    connects: []
                },
                2: {},
                3: {
                    asset: 'city',
                    connects: []
                }
            }
        }
        const tileA = {
            grid_id: { row: 1, column: 0 },
            orientation: 0,
            corresponding_tiles: {
                north: null,
                east: null,
                south: null,
                west: null
            },
            tile_type: 'A',
            is_monestary: true,
            citizen: {
                is_citizen: false,
                asset: null,
                location: null,
                player: null
            },
            assets: {
                0: {},
                1: {},
                2: {
                    asset: "road",
                    connects: []
                },
                3: {}
            }
        }
        const tileL = {
            grid_id: { row: 2, column: 1 },
            orientation: 0,
            corresponding_tiles: {
                north: null,
                east: null,
                south: null,
                west: null
            },
            tile_type: 'L',
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
                    connects: [2, 3]
                },
                1: {
                    asset: 'city',
                    connects: []
                },
                2: {
                    asset: 'road',
                    connects: [0, 3]
                },
                3: {
                    asset: 'road',
                    connects: [0, 2]
                }
            }
        }
        matrix = [[[], [tileJ], []], [[tileA], [], [tileH]], [[], [tileL], []]]
        expect(checkTilePlacement(tileD, matrix)).toBe(false)
    })
})