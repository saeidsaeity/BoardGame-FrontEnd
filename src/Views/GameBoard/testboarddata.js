export const tileData = {
   
    grid_id: { x: 0, y: 0, z: 0},
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
        location: null
    },
    assets: {
        north: {
            asset: 'road',
            connects: ['south']
        },
        east: {
            asset: 'city',
            connects: []
        },
        south: {
            asset: 'road',
            connects: ['north']
        },
        west: {}
    }
}