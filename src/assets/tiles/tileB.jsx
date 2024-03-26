import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function TileB(props) {
  const { nodes, materials } = useGLTF('/tileB.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials['Material.001']}
        position={[0, 0.35, 0]}
        scale={[1, 0.1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials['Material.002']}
          position={[0, -2, 0]}
          scale={[0.95, 1, 0.95]}
        />
        <group position={[0.694, 1.082, -0.567]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder021.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder021_1.geometry}
            material={materials.Green}
          />
        </group>
        <group position={[0.569, 1.347, -0.665]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder022.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder022_1.geometry}
            material={materials.Green}
          />
        </group>
        <group position={[0.658, 1.082, -0.39]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder023.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder023_1.geometry}
            material={materials.Green}
          />
        </group>
        <group position={[0.569, 1.347, -0.521]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder024.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder024_1.geometry}
            material={materials.Green}
          />
        </group>
        <group position={[0.526, 1.082, -0.339]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder025.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder025_1.geometry}
            material={materials.Green}
          />
        </group>
        <group position={[0.437, 1.347, -0.468]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder026.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder026_1.geometry}
            material={materials.Green}
          />
        </group>
        <group position={[0.382, 1.282, -0.603]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder027.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder027_1.geometry}
            material={materials.Green}
          />
        </group>
        <group position={[0.401, 1.047, -0.744]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder028.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder028_1.geometry}
            material={materials.Green}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Resource_Rock_3.geometry}
          material={materials.Stone}
          position={[-0.62, 0.929, 0.396]}
          scale={[0.5, 5, 0.5]}
        />
        <group position={[0.039, 1, -0.02]} rotation={[0, 0.761, 0]} scale={[0.2, 1.8, 0.2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube069.geometry}
            material={materials['Stone.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube069_1.geometry}
            material={materials.Walls}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube069_2.geometry}
            material={materials['Main.001']}
          />
        </group>
      </mesh>
    </group>
  )
}

useGLTF.preload('/tileB.glb')