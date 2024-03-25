import { Link } from "react-router-dom"
import Header from "./Header"
import useSound from 'use-sound';
import opening from '/GameSound1.mp3' 
import { MdOutlineMusicOff } from "react-icons/md";
import { SlMusicTone } from "react-icons/sl";
import { useEffect, useState } from "react";
function Home() {
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
    return (
        <>
        <Header/>
        <h1>Welcome to Citizens of Newcastle</h1>
        <Link to ="/lobby">
        <h2>Host Game</h2>
        </Link>
        <Link to ='/join'>Join game</Link>
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