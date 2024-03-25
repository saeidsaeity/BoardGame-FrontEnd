import { Link } from "react-router-dom"
import Header from "./Header"
import useSound from 'use-sound';
import opening from '../../public/GameSound1.mp3' 
import { useEffect, useState } from "react";
function Home() {
    const [playSound] = useSound('../../public/GameSound1.mp3');
    const [muted, setMuted] = useState(false);
    const toggleMute = () => {
        setMuted(!muted);
      };
      const [play] = useSound(opening)
    useEffect(()=>{
        setTimeout(() => {
            console.log("Delayed for 1 second.");
          }, "5000");
        document.querySelector('audio').play()
    },[])
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
        <button onClick={toggleMute}>{muted ? 'Unmute' : 'Mute'}</button>
        <audio autoPlay={!muted}>
            <source src="../../public/GameSound1.mp3" type="audio/mpeg"/>

        </audio>
        </>
    )
    
}
export default Home