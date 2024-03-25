
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function TileA(props) {
  const { nodes, materials } = useGLTF('/tileA.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials.Material}
        position={[-7.403, 0.15, 0.02]}
        scale={[0.95, 0.1, 0.95]}
      />
      <group position={[-7.403, 0.35, 0.02]} scale={[1, 0.1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_1.geometry}
          material={materials['Stone_Light.001']}
        />
      </group>
      <group position={[-7.421, 0.45, 0]} scale={0.2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube095.geometry}
          material={materials['Stone.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube095_1.geometry}
          material={materials.Walls}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube095_2.geometry}
          material={materials['Main.001']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/tileA.glb')

export default TileA