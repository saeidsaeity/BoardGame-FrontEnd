import { Suspense, useEffect, useState, useContext } from 'react';
import { OrbitControls, Sky, Stars } from '@react-three/drei';

import { Canvas } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import { useGameEngine } from '../../Context/useGameEngine.jsx';
import { myPlayer } from 'playroomkit';
// Components
import { UI } from '../../components/Ui/UI.jsx';
import { GameBoardCells } from '../../components/GameBoardCells/GameBoardCells.jsx';
// 3D components
import { Citizen } from '../../assets/citizens/Citizen.jsx';
import TileD from '../../assets/tiles/tileD.jsx';
// styling
import styles from './GameBoard.module.css';

import { BoardGameContext } from '../../Context/BoardGameContext.jsx';
import SpinnerLoader from '../../components/SpinnerLoader/SpinnerLoader.jsx';
import { useMemo } from 'react';

const GameBoard = () => {
  // TILE

  const tileScale = [0.92, 0.92, 0.92];
  const tileSize = 2;
  const {
    enableRotate,
    sunPosition,
    setNewTileData,
    setNewTile2DPosition,
    releaseTile,
    setReleaseTile,
    tileRotation,
    renderTileArr,
    setRenderTileArr,
    citizenPosition,
    isCitizenPhase,
    replaceTile,
    showCitizen,
    citizenArray,
    setCitizenArray,
    setReleaseCitizen,
    newTileMesh,
    setNewTileMesh,
    renderEnemyTile,
    setRenderEnemyTile,
  } = useContext(BoardGameContext);
  // STATES //
  // CAMERA & ENVIRONMENT
  const {
    turnPhase,
    boardGameMatrix,
    newTilePosition,
    setNewTilePosition,
    setOtherPlayerTile,
    otherPlayerTile,
    players,
    playerTurn,
    gameTileCount,
  } = useGameEngine();

  const drawEventHandler = async (tileType) => {
    const TileComponent = await import(
      `../../assets/tiles/tile${tileType}.jsx`
    );
    const renderNewTile = (
      <RigidBody
        key={tileType + ',' + newTilePosition}
        canSleep={true}
        position={newTilePosition}
        rotation={[0, tileRotation, 0]}
        restitution={0}
        enabledTranslations={[false, true, false]}
        enabledRotations={[false, false, false]}
      >
        <TileComponent.default scale={tileScale} />
      </RigidBody>
    );
    // console.log(renderNewTile, "DRAW NEWT TILE");
    setNewTileMesh(renderNewTile);
  };

  const getRenderTileMesh = async (tileType, position, rotation) => {
    if (tileType !== undefined) {
      const TileComponent = await import(
        `../../assets/tiles/tile${tileType}.jsx`
      );
      const renderNewTile = (
        <RigidBody
          canSleep={false}
          position={position}
          rotation={[0, -rotation, 0]}
          scale={tileScale}
          restitution={0}
          enabledTranslations={[false, true, false]}
          enabledRotations={[false, false, false]}
          key={tileType + ',' + position}
        >
          <TileComponent.default />
        </RigidBody>
      );
      // console.log(renderNewTile,'i am here');
      // console.log(renderNewTile, "RENDER NEW TILE");
      return renderNewTile;
    }
  };

  const renderCitizen = async (position, colour) => {
    const citizenComp = (
      <RigidBody
        key={position}
        gravityScale={0.5}
        position={position}
        scale={0.095}
        friction={100}
        mass={1000}
        rotation={[0, 0, 0]}
        canSleep={true}
        lockRotations={true}
        restitution={0}
      >
        <Citizen color={colour} />
      </RigidBody>
    );
    return citizenComp;
  };

  const me = myPlayer();

  useMemo(() => {
    // console.log(gameTileCount, 'NEW TILE COUNT');
    // setting rendered tile array
    setReleaseCitizen(false);
    //setCitizenArray([]);
    //setRenderTileArr([]);
    boardGameMatrix.forEach((row) => {
      row.forEach((col) => {
        // A tile exists in Matrix cell

        if (col.length > 0) {
          // only render non-starting tile
          if (col[0]._id) {
            const position = [
              (col[0].grid_id.row - 5) * 2,
              0,
              (col[0].grid_id.column - 5) * 2,
            ];
            //renderTileArr.forEach((tile)=>{console.log(col[0].tile_type+','+ position);console.log(tile.key===col[0].tile_type+','+ position);})

            if (col[0].citizen.is_citizen) {
              renderCitizen(
                col[0].citizen.position,
                col[0].citizen.colour
              ).then((newcitizen) => {
                setCitizenArray((currArray) => {
                  if (
                    citizenArray.some((citizen) => {
                      return (
                        citizen.key ===
                        col[0].citizen.position[0] +
                          ',' +
                          col[0].citizen.position[1] +
                          ',' +
                          col[0].citizen.position[2]
                      );
                    })
                  ) {
                    return currArray;
                  }
                  return [...currArray, newcitizen];
                });
                setReleaseCitizen(true);
              });
            }

            getRenderTileMesh(
              col[0].tile_type,
              position,
              (col[0].orientation * Math.PI) / 180
            )
              .then((tileMesh) => {
                setRenderTileArr((currArray) => {
                  if (
                    currArray.some((tile) => {
                      return tile.key === col[0].tile_type + ',' + position;
                    })
                  ) {
                    return currArray;
                  }
                  return [...currArray, tileMesh];
                });
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      });
    });
  }, [boardGameMatrix]);
  if (newTileMesh) {
    const TileTypeEnemy = newTileMesh.key.split('');

    setOtherPlayerTile([
      TileTypeEnemy[0],
      newTileMesh.props.position,
      -newTileMesh.props.rotation[1],
    ]);
  }

  if (otherPlayerTile) {
    getRenderTileMesh(
      otherPlayerTile[0],
      otherPlayerTile[1],
      otherPlayerTile[2]
    ).then((outputtile) => {
      setRenderEnemyTile(outputtile);
    });
  }
  const player = players[playerTurn];
  // console.log(otherPlayerTile);
  // console.log(newTileMesh);
  // console.log(me);
  // RENDERING STARTS HERE //
  // console.log(me.id !== player.id );
  // console.log(renderEnemyTile);

  return (
    <>
      <UI drawEventHandler={drawEventHandler} />

      <div className={styles.gameBoard}>
        <Suspense fallback={<SpinnerLoader />}>
          <Canvas shadows camera={{ fov: 70, position: [0, 8, 14] }}>
            <Physics>
              <ambientLight intensity={1.2} />
              <Sky
                sunPosition={sunPosition}
                distance={50000}
                inclination={10}
                azimuth={0.5}
                turbidity={0.5}
                rayleigh={10}
                mieDirectionalG={0.01}
                mieCoefficient={0.005}
              />

              <Stars factor={2.5} />

              <directionalLight
                castShadow
                intensity={1.5}
                position={[50, 50, 150]}
                shadow-normalBias={0.03}
              />

              <directionalLight
                castShadow
                intensity={5}
                position={sunPosition}
                shadow-normalBias={0.03}
              />

              <OrbitControls
                minDistance={2}
                maxDistance={30}
                enableRotate={enableRotate}
                maxPolarAngle={Math.PI / 2 - 0.1}
                // dampingFactor={0.8}
                rotateSpeed={0.6}
                target={[0, 2.25, 0]}
              />

              <RigidBody
                position={[0, 4, 0]}
                scale={tileScale}
                restitution={0}
                enabledTranslations={[false, true, false]}
                enabledRotations={[false, false, false]}
              >
                <TileD />
              </RigidBody>

              <GameBoardCells
                boardGameMatrix={boardGameMatrix}
                tileSize={tileSize}
                tileScale={tileScale}
                setReleaseTile={setReleaseTile}
                setNewTilePosition={setNewTilePosition}
                setNewTile2DPosition={setNewTile2DPosition}
                setNewTileMesh={setNewTileMesh}
                setNewTileData={setNewTileData}
                turnPhase={turnPhase}
                isCitizenPhase={isCitizenPhase}
                newTilePosition={newTilePosition}
              />

              {releaseTile && replaceTile ? newTileMesh : null}

              {me.id !== player.id && otherPlayerTile ? renderEnemyTile : null}
              {turnPhase === 'Place Citizen' &&
              citizenPosition.length > 0 &&
              showCitizen &&
              me ? (
                <RigidBody
                  gravityScale={0.5}
                  position={citizenPosition}
                  scale={0.095}
                  friction={100}
                  mass={1000}
                  rotation={[0, 0, 0]}
                  canSleep={true}
                  lockRotations={true}
                  restitution={0}
                >
                  <Citizen color={me.state.profile.color} />
                </RigidBody>
              ) : null}
              {/* {otherPlayerTile ?  renderEnemyTile :null} */}
              {renderTileArr}
              {citizenArray}
              <RigidBody type="fixed">
                <mesh receiveShadow position-y={-0.3}>
                  <boxGeometry args={[22, 0.5, 22]} />
                  <meshStandardMaterial color="#8f4111" />
                </mesh>
              </RigidBody>
            </Physics>
            {newTilePosition && turnPhase === 'Place Tile' ? (
              <mesh position={newTilePosition}>
                <boxGeometry args={[2, 10, 2]} />
                <meshBasicMaterial color="yellow" transparent opacity={0.3} />
              </mesh>
            ) : null}

            {/* HELPERS */}
            {/* <Perf position="top-left" /> */}
            {/* <axesHelper args={[5]} />
          <gridHelper args={[50, 25, "black", "red"]} /> */}
          </Canvas>
        </Suspense>
      </div>
    </>
  );
};

export default GameBoard;
