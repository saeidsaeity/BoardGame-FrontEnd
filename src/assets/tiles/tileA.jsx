import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TileA = React.forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/tileA.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.35, 0]} scale={[1, 0.1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials.Grass_edge}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_1.geometry}
          material={materials.Grass}
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
          geometry={nodes.Cube010.geometry}
          material={materials['Material.002']}
          position={[0, -2, 0]}
          scale={[0.95, 1, 0.95]}
        />
        <group position={[-0.41, 1.082, 0.379]} scale={[0.3, 3, 0.3]}>
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
        <group position={[-0.5, 1.347, 0.248]} scale={[0.3, 3, 0.3]}>
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
        <group position={[-0.542, 1.082, 0.43]} scale={[0.3, 3, 0.3]}>
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
        <group position={[-0.631, 1.047, 0.301]} scale={[0.3, 2.9, 0.3]}>
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
        <group position={[-0.687, 0.882, 0.166]} scale={[0.3, 3, 0.3]}>
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Resource_Rock_3.geometry}
          material={materials.Stone}
          position={[0.508, 1.325, -0.583]}
          rotation={[0, -0.525, 0]}
          scale={[0.5, 5, 0.5]}
        />
        <group position={[0, 1, 0]} scale={[0.2, 2, 0.2]}>
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
    </group>
  )
})

useGLTF.preload('/tileA.glb')

export default TileA