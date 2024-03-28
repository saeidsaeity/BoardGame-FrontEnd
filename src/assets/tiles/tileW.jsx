import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TileW = React.forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF('/tileW.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.35, 0]} scale={[1, 0.1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube060.geometry}
          material={materials.Grass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube060_1.geometry}
          material={materials.Road}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube060_2.geometry}
          material={materials.Grass_edge}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046.geometry}
          material={materials['Material.002']}
          position={[0, -2, 0]}
          scale={[0.95, 1, 0.95]}
        />
        <group position={[0.734, 0.882, -0.558]} scale={[0.3, 3, 0.3]}>
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
        <group position={[0.609, 0.847, -0.655]} scale={[0.3, 3, 0.3]}>
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
        <group position={[0.699, 0.882, -0.38]} scale={[0.3, 3, 0.3]}>
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
        <group position={[0.609, 0.847, -0.511]} scale={[0.3, 3, 0.3]}>
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
        <group position={[0.567, 0.882, -0.329]} scale={[0.3, 3, 0.3]}>
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
        <group position={[0.477, 0.847, -0.459]} scale={[0.3, 3, 0.3]}>
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
        <group position={[0.422, 0.882, -0.594]} scale={[0.3, 3, 0.3]}>
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
        <group position={[0.442, 0.847, -0.734]} scale={[0.3, 3, 0.3]}>
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
          geometry={nodes.Rock_Group002.geometry}
          material={materials['Stone.001']}
          position={[0.059, 0.978, -0.195]}
          rotation={[-Math.PI, 0.745, -Math.PI]}
          scale={[0.7, 7, 0.7]}
        />
      </group>
    </group>
  )
})

useGLTF.preload('/tileW.glb')

export default TileW