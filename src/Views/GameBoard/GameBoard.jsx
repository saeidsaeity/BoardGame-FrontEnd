import { Canvas, useThree } from '@react-three/fiber'

import styles from './GameBoard.module.css'


// asset loader
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/addons';

// 3D components
import TileA from '../../assets/tiles/tileA.jsx'
import TileD from '../../assets/tiles/tileD.jsx'
import { OrbitControls } from '@react-three/drei'

function GameBoard() {

    // camera.rotation.set(0, 0.7, Math.PI/2); // Set camera rotation (in radians)
    // Store th  e initial z position
    //  camera.position.z = 100;
    
    // const tileD = useLoader(GLTFLoader,'/tileD.gltf')
    
    const tileScale = [0.95, 0.95, 0.95]

    return(
        <div className={styles.gameBoard}>
            <Canvas camera={{ fov: 60, position: [0, 5, 10]}}>
                <ambientLight/>
                <OrbitControls 
                    minDistance={5} 
                    maxDistance={20} 
                />
                <TileD position={ [-1.50, 0 , -0.02] } scale={tileScale}/>
                <TileA position={ [7.05, 0 , -2] } scale={tileScale} />
                    
                <axesHelper args={[5]} />
                <gridHelper args={[50, 25, 'black', 'red']} />
            </Canvas>
        </div>
    )
    
}

export default GameBoard