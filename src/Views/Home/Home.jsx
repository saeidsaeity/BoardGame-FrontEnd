import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import useSound from 'use-sound';
import opening from '/GameSound1.mp3';
import { MdOutlineMusicOff } from 'react-icons/md';
import { SlMusicTone } from 'react-icons/sl';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { insertCoin } from 'playroomkit';
import styles from './Home.module.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutText from './aboutData';
import { gsap } from 'gsap';
import Rules from './Rules';
import ProjectDescription from './ProjectDescription';
gsap.registerPlugin(ScrollTrigger);
function Home() {
  const navigate = useNavigate();
  const [playSound] = useSound('/GameSound1.mp3');
  const [muted, setMuted] = useState(true);
  const aboutRef = useRef(null);

  const toggleMute = () => {
    setMuted(!muted);
  };
  const [play] = useSound(opening);
  useEffect(() => {
    if (!muted) {
      setTimeout(() => {
        console.log('Delayed for 1 second.');
      }, '5000');
      document.querySelector('audio').play();
      document.querySelector('audio').volume = 0.5;
    } else {
      document.querySelector('audio').pause();
    }
  }, [muted]);

  useEffect(() => {
    const aboutText = aboutRef.current.innerText;
    aboutRef.current.innerText = '';

    const letters = aboutText.split('');
    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.opacity = '0';
      aboutRef.current.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        duration: 0.3,
        delay: index * 0.025,
      });
    });

    // Set up ScrollTrigger to finish animation when bottom two-thirds of about section is visible
    ScrollTrigger.create({
      trigger: aboutRef.current,
      start: 'bottom bottom-=33%', // Bottom two-thirds are visible
      onEnterBack: () => {
        // Complete the animation when bottom two-thirds of about section is visible
        gsap.set(
          letters.map((_, index) => aboutRef.current.children[index]),
          { opacity: 1 }
        );
      },
    });
  }, []);

  function hostGameHandler() {
    console.log('enter hostGameHandler');
    navigate('/lobby');
    // insertCoin().then(() => {
    //   navigate("/gameboard");
    // });
  }
  return (
    <div className={styles.fullpage}>
      <div className={styles.pageWrapper}>

        <div className={styles.topBanner}>
          <button className={styles.music} onClick={toggleMute}>
            {muted ? <MdOutlineMusicOff /> : <SlMusicTone />}
          </button>
          <h1 className={styles.heading}>Welcome to City Zen</h1>
          <Header />
        </div>
        <div className={styles.introWrapper}>
          <h3>Invite your friends</h3>
          <h3>Build your empire!</h3>
          <button className={styles.button} onClick={hostGameHandler}>
            Host a game!
          </button>
        </div>
        <div className={styles.scrollableTextContainer}>
          {/* <Link className={styles.linkButton} to="/join">
            Join game
          </Link> */}
          <br></br>

          <h2>About:</h2>
          <p ref={aboutRef} className={styles.about}>
            {aboutText}{' '}
          </p>
          <Rules />
        </div>
        <ProjectDescription />
      </div>
      
      <div className={styles.backgroundimage} />

      
      <audio autoPlay={!muted}>
        <source src="/GameSound1.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
export default Home;
