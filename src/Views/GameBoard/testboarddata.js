export const tileData = {
   
    grid_id: { row: 5, column: 5},
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
            connects: [1]
        },
        3: {}
    }
}