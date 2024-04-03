import { useEffect, useState } from 'react';
import styles from  './CitizenControls.module.css'
import { useGameEngine } from '../../Context/useGameEngine';

function CitizenControls({newTileData, setCitizenPosition, tileRotation}) {
    const [ placementOptions, setPlacementOptions ] = useState([])
    const [ isMonastery, setIsMonastery ] = useState(false)

    const adjustment = 0.25

    useEffect(() => {
        if(newTileData !== undefined) {
            const tileObj = newTileData.assets
            let tileArr = []
            for(const n in tileObj){
                tileArr.push(tileObj[n])
            }
            setPlacementOptions(tileArr)
            if(newTileData.is_monastery === true) {
                setIsMonastery(true)
            }
        }
    }, [newTileData])

    const {
        turn,
        turnPhase,
        playerTurn,
        timer,
        players,
        phaseEnd
    } = useGameEngine()

  return (
    <div className={styles.CitizenControls}>
        <h2>Select citizen location:</h2>
        {placementOptions.map((asset, index) => {
            let compass;
            if(index === 0) compass = 'N' 
            if(index === 1) compass = 'E' 
            if(index === 2) compass = 'S' 
            if(index === 3) compass = 'W' 
            if(asset.asset){
            return  <button 
                        key={index} 
                        className={styles.citizenOption} 
                        onClick={() => {
                            console.log(compass, "compass");
                            console.log(tileRotation, "tileRotation");
                            let xCoord = newTileData.grid_id.row - 5
                            let yCoord = newTileData.grid_id.column - 5
                            if(tileRotation === 0){
                                if(compass === 'N') yCoord += adjustment
                                if(compass === 'E') xCoord += adjustment
                                if(compass === 'S') yCoord -= adjustment
                                if(compass === 'W') xCoord -= adjustment
                            }
                            if(tileRotation === 1){
                                if(compass === 'N') xCoord += adjustment
                                if(compass === 'E') yCoord -= adjustment
                                if(compass === 'S') xCoord -= adjustment
                                if(compass === 'W') yCoord += adjustment
                            }
                            if(tileRotation === 2){
                                if(compass === 'N') yCoord -= adjustment
                                if(compass === 'E') xCoord -= adjustment
                                if(compass === 'S') yCoord += adjustment
                                if(compass === 'W') xCoord += adjustment
                            }
                            if(tileRotation === 3){
                                if(compass === 'N') xCoord -= adjustment
                                if(compass === 'E') yCoord += adjustment
                                if(compass === 'S') xCoord += adjustment
                                if(compass === 'W') yCoord -= adjustment
                            }
                            if(isMonastery === true) {
                                xCoord -= adjustment
                                yCoord += adjustment
                            }
                            setCitizenPosition([xCoord * 2, 7, yCoord * 2])
                        }}>
                        <h3 >{asset.asset}</h3>
                        <h3 >{compass}</h3>
                    </button>
            }
        })}
        {isMonastery === true ? <h3>Monastery</h3> : null}
        <button className={styles.citizenButton} onClick={() => phaseEnd()}>Confirm Citizen</button>
        <button className={styles.citizenButton} onClick={() => setCitizenPosition([])}>Don't place</button>
    </div>
  )
}

export default CitizenControls