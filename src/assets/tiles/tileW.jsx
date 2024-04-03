import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TileW = React.forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/tileW.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.51, 0.438, -0.574]} rotation={[Math.PI, -1.475, Math.PI]} scale={0.2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020.geometry}
          material={materials['Wood.014']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_1.geometry}
          material={materials['Wood_Light.011']}
        />
      </group>
      <group position={[0.702, 0.436, -0.674]} scale={0.3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials['Wood.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials['Green.001']}
        />
      </group>
      <group position={[0.571, 0.435, -0.725]} scale={0.3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials['Wood.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials['Green.001']}
        />
      </group>
      <group position={[0.66, 0.438, -0.517]} scale={0.3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials['Wood.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={materials['Green.001']}
        />
      </group>
      <group
        position={[0.21, 0.436, -0.466]}
        rotation={[-Math.PI, 1.081, -Math.PI]}
        scale={[0.15, 0.12, 0.15]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube347.geometry}
          material={materials['Wood.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube347_1.geometry}
          material={materials['Wood_Light.001']}
        />
      </group>
      <group position={[-0.022, 0.446, -0.014]} rotation={[0, 0.303, 0]} scale={[0.2, 0.17, 0.2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube348.geometry}
          material={materials['Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube348_1.geometry}
          material={materials['Wood_Light.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube348_2.geometry}
          material={materials['Dirt.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube348_3.geometry}
          material={materials['Main.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube348_4.geometry}
          material={materials['Walls.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube348_5.geometry}
          material={materials['Stone.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube348_6.geometry}
          material={materials['Stone_Light.008']}
        />
      </group>
      <group position={[-0.014, 0.35, 0.018]} scale={[1, 0.1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube062.geometry}
          material={materials.Grass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube062_1.geometry}
          material={materials.Road}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube048.geometry}
        material={materials.Material}
        position={[-0.014, 0.15, 0.018]}
        scale={[0.95, 0.1, 0.95]}
      />
    </group>
  )
})

useGLTF.preload('/tileW.glb')

export default TileW