import { useEffect } from "react";
import { insertCoin } from "playroomkit";
import { useNavigate } from "react-router-dom";

function Lobby(){
    const navigate = useNavigate()

    useEffect(()=>{
        insertCoin().then(()=>{
            navigate('/gameboard')
        })
    },[])
    return (
        <div></div>
    )
}



export default Lobby