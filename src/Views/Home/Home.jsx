import { Suspense, useEffect, useRef, useState } from 'react';
import { OrbitControls, Sky, Stars } from '@react-three/drei';
import { Link, useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';

import { MdOutlineMusicOff } from 'react-icons/md';
import { SlMusicTone } from 'react-icons/sl';

import Header from '../../components/Header/Header';

import { CitizenRed } from '../../assets/citizens/CitizenRed';
import { CitizenBlue } from '../../assets/citizens/CitizenBlue';
import { CitizenGreen } from '../../assets/citizens/CitizenGreen';
import { CitizenYellow } from '../../assets/citizens/CitizenYellow';

import useSound from 'use-sound';
import opening from '/GameSound1.mp3';

import TileA from '../../assets/tiles/tileA';
import TileD from '../../assets/tiles/tileD';
import TileE from '../../assets/tiles/tileE';
import TileF from '../../assets/tiles/tileF';
import TileK from '../../assets/tiles/tileK';
import TileS from '../../assets/tiles/tileS';
import TileU from '../../assets/tiles/tileU';
import TileX from '../../assets/tiles/tileX';

import blenderExample from '../../assets/blenderExample.png';
import r3fExample from '../../assets/r3fExample.png';
import trelloExample from '../../assets/trelloExample.png';
import reactLogo from '../../assets/react.svg';
import threeLogo from '../../assets/threelogo.svg';
import jsLogo from '../../assets/jsLogo.svg';
import northCodersLogo from '../../assets/northCodersLogo.jpeg';

import styles from './Home.module.css';
import SpinnerLoader from '../../components/SpinnerLoader/SpinnerLoader';

function Home() {
  const navigate = useNavigate();
  const [playSound] = useSound('/GameSound1.mp3');
  const [muted, setMuted] = useState(true);
  const [sunPosition, setSunPosition] = useState([-50, 0, 250]);
  const [citizenCount, setCitizenCount] = useState(new Array(60).fill(0));
  const [citizensRed, setCitizensRed] = useState();
  const [citizensBlue, setCitizensBlue] = useState();
  const [citizensGreen, setCitizensGreen] = useState();
  const [citizensYellow, setCitizensYellow] = useState();

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
    const redCitizens = citizenCount.map((arr, index) => {
      return (
        <RigidBody
          key={'A' + index}
          gravityScale={0.15}
          position={[Math.random() * 10, 20, 0]}
          scale={0.095}
          friction={0.1}
          mass={1}
          rotation={[0, 0, 0]}
          canSleep={false}
          lockRotations={false}
          restitution={1}
        >
          <CitizenRed />
        </RigidBody>
      );
    });
    setCitizensRed(redCitizens);

    const blueCitizens = citizenCount.map((arr, index) => {
      return (
        <RigidBody
          key={'B' + index}
          gravityScale={0.1}
          position={[Math.random() * 5, 19.2, 2]}
          scale={0.095}
          friction={0.1}
          mass={1}
          rotation={[0, 0, 0]}
          canSleep={false}
          lockRotations={false}
          restitution={1}
        >
          <CitizenBlue />
        </RigidBody>
      );
    });
    setCitizensBlue(blueCitizens);

    const greenCitizens = citizenCount.map((arr, index) => {
      return (
        <RigidBody
          key={'C' + index}
          gravityScale={0.15}
          position={[Math.random() * 10, 19.5, 0]}
          scale={0.095}
          friction={0.1}
          mass={1}
          rotation={[0, 0, 0]}
          canSleep={false}
          lockRotations={false}
          restitution={1}
        >
          <CitizenGreen />
        </RigidBody>
      );
    });
    setCitizensGreen(greenCitizens);

    const yellowCitizens = citizenCount.map((arr, index) => {
      return (
        <RigidBody
          key={'D' + index}
          gravityScale={0.1}
          position={[Math.random() * 10, 20.4, 4]}
          scale={0.095}
          friction={0.1}
          mass={1}
          rotation={[0, Math.PI / 2, 0]}
          canSleep={false}
          lockRotations={false}
          restitution={1}
        >
          <CitizenYellow />
        </RigidBody>
      );
    });
    setCitizensYellow(yellowCitizens);
  }, []);

  function hostGameHandler() {
    navigate('/lobby');
  }

  return (
    <div className={styles.fullpage}>
      <div className={styles.pageWrapper}>
        <div className={styles.topBanner}>
          <button className={styles.music} onClick={toggleMute}>
            {muted ? <MdOutlineMusicOff /> : <SlMusicTone />}
          </button>
          <Header />
        </div>
        <div className={styles.canvasWrapper}>
          <div className={styles.introWrapper}>
            <h1 className={styles.heading}>Welcome to City Zen!</h1>
            <h3>Invite your friends</h3>
            <h3>Build your empire</h3>
            <h3>Become the Master Architect!</h3>
            <button className={styles.button} onClick={hostGameHandler}>
              Host Game
            </button>
          </div>
          <Suspense fallback={<SpinnerLoader />}>
            <Canvas className={styles.homeCanvas} shadows camera={{ fov: 70, position: [0, 2, 8] }}>
              <Physics>
                <ambientLight intensity={1.25} />
                <Stars factor={2.5} />
                <Sky
                  sunPosition={sunPosition}
                  distance={50000}
                  inclination={10}
                  azimuth={0.5}
                  turbidity={0.5}
                  rayleigh={10}
                  mieDirectionalG={0.01}
                  mieCoefficient={0.005}
                />

                <OrbitControls
                  minDistance={2}
                  maxDistance={30}
                  enableRotate={true}
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 2 - 0.1}
                  dampingFactor={0.8}
                  rotateSpeed={0.6}
                  target={[0, 3, 0]}
                />

                <directionalLight
                  intensity={2}
                  position={sunPosition}
                  shadow-normalBias={0.03}
                />
                <directionalLight
                  castShadow
                  intensity={4}
                  position={[-50, 23, 100]}
                  shadow-normalBias={0.03}
                />

                {citizensRed}
                {citizensBlue}
                {citizensGreen}
                {citizensYellow}

                <RigidBody
                  gravityScale={0.1}
                  position={[0, 5, 0]}
                  scale={0.095}
                  friction={100}
                  mass={100}
                  rotation={[0, 0, 0]}
                  canSleep={true}
                  lockRotations={true}
                  restitution={0}
                >
                  <CitizenRed />
                </RigidBody>

                <RigidBody
                  restitution={0}
                  enabledTranslations={[false, true, false]}
                  enabledRotations={[false, false, false]}
                >
                  <TileA
                    position={[-2, 0, 2]}
                    scale={0.92}
                    rotation={[0, Math.PI / 2, 0]}
                  />
                </RigidBody>

                <RigidBody
                  restitution={0}
                  enabledTranslations={[false, true, false]}
                  enabledRotations={[false, false, false]}
                >
                  <TileD position={[0, 0, 0]} scale={0.92} />
                </RigidBody>

                <RigidBody
                  restitution={0}
                  enabledTranslations={[false, true, false]}
                  enabledRotations={[false, false, false]}
                >
                  <TileE position={[-2, 0, 0]} scale={0.92} />
                </RigidBody>

                <RigidBody
                  restitution={0}
                  enabledTranslations={[false, true, false]}
                  enabledRotations={[false, false, false]}
                >
                  <TileE
                    position={[2, 0, 2]}
                    scale={0.92}
                    rotation={[0, Math.PI / 2, 0]}
                  />
                </RigidBody>

                <RigidBody
                  restitution={0}
                  enabledTranslations={[false, true, false]}
                  enabledRotations={[false, false, false]}
                >
                  <TileF position={[2, 0, 0]} scale={0.92} />
                </RigidBody>

                <RigidBody
                  restitution={0}
                  enabledTranslations={[false, true, false]}
                  enabledRotations={[false, false, false]}
                >
                  <TileK position={[0, 0, 2]} scale={0.92} />
                </RigidBody>

                <RigidBody
                  restitution={0}
                  enabledTranslations={[false, true, false]}
                  enabledRotations={[false, false, false]}
                >
                  <TileS
                    position={[-2, 0, -2]}
                    scale={0.92}
                    rotation={[0, Math.PI / 2, 0]}
                  />
                </RigidBody>

                <RigidBody
                  restitution={0}
                  enabledTranslations={[false, true, false]}
                  enabledRotations={[false, false, false]}
                >
                  <TileU
                    position={[2, 0, -2]}
                    scale={0.92}
                    rotation={[0, Math.PI / 2, 0]}
                  />
                </RigidBody>

                <RigidBody
                  restitution={0}
                  enabledTranslations={[false, true, false]}
                  enabledRotations={[false, false, false]}
                >
                  <TileU position={[0, 0, -4]} scale={0.92} />
                </RigidBody>

                <RigidBody
                  restitution={0}
                  enabledTranslations={[false, true, false]}
                  enabledRotations={[false, false, false]}
                >
                  <TileX position={[0, 0, -2]} scale={0.92} />
                </RigidBody>

                <RigidBody type="fixed">
                  <mesh receiveShadow position-y={-0.3}>
                    <boxGeometry args={[22, 0.5, 22]} />
                    <meshStandardMaterial color="#8f4111" />
                  </mesh>
                </RigidBody>
              </Physics>
            </Canvas>
          </Suspense>
        </div>

        <div className={styles.aboutRulesFlex}>
          <div className={styles.about}>
            <h2>About:</h2>
            <p>
              City Zen is a student project designed and built by a team of 5
              newly trained software engineers in 3 weeks
            </p>
            <p>
              In this table top board game, you'll become a master architect,
              shaping the city's skyline with your strategic prowess and
              creative flair. Gather your friends and family as you compete to
              claim territories and establish your influence across the Medieval
              landscape.
            </p>
            <p>
              Whether you're a seasoned strategist or a newcomer to the world of
              tabletop gaming, "City Zen" offers an experience that is calming,
              competitive and deeply engaging.
            </p>
            <p>
              So gather your friends, rally your fellow citizens, and prepare to
              leave your mark on the vibrant tapestry of City Zen.
            </p>
            <p>The adventure awaits!</p>
          </div>

          <div className={styles.rules}>
            <h2 className={styles.subheading}>How to Play</h2>
            <p>
              With each turn, players draw a tile and place it adjacent to
              existing tiles on the board where cities, roads or fields meet.
              They may then choose to place a citizen on the tile to claim a
              city, monastery or road. Citizens may only be placed on the tile
              placed on by the player on their turn.
            </p>
            <p>
              Once a feature is completed, the player retrieves their citizen
              and scores victory points.
            </p>
            <strong className={styles.subheading}>Scoring:</strong>
            <p>Completed Roads: Score 1 Victory Point per tile</p>
            <p>Completed Cities: Score 2 Victory Points per tile</p>
            <p>
              Completed Monasteries: Score 8 Victory Points (1 per surrounding
              tile)
            </p>
            <strong className={styles.subheading}>End of Game:</strong>
            <p>The game ends when all tiles have been placed.</p>
            <p>Final scoring takes place, including unfinished features.</p>
            <p>
              The player with the most Victory Points wins the game and becomes
              the Master Architect of Zen!
            </p>
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.introProject}>
            <h3>Project Description: Board Game Web Application</h3>
            <p>
              Our team has developed an immersive board game web application
              within a tight timeframe of three weeks, leveraging cutting-edge
              technologies including React Three Fiber, MongoDB, and JavaScript.
              Our creation offers an engaging gaming experience, drawing
              inspiration from classic board games while incorporating modern
              design and technology.
            </p>
          </div>

          <div className={styles.blenderWrapperLeft}>
            <img src={trelloExample} className={styles.blenderImg} />
            <p>
              We built our project using agile scrum. First planning our MVP through a series of technical spikes and research. 
              Next we defined our tech stack and user stories, breaking them down into manageable tasks.
              We used a trello kanban to track our tasks, raise bugs and issues, which enabled us to build at pace and avoid duplication of work.
            </p>
          </div>

          <div className={styles.blenderWrapperRight}>
            <p>
              The design process began by creating 3D assets in blender, with
              team members who had never build 3D assets learned to user the
              software and develop all 3D assets for the game within the first
              week of the project.
            </p>
            <img src={blenderExample} className={styles.blenderImg} />
          </div>

          <div className={styles.blenderWrapperLeft}>
            <img src={r3fExample} className={styles.r3fExample} />
            <p>
              Once our build phase began, we started experimenting with
              react-three-fiber, react-three-drei and react-three-rapier to
              begin to control the assets in 3D space, and understand user
              interactions and physics collisions.
            </p>
          </div>

          <div className={styles.introProject}>


            <h3>Key Features:</h3>
            <ul>
              <li>
                <strong>Immersive 3D Environment:</strong> Using React Three
                Fiber, we have crafted a visually stunning and interactive 3D
                environment that transports players into the heart of the game
                world. The immersive experience enhances player engagement and
                enjoyment.
              </li>

              <li>
                <strong>Dynamic Gameplay:</strong> Our game features dynamic
                gameplay mechanics that keep players on the edge of their seats.
                From strategic decision-making to cooperative or competitive
                gameplay modes, there's something for everyone to enjoy.
              </li>

              <li>
                <strong>Real-time Multiplayer:</strong> We've implemented
                real-time multiplayer functionality, allowing players to connect
                with friends or other enthusiasts from around the globe. Whether
                it's teaming up to conquer challenges or competing head-to-head
                for supremacy, the multiplayer aspect adds depth and excitement to
                the gaming experience.
              </li>

              <li>
                <strong>Customization and Progression:</strong> Players have the
                freedom to customize their gaming experience, from choosing their
                avatar to unlocking new content and achievements as they progress.
                This sense of progression keeps players engaged and motivated to
                continue exploring the game.
              </li>

              <li>
                <strong>Community Interaction:</strong> Our web application
                fosters a vibrant community where players can connect, share
                strategies, and compete in tournaments or events. The social
                aspect enhances the overall gaming experience and encourages
                long-term engagement.
              </li>
            </ul>

            <h3>Technologies Used:</h3>
            <ul>
              <li>
                <strong>React Three Fiber:</strong> Leveraging the power of React
                Three Fiber, we've created a rich, interactive 3D environment that
                brings our game world to life.
              </li>

              <li>
                <strong>MongoDB:</strong> We've utilized MongoDB as our database
                solution, providing a reliable and scalable backend infrastructure
                to support player data, game sessions, and more.
              </li>

              <li>
                <strong>JavaScript:</strong> The game's frontend logic and
                interactivity are built using JavaScript, ensuring smooth
                performance and responsiveness across various devices and
                browsers.
              </li>
            </ul>

            <div className={styles.techLogos}>
            <img src={reactLogo} className={styles.techlogo}/>
            <img src={threeLogo} className={styles.techlogo}/>
            <img src={jsLogo} className={styles.techlogo}/>
            </div>
          </div>

        </div>
      </div>
      <div className={styles.footer}>
        <img src={northCodersLogo} className={styles.ncLogo}/>
        <p>with thanks to <a href={'https://northcoders.com/'}>Northcoders</a> for our fantastic time on the course!</p>
      </div>

      <audio autoPlay={!muted}>
        <source src="/GameSound1.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
export default Home;
