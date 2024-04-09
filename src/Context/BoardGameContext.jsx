import { createContext, useState } from "react";

export const BoardGameContext = createContext()
export const BoardGameProvider =({children})=>{
    const [enableRotate, setEnableRotate] = useState(true);
    const [sunPosition, setSunPosition] = useState([50, -6, 150]);
    //NEW TILE
    const [newTileMesh, setNewTileMesh] = useState(); // the new tile mesh thing
    const [newTileData, setNewTileData] = useState(); //the new tile object
  
    const [newTileType, setNewTileType] = useState(); // string of tile type
    const [newTilePosition, setNewTilePosition] = useState([]); //updates the postion
  
    const [newTile2DPosition, setNewTile2DPosition] = useState([]); //updates the 2D tile position
    const [releaseTile, setReleaseTile] = useState(false); //makes it so you cant click after confirm
    const [tileRotation, setTileRotation] = useState(0); // sets tile rotation
    const [renderTileArr, setRenderTileArr] = useState([]); // renders 3D models to canvas
    // Citizen
    const [citizenPosition, setCitizenPosition] = useState([]);
    const [isCitizenPhase, setIsCitizenPhase] = useState(false);
    const [replaceTile, setReplaceTile] = useState(true);
    const [showCitizen, setShowCitizen] = useState(true);
    const [ showTile, setShowTile ] = useState(false)
    const [citizenArray, setCitizenArray] = useState([]);
    const [releaseCitizen, setReleaseCitizen] = useState(true);
    const[renderEnemyTile,setRenderEnemyTile]=useState([])
    return (<BoardGameContext.Provider value={{enableRotate,setEnableRotate,sunPosition,
    setSunPosition,newTileMesh,setNewTileMesh,
    newTileData,setNewTileData,newTileType,setNewTileType,newTile2DPosition,setNewTile2DPosition,releaseTile,setReleaseTile,tileRotation,setTileRotation,renderTileArr,setRenderTileArr,
    citizenPosition,setCitizenPosition,isCitizenPhase,setIsCitizenPhase,replaceTile,setReplaceTile,showCitizen,setShowCitizen,showTile,setShowTile,citizenArray,setCitizenArray,releaseCitizen,setReleaseCitizen,renderEnemyTile,setRenderEnemyTile}}>
        {children}
    </BoardGameContext.Provider>)
}