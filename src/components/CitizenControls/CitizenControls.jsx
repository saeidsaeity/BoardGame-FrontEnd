import { useEffect, useState } from 'react';
import styles from './CitizenControls.module.css';
import { useGameEngine } from '../../Context/useGameEngine';
import { checkTileCompletes } from '../../Views/GameBoard/verifyFunctions';
import { myPlayer } from 'playroomkit';

function CitizenControls({
  newTileData,
  citizenPosition, // maybe a context?
  setCitizenPosition,
  tileRotation,
  setNewTileData,
  setShowCitizen,
  setCitizenArray,
  setTileRotation,
}) {
  const [placementOptions, setPlacementOptions] = useState([]);
  const [isMonastery, setIsMonastery] = useState(false);
  const [citizenControlledPosition, setCitizenControlledPosition] = useState();
  const [currentAsset, setCurrentAsset] = useState([]);
  const [currentCompass, setCurrentCompass] = useState([]);

  // const adjustment = 0.25
  const adjustment = 0.3;

  useEffect(() => {
    if (newTileData !== undefined) {
      const tileObj = newTileData.assets;
      let tileArr = [];
      for (const n in tileObj) {
        tileArr.push(tileObj[n]);
      }
      setPlacementOptions(tileArr);
      if (newTileData.is_monestary === true) {
        setIsMonastery(true);
      }
    }
  }, [newTileData]);

  const { playerTurn, players, phaseEnd, boardGameMatrix, setBoardGameMatrix } =
    useGameEngine();

  const me = myPlayer();

  const confirmCitizenHandler = () => {
    if (currentAsset && currentCompass + 1) {
      setNewTileData((currTileData) => {
        console.log(currTileData, "currTileData");
        const changeTileData = { ...currTileData };
        changeTileData.citizen.is_citizen = true;
        changeTileData.citizen.asset = currentAsset;
        changeTileData.citizen.location = currentCompass;
        changeTileData.citizen.player = playerTurn;
        changeTileData.citizen.colour = me.state.profile.color;
        changeTileData.citizen.position = citizenControlledPosition;
        const newerBoard = JSON.parse(JSON.stringify(boardGameMatrix));
        newerBoard[newTileData.grid_id.row][newTileData.grid_id.column] = [
          changeTileData,
        ];
        setBoardGameMatrix(newerBoard);
        const scoreObj = checkTileCompletes(changeTileData, newerBoard);
        for (let i = 0; i < players.length; i++) {
          if (scoreObj[i]) {
            const playerScore = players[i].state.score;
            players[i].setState('score', playerScore + scoreObj[i], true);
          }
        }
        return changeTileData;
      });
      setTileRotation(0);
      setCitizenArray([]);
      setShowCitizen(false);
      phaseEnd();
    }
  };

  const selectCitizenLocationHandler = (asset, index, compass) => {
    setShowCitizen(true);
    setCurrentAsset(asset.asset);
    setCurrentCompass(index);
    let xCoord = newTileData.grid_id.row - 5;
    let yCoord = newTileData.grid_id.column - 5;

    const integerTileRotation = -1 * Math.floor(tileRotation / (Math.PI / 2));
    if (integerTileRotation === 0) {
      if (compass === 'N') yCoord -= adjustment;
      if (compass === 'E') xCoord += adjustment;
      if (compass === 'S') yCoord += adjustment;
      if (compass === 'W') xCoord -= adjustment;
    }
    if (integerTileRotation === 1) {
      if (compass === 'N') xCoord += adjustment;
      if (compass === 'E') yCoord += adjustment;
      if (compass === 'S') xCoord -= adjustment;
      if (compass === 'W') yCoord -= adjustment;
    }
    if (integerTileRotation === 2) {
      if (compass === 'N') xCoord += adjustment;
      if (compass === 'E') yCoord -= adjustment;
      if (compass === 'S') xCoord -= adjustment;
      if (compass === 'W') yCoord += adjustment;
    }
    if (integerTileRotation === 3) {
      if (compass === 'N') xCoord -= adjustment;
      if (compass === 'E') yCoord += adjustment;
      if (compass === 'S') xCoord += adjustment;
      if (compass === 'W') yCoord -= adjustment;
    }
    if (isMonastery === true) {
      xCoord -= adjustment;
      yCoord += adjustment;
    }
    setCitizenPosition([xCoord * 2, 4, yCoord * 2]);
    setCitizenControlledPosition([xCoord * 2, 4, yCoord * 2]);
  };

  return (
    <div className={styles.CitizenControls}>
      <h2>Select citizen location:</h2>
      {placementOptions.map((asset, index) => {
        let compass;
        if (index === 0) compass = 'N';
        if (index === 1) compass = 'E';
        if (index === 2) compass = 'S';
        if (index === 3) compass = 'W';
        if (asset.asset) {
          return (
            <button
              key={index}
              style={{ backgroundColor: me.state.profile.color }}
              className={styles.citizenOption}
              onClick={() => {
                selectCitizenLocationHandler(asset, index, compass)
              }}
            >
              <h3>{asset.asset}</h3>
              <h3>{compass}</h3>
            </button>
          );
        }
      })}
      {isMonastery === true ? (
        <button
          className={styles.citizenButton}
          onClick={() => {
            setShowCitizen(true);
            let xCoord = newTileData.grid_id.row - 5;
            let yCoord = newTileData.grid_id.column - 5;
            xCoord -= adjustment;
            yCoord -= adjustment;
            setCitizenPosition([xCoord * 2, 4, yCoord * 2]);
            setCitizenControlledPosition([xCoord * 2, 4, yCoord * 2]);
          }}
        >
          Monastery
        </button>
      ) : null}
      <button
        style={{ backgroundColor: 'darkgreen' }}
        className={styles.citizenButton}
        onClick={confirmCitizenHandler}
      >
        <h3>Confirm Citizen</h3>
      </button>
      <button
        style={{ backgroundColor: 'red' }}
        className={styles.citizenButton}
        onClick={() => setCitizenPosition([])}
      >
        <h3>End turn</h3>
      </button>
    </div>
  );
}

export default CitizenControls;
