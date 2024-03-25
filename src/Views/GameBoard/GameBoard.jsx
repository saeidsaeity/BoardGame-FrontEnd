import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// asset loader
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/addons';

// 3D components
import TileA from '../../assets/tiles/tileA.jsx'
import TileB from '../../assets/tiles/tileB.jsx'
import TileC from '../../assets/tiles/tileC.jsx'
import TileD from '../../assets/tiles/tileD.jsx'

// styling
import styles from './GameBoard.module.css'

function GameBoard() {
    
    // camera.rotation.set(0, 0.7, Math.PI/2); // Set camera rotation (in radians)
    // Store th  e initial z position
    //  camera.position.z = 100;
    
    // const tileD = useLoader(GLTFLoader,'/tileD.gltf')
    
    const tileScale = [0.94, 0.94, 0.94]

    return(
        <div className={styles.gameBoard}>
            <Canvas camera={{ fov: 60, position: [0, 5, 10] }}>
                <ambientLight/>
                <directionalLight />
                <OrbitControls 
                    minDistance={5} 
                    maxDistance={20} 
                />
                <TileA position={ [0, 0, -2] } scale={tileScale} />
                <TileB position={ [ -2, 0, 0] } scale={tileScale} rotation-y={Math.PI * -0.5}/>
                <TileC position={ [2, 0, 0] } scale={tileScale} rotation-y={Math.PI}/>
                <TileD position={ [0, 0, 0] } scale={tileScale}/>
                    
                <axesHelper args={[5]} />
                <gridHelper args={[50, 25, 'black', 'red']} />
            </Canvas>
        </div>
    )
    
}

export default GameBoard