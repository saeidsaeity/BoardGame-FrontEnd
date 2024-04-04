import { useEffect, useState } from "react";
import styles from "./CitizenControls.module.css";
import { useGameEngine } from "../../Context/useGameEngine";
import { checkTileCompletes } from "../../Views/GameBoard/verifyFunctions";

function CitizenControls({
  newTileData,
  setCitizenPosition,
  tileRotation,
  setNewTileData,
  setShowCitizen,
}) {
  const [placementOptions, setPlacementOptions] = useState([]);
  const [isMonastery, setIsMonastery] = useState(false);

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

  const {
    turn,
    turnPhase,
    playerTurn,
    timer,
    players,
    phaseEnd,
    boardGameMatrix,
    setBoardGameMatrix,
  } = useGameEngine();
  const [currentAsset, setCurrentAsset] = useState([]);
  const [currentCompass, setCurrentCompass] = useState([]);
  return (
    <div className={styles.CitizenControls}>
      <h2>Select citizen location:</h2>
      {placementOptions.map((asset, index) => {
        let compass;
        if (index === 0) compass = "N";
        if (index === 1) compass = "E";
        if (index === 2) compass = "S";
        if (index === 3) compass = "W";
        if (asset.asset) {
          return (
            <button
              key={index}
              className={styles.citizenOption}
              onClick={() => {
                setShowCitizen(true);
                // console.log(compass, "compass");
                // console.log(tileRotation, "tileRotation");
                setCurrentAsset(asset.asset);
                setCurrentCompass(index);
                let xCoord = newTileData.grid_id.row - 5;
                let yCoord = newTileData.grid_id.column - 5;
                const integerTileRotation =
                  -1 * Math.floor(tileRotation / (Math.PI / 2));
                console.log(integerTileRotation);
                if (integerTileRotation === 0) {
                  if (compass === "N") yCoord -= adjustment;
                  if (compass === "E") xCoord += adjustment;
                  if (compass === "S") yCoord += adjustment;
                  if (compass === "W") xCoord -= adjustment;
                }
                if (integerTileRotation === 1) {
                  if (compass === "N") xCoord += adjustment;
                  if (compass === "E") yCoord += adjustment;
                  if (compass === "S") xCoord -= adjustment;
                  if (compass === "W") yCoord -= adjustment;
                }
                if (integerTileRotation === 2) {
                  // console.log("i am in here 3");
                  // console.log(compass);
                  if (compass === "N") xCoord += adjustment;
                  if (compass === "E") yCoord -= adjustment;
                  if (compass === "S") xCoord -= adjustment;
                  if (compass === "W") yCoord += adjustment;
                }
                if (integerTileRotation === 3) {
                  if (compass === "N") xCoord -= adjustment;
                  if (compass === "E") yCoord += adjustment;
                  if (compass === "S") xCoord += adjustment;
                  if (compass === "W") yCoord -= adjustment;
                }
                if (isMonastery === true) {
                  xCoord -= adjustment;
                  yCoord += adjustment;
                }
                setCitizenPosition([xCoord * 2, 4, yCoord * 2]);
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
          }}
        >
          Monastery
        </button>
      ) : null}
      <button
        className={styles.citizenButton}
        onClick={() => {
          // console.log(newTileData);
          // console.log(currentAsset)
          // console.log(currentCompass)
          if (currentAsset && currentCompass + 1) {
            setNewTileData((currTileData) => {
              const changeTileData = { ...currTileData };
              changeTileData.citizen.is_citizen = true;
              changeTileData.citizen.asset = currentAsset;
              changeTileData.citizen.location = currentCompass;
              changeTileData.citizen.player = playerTurn;
              const newerBoard = JSON.parse(JSON.stringify(boardGameMatrix));
              newerBoard[newTileData.grid_id.row][newTileData.grid_id.column] =
                [changeTileData];
              setBoardGameMatrix(newerBoard);
              const scoreObj = checkTileCompletes(changeTileData, newerBoard)
              // {}
              // {0: 4}
              // {0: 3, 1: 3}
              for (let i = 0; i < players.length; i++) {
                console.log(i)
                if (scoreObj[i]) {
                  console.log(players[i])
                  const playerScore = players[i].state.score
                  console.log(playerScore)
                  console.log(playerScore + scoreObj[i])
                  players[i].setState('score', playerScore + scoreObj[i], true)
                }
              }
              return changeTileData;
            });

            setShowCitizen(false);
            phaseEnd();
          }
        }}
      >
        Confirm Citizen
      </button>
      <button
        className={styles.citizenButton}
        onClick={() => setCitizenPosition([])}
      >
        Don't place
      </button>
    </div>
  );
}

export default CitizenControls;
