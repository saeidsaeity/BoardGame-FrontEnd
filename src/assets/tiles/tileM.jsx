import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TileM = React.forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/tileM.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.35, 0]} scale={[1, 0.1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube317.geometry}
          material={materials.Grass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube317_1.geometry}
          material={materials.City_floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube317_2.geometry}
          material={materials.City_edge}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036.geometry}
          material={materials['Material.002']}
          position={[0, -2, 0]}
          scale={[0.95, 1, 0.95]}
        />
        <group
          position={[-0.519, 0.995, -0.603]}
          rotation={[0, -0.054, 0]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube040.geometry}
            material={materials['Main.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube040_1.geometry}
            material={materials['Walls.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube040_2.geometry}
            material={materials['Stone.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube040_3.geometry}
            material={materials['Wood.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube040_4.geometry}
            material={materials['Wood_Light.004']}
          />
        </group>
        <group
          position={[-0.304, 0.956, -0.686]}
          rotation={[-Math.PI, 1.554, -Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube041.geometry}
            material={materials['Main.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube041_1.geometry}
            material={materials['Wood.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube041_2.geometry}
            material={materials['Wood_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube041_3.geometry}
            material={materials['Walls.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube041_4.geometry}
            material={materials['Stone.006']}
          />
        </group>
        <group position={[-0.757, 0.859, -0.017]} scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039.geometry}
            material={materials['Main.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039_1.geometry}
            material={materials['Walls.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039_2.geometry}
            material={materials['Stone.014']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039_3.geometry}
            material={materials['Wood.016']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039_4.geometry}
            material={materials['Wood_Light.012']}
          />
        </group>
        <group
          position={[0.769, 0.93, 0.617]}
          rotation={[Math.PI, -0.771, Math.PI]}
          scale={[0.16, 1.6, 0.16]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube053.geometry}
            material={materials['Wood_Light.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube053_1.geometry}
            material={materials['Wood.010']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube053_2.geometry}
            material={materials.Fabric}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube053_3.geometry}
            material={materials['Metal_Light.002']}
          />
        </group>
        <group position={[0.423, 0.987, -0.583]} rotation={[0, 0.536, 0]} scale={[0.56, 3.3, 0.43]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials['Stone.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials['Stone_Light.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials['Wood.008']}
          />
        </group>
        <group position={[-0.583, 0.915, 0.578]} rotation={[0, 0.834, 0]} scale={[0.42, 3.3, 0.43]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube312.geometry}
            material={materials['Stone.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube312_1.geometry}
            material={materials['Stone_Light.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube312_2.geometry}
            material={materials['Wood.008']}
          />
        </group>
        <group position={[-0.143, 0.982, -0.01]} rotation={[0, 1.038, 0]} scale={[0.45, 4.2, 0.42]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube311.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube311_1.geometry}
            material={materials['Stone_Light.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube311_2.geometry}
            material={materials['Stone.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube311_3.geometry}
            material={materials['Wood.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube311_4.geometry}
            material={materials['Main.007']}
          />
        </group>
        <group
          position={[-0.833, 0.388, 0.843]}
          rotation={[0, -0.828, 0]}
          scale={[0.25, 2.5, 0.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube313.geometry}
            material={materials['Stone_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube313_1.geometry}
            material={materials['Stone.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube313_2.geometry}
            material={materials['Wood.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube313_3.geometry}
            material={materials['Main.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube313_4.geometry}
            material={materials['Wood_Light.008']}
          />
        </group>
        <group
          position={[0.821, 0.388, -0.82]}
          rotation={[-Math.PI, 0.85, -Math.PI]}
          scale={[0.25, 2.5, 0.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube315.geometry}
            material={materials['Stone_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube315_1.geometry}
            material={materials['Stone.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube315_2.geometry}
            material={materials['Wood.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube315_3.geometry}
            material={materials['Main.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube315_4.geometry}
            material={materials['Wood_Light.008']}
          />
        </group>
      </group>
    </group>
  )
})

useGLTF.preload('/tileM.glb')

export default TileM