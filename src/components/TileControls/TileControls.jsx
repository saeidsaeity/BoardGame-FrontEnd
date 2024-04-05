import styles from './TileControls.module.css'

function TileControls({
    setTileRotation,
    newTileData,
    tileRotation,
    setReleaseTile,
    showTile,
    setShowTile,
    setNewTileData,
    drawEventHandler,
    setNewTileType,
    setReplaceTile,
    randomTileGenerator,
    gameTileCount,
    checkTilePlacement,
    setNewTileMesh,
    newTile2DPosition,
    boardGameMatrix,
    setBoardGameMatrix,
    phaseEnd,
    me
}) {
  return (
    <>
        <button 
            onClick={() => {
                setTileRotation((currRotation) => {
                    if(currRotation <= -2*Math.PI){
                        return currRotation + 1.5 * Math.PI
                    }
                    return currRotation - Math.PI / 2;
                });

                newTileData.orientation = (tileRotation-Math.PI / 2)*-1*(180 / Math.PI)%360;
                setNewTileMesh((currTile) => {
                    if (currTile === undefined) {
                        return currTile;
                    }
                    const updatedTile = {
                        ...currTile,
                        props: {
                        ...currTile.props,
                        rotation: [0, tileRotation - Math.PI / 2, 0],
                        },
                    };
                    return updatedTile;
                });
            }}
            style={{ backgroundColor: me.state.profile.color }}
            className={styles.button}
        >
            Rotate
        </button>
        <button 
            onClick={async () => {
                setReleaseTile(false)
                setShowTile(false)
                const randomTile = await randomTileGenerator(gameTileCount);
                setNewTileData(randomTile);
                drawEventHandler(randomTile.tile_type)
                setNewTileType(randomTile.tile_type)
                setShowTile(true)
                setReplaceTile(true)
            }}
            style={{ backgroundColor: me.state.profile.color }}
            className={styles.button}
        >
            {showTile ? 'Take a new tile' : 'Get Tile'}
        </button>
        <button
            style={{ backgroundColor: me.state.profile.color }}
            className={styles.button}
            onClick={() => {
                if (checkTilePlacement(newTileData, boardGameMatrix)) {
                    setReplaceTile(false)
                    const newerBoard = JSON.parse(JSON.stringify(boardGameMatrix))
                    newerBoard[newTile2DPosition[0]][newTile2DPosition[1]] = [newTileData];
                    setBoardGameMatrix(newerBoard)
                    
                    phaseEnd()
                } else {
                    console.log("tile not been placed");
                }
            }}
        >
            Confirm
        </button>
    </>
  )
}

export default TileControls