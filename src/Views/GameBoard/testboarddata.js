export const tiledata = {
    grid_id: { x: 0, y: 0, z: 0},
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
        location: null
    },
    assets: {
        north: {},
        east: {},
        south: {
            asset: "road",
            connects: []
        },
        west: {}
    }
}