import { Link, useNavigate } from "react-router-dom"
import Header from "./Header"
import useSound from 'use-sound';
import opening from '/GameSound1.mp3' 
import { MdOutlineMusicOff } from "react-icons/md";
import { SlMusicTone } from "react-icons/sl";
import { useEffect, useState } from "react";
import { insertCoin } from "playroomkit";
function Home() {
    const navigate=useNavigate()
    const [playSound] = useSound('/GameSound1.mp3');
    const [muted, setMuted] = useState(true);
    const toggleMute = () => {
        setMuted(!muted);
      };
      const [play] = useSound(opening)
    useEffect(()=>{
        if(!muted){
        setTimeout(() => {
            console.log("Delayed for 1 second.");
          }, "5000");
        document.querySelector('audio').play()
        document.querySelector('audio').volume = 0.5
        }
        else{
            document.querySelector('audio').pause()
        }
    },[muted])

    function hostGameHandler(){
        insertCoin().then(()=>{
            navigate('/gameboard')
          

        })
    }
    return (
        <>
        <Header/>
        <h1>Welcome to Citizens of Newcastle</h1>
    
        <button onClick={hostGameHandler}>HOST</button>
        <Link to ='/join'>Join game</Link>
        <br></br>
        <Link to ='/gameboard'>gameboard(placeholder)</Link>
        <p>game description</p>
        <p>rules</p>
        <p>how to play</p>
        <p>project description: pt3 games</p>
        <button onClick={toggleMute}>{muted ? <MdOutlineMusicOff /> : <SlMusicTone />}</button>
        <audio autoPlay={!muted}>
            <source src="/GameSound1.mp3" type="audio/mpeg"/>

        </audio>
        </>
    )
    
}
export default Home