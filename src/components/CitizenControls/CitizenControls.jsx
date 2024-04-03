import { useEffect, useState } from "react";
import styles from "./CitizenControls.module.css";
import { useGameEngine } from "../../Context/useGameEngine";

function CitizenControls({ newTileData, setCitizenPosition, tileRotation,setNewTileData }) {
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
      console.log(newTileData.is_monestary);
      console.log(newTileData);
      if (newTileData.is_monestary === true) {
        setIsMonastery(true);
      }
    }
  }, [newTileData]);

  const { turn, turnPhase, playerTurn, timer, players, phaseEnd } =
    useGameEngine();
  const[currentAsset,setCurrentAsset]=useState([])
  const[currentCompass,setCurrentCompass]=useState([])
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

                console.log(compass, "compass");
                console.log(tileRotation, "tileRotation");
                setCurrentAsset(asset.asset)
                setCurrentCompass(index)
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
                  console.log("i am in here 3");
                  console.log(compass);
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
      {isMonastery === true ?
       <button className={styles.citizenButton} onClick={()=> {  
        let xCoord = newTileData.grid_id.row - 5;
        let yCoord = newTileData.grid_id.column - 5;
        xCoord -= adjustment;
        yCoord -= adjustment;
        setCitizenPosition([xCoord * 2, 4, yCoord * 2]);
        }}>Monastery</button> : null}
      <button className={styles.citizenButton} onClick={() => {
        console.log(newTileData);
        if(currentAsset && currentCompass){
        setNewTileData((currTileData)=>{
            const changeTileData = {...currTileData}
            changeTileData.citizen.is_citizen=true
            changeTileData.citizen.asset=currentAsset
            changeTileData.citizen.location=currentCompass
            return changeTileData
            

        })
        phaseEnd()
    }
       
    
      }}>
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
