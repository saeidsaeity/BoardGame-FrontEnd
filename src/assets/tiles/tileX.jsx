import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TileX = React.forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF('/tileX.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.35, 0]} scale={[1, 0.1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068.geometry}
          material={materials.Grass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_1.geometry}
          material={materials.Road}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_2.geometry}
          material={materials.Grass_edge}
        />
        <group position={[0.821, 1.002, 0.698]} rotation={[0, 1.517, 0]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube045.geometry}
            material={materials['Wood.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube045_1.geometry}
            material={materials.Metal_Light}
          />
        </group>
        <group position={[0.719, 1.044, 0.81]} rotation={[0, 1.517, 0]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube184.geometry}
            material={materials.Wood_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube184_1.geometry}
            material={materials['Wood.004']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054.geometry}
          material={materials['Material.002']}
          position={[0, -2, 0]}
          scale={[0.95, 1, 0.95]}
        />
        <group
          position={[0.813, 0.924, 0.785]}
          rotation={[-Math.PI, 0.77, -Math.PI]}
          scale={[0.1, 1, 0.1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube203.geometry}
            material={materials.Stone}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube203_1.geometry}
            material={materials.Wood}
          />
        </group>
        <group
          position={[-0.182, 0.995, 0.21]}
          rotation={[-Math.PI, 0.021, -Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube349.geometry}
            material={materials['Main.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube349_1.geometry}
            material={materials['Walls.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube349_2.geometry}
            material={materials['Stone.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube349_3.geometry}
            material={materials['Wood.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube349_4.geometry}
            material={materials['Wood_Light.004']}
          />
        </group>
        <group
          position={[0.109, 0.956, 0.158]}
          rotation={[-Math.PI, 1.554, -Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube350.geometry}
            material={materials['Main.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube350_1.geometry}
            material={materials['Wood.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube350_2.geometry}
            material={materials['Wood_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube350_3.geometry}
            material={materials['Walls.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube350_4.geometry}
            material={materials['Stone.006']}
          />
        </group>
        <group position={[0.264, 0.859, -0.1]} rotation={[0, -0.748, 0]} scale={[0.2, 2, 0.2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube352.geometry}
            material={materials['Main.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube352_1.geometry}
            material={materials['Walls.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube352_2.geometry}
            material={materials['Stone.014']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube352_3.geometry}
            material={materials['Wood.016']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube352_4.geometry}
            material={materials['Wood_Light.012']}
          />
        </group>
        <group position={[-0.724, 0.847, -0.743]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder047.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder047_1.geometry}
            material={materials.Green}
          />
        </group>
        <group position={[-0.593, 0.862, -0.692]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder048.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder048_1.geometry}
            material={materials.Green}
          />
        </group>
        <group position={[-0.732, 0.862, -0.611]} scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder049.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder049_1.geometry}
            material={materials.Green}
          />
        </group>
        <group
          position={[-0.145, 0.946, -0.204]}
          rotation={[0, 0.414, 0]}
          scale={[0.23, 2.4, 0.23]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube351.geometry}
            material={materials['Wood.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube351_1.geometry}
            material={materials['Wood_Light.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube351_2.geometry}
            material={materials['Stone.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube351_3.geometry}
            material={materials['Stone_Light.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube351_4.geometry}
            material={materials['Main.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube351_5.geometry}
            material={materials['Walls.004']}
          />
        </group>
      </group>
    </group>
  )
})

useGLTF.preload('/tileX.glb')

export default TileX