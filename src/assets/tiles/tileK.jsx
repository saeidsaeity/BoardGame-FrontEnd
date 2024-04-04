import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TileK = React.forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/tileK.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.35, 0]} rotation={[Math.PI, 0, Math.PI]} scale={[1, 0.1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials['Grass.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_1.geometry}
          material={materials['Grass_edge.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_2.geometry}
          material={materials.Road}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_3.geometry}
          material={materials.City_floor}
        />
        <group
          position={[0.736, 1.002, 0.855]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube048.geometry}
            material={materials['Wood.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube048_1.geometry}
            material={materials.Metal_Light}
          />
        </group>
        <group
          position={[0.335, 1.002, -0.039]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube049.geometry}
            material={materials['Wood.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube049_1.geometry}
            material={materials.Metal_Light}
          />
        </group>
        <group
          position={[0.303, 1.044, -0.017]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube047.geometry}
            material={materials.Wood_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube047_1.geometry}
            material={materials['Wood.004']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials['Material.002']}
          position={[0, -2, 0.015]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.95, 1, 0.95]}
        />
        <group position={[0.838, 0.86, 0.778]} rotation={[0, 0.621, 0]} scale={[0.15, 1.2, 0.15]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube050.geometry}
            material={materials['Wood.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube050_1.geometry}
            material={materials['Wood_Light.001']}
          />
        </group>
        <group
          position={[-0.718, 0.995, -0.308]}
          rotation={[0, 1.515, 0]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube255.geometry}
            material={materials['Main.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube255_1.geometry}
            material={materials['Walls.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube255_2.geometry}
            material={materials['Stone.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube255_3.geometry}
            material={materials['Wood.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube255_4.geometry}
            material={materials['Wood_Light.004']}
          />
        </group>
        <group position={[-0.735, 0.995, 0.276]} rotation={[0, 1.515, 0]} scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube256.geometry}
            material={materials['Main.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube256_1.geometry}
            material={materials['Walls.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube256_2.geometry}
            material={materials['Stone.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube256_3.geometry}
            material={materials['Wood.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube256_4.geometry}
            material={materials['Wood_Light.004']}
          />
        </group>
        <group
          position={[-0.612, 0.956, -0.35]}
          rotation={[Math.PI, -0.015, Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube257.geometry}
            material={materials['Main.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube257_1.geometry}
            material={materials['Wood.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube257_2.geometry}
            material={materials['Wood_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube257_3.geometry}
            material={materials['Walls.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube257_4.geometry}
            material={materials['Stone.006']}
          />
        </group>
        <group
          position={[-0.623, 0.956, 0.337]}
          rotation={[Math.PI, -0.015, Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube258.geometry}
            material={materials['Main.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube258_1.geometry}
            material={materials['Wood.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube258_2.geometry}
            material={materials['Wood_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube258_3.geometry}
            material={materials['Walls.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube258_4.geometry}
            material={materials['Stone.006']}
          />
        </group>
        <group
          position={[-0.816, 0.956, 0.457]}
          rotation={[Math.PI, -0.015, Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube259.geometry}
            material={materials['Main.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube259_1.geometry}
            material={materials['Wood.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube259_2.geometry}
            material={materials['Wood_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube259_3.geometry}
            material={materials['Walls.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube259_4.geometry}
            material={materials['Stone.006']}
          />
        </group>
        <group
          position={[-0.8, 0.956, -0.524]}
          rotation={[Math.PI, -0.015, Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube260.geometry}
            material={materials['Main.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube260_1.geometry}
            material={materials['Wood.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube260_2.geometry}
            material={materials['Wood_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube260_3.geometry}
            material={materials['Walls.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube260_4.geometry}
            material={materials['Stone.006']}
          />
        </group>
        <group
          position={[0.481, 0.882, 0.167]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder029.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder029_1.geometry}
            material={materials.Green}
          />
        </group>
        <group
          position={[0.58, 0.847, 0.129]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_1.geometry}
            material={materials.Green}
          />
        </group>
        <group
          position={[-0.005, 0.862, 0.345]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder031.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder031_1.geometry}
            material={materials.Green}
          />
        </group>
        <group
          position={[0.288, 0.862, -0.085]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder032.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder032_1.geometry}
            material={materials.Green}
          />
        </group>
        <group
          position={[-0.039, 0.862, 0.459]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder033.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder033_1.geometry}
            material={materials.Green}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Resource_Rock_3.geometry}
          material={materials.Stone}
          position={[0.485, 1.24, -0.549]}
          scale={[0.5, 5, 0.5]}
        />
        <group
          position={[-0.545, 0.915, 0.592]}
          rotation={[Math.PI, -0.739, Math.PI]}
          scale={[0.4, 3.3, 0.45]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube261.geometry}
            material={materials['Stone.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube261_1.geometry}
            material={materials['Stone_Light.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube261_2.geometry}
            material={materials['Wood.008']}
          />
        </group>
        <group
          position={[-0.532, 0.915, -0.582]}
          rotation={[-Math.PI, 0.77, -Math.PI]}
          scale={[0.42, 3.3, 0.43]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube262.geometry}
            material={materials['Stone.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube262_1.geometry}
            material={materials['Stone_Light.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube262_2.geometry}
            material={materials['Wood.008']}
          />
        </group>
        <group
          position={[-0.325, 0.982, 0.021]}
          rotation={[Math.PI, -1.57, Math.PI]}
          scale={[0.42, 4.2, 0.42]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube263.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube263_1.geometry}
            material={materials['Stone_Light.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube263_2.geometry}
            material={materials['Stone.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube263_3.geometry}
            material={materials['Wood.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube263_4.geometry}
            material={materials['Main.007']}
          />
        </group>
        <group position={[-0.773, 0.388, 0.791]} rotation={[0, -0.83, 0]} scale={[0.25, 2.5, 0.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube264.geometry}
            material={materials['Stone_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube264_1.geometry}
            material={materials['Stone.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube264_2.geometry}
            material={materials['Wood.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube264_3.geometry}
            material={materials['Main.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube264_4.geometry}
            material={materials['Wood_Light.008']}
          />
        </group>
        <group
          position={[-0.748, 0.388, -0.789]}
          rotation={[Math.PI, -0.766, Math.PI]}
          scale={[0.25, 2.5, 0.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube265.geometry}
            material={materials['Stone_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube265_1.geometry}
            material={materials['Stone.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube265_2.geometry}
            material={materials['Wood.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube265_3.geometry}
            material={materials['Main.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube265_4.geometry}
            material={materials['Wood_Light.008']}
          />
        </group>
      </group>
    </group>
  )
})

useGLTF.preload('/tileK.glb')


export default TileK