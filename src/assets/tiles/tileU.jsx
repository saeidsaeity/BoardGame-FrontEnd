import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TileU = React.forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF('/tileU.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.35, 0]} scale={[1, 0.1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube056.geometry}
          material={materials.Grass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube056_1.geometry}
          material={materials.Road}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube056_2.geometry}
          material={materials.Grass_edge}
        />
        <group
          position={[-0.809, 1.002, -0.695]}
          rotation={[Math.PI, -1.432, Math.PI]}
          scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube194.geometry}
            material={materials['Wood.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube194_1.geometry}
            material={materials.Metal_Light}
          />
        </group>
        <group position={[-0.059, 1.002, 0.075]} rotation={[0, 1.516, 0]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube197.geometry}
            material={materials['Wood.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube197_1.geometry}
            material={materials.Metal_Light}
          />
        </group>
        <group
          position={[-0.697, 1.044, -0.798]}
          rotation={[Math.PI, -1.432, Math.PI]}
          scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube195.geometry}
            material={materials.Wood_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube195_1.geometry}
            material={materials['Wood.004']}
          />
        </group>
        <group position={[-0.078, 0.961, 0.042]} rotation={[0, 1.516, 0]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube198.geometry}
            material={materials.Wood_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube198_1.geometry}
            material={materials['Wood.004']}
          />
        </group>
        <group position={[-0.098, 0.961, 0.083]} rotation={[0, 1.516, 0]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube202.geometry}
            material={materials.Wood_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube202_1.geometry}
            material={materials['Wood.004']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042.geometry}
          material={materials['Material.002']}
          position={[0, -2, 0]}
          scale={[0.95, 1, 0.95]}
        />
        <group position={[-0.793, 0.924, -0.781]} rotation={[0, -0.855, 0]} scale={[0.1, 1, 0.1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube196.geometry}
            material={materials.Stone}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube196_1.geometry}
            material={materials.Wood}
          />
        </group>
        <group position={[0.739, 0.882, 0.591]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_1.geometry}
            material={materials.Green}
          />
        </group>
        <group position={[0.731, 0.847, 0.458]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013_1.geometry}
            material={materials.Green}
          />
        </group>
        <group position={[0.703, 0.882, 0.732]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014_1.geometry}
            material={materials.Green}
          />
        </group>
        <group position={[0.614, 0.847, 0.574]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder015.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder015_1.geometry}
            material={materials.Green}
          />
        </group>
        <group position={[0.573, 0.882, 0.732]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder016.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder016_1.geometry}
            material={materials.Green}
          />
        </group>
        <group position={[0.498, 0.847, 0.635]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder017.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder017_1.geometry}
            material={materials.Green}
          />
        </group>
        <group position={[0.489, 0.882, 0.51]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_1.geometry}
            material={materials.Green}
          />
        </group>
        <group position={[0.597, 0.847, 0.439]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_1.geometry}
            material={materials.Green}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Resource_Rock_2.geometry}
          material={materials['Stone.003']}
          position={[0.613, 0.974, -0.562]}
          scale={[0.5, 5, 0.5]}
        />
      </group>
    </group>
  )
})

useGLTF.preload('/tileU.glb')

export default TileU