import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TileJ = React.forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF('/tileJ.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.35, 0]} scale={[1, 0.1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube267.geometry}
          material={materials.Grass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube267_1.geometry}
          material={materials.City_floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube267_2.geometry}
          material={materials.Road}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube267_3.geometry}
          material={materials.Grass_edge}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube267_4.geometry}
          material={materials['City_edge.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials['Material.002']}
          position={[0, -2, 0]}
          scale={[0.95, 1, 0.95]}
        />
        <group
          position={[0.309, 0.995, -0.747]}
          rotation={[0, -0.054, 0]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube268.geometry}
            material={materials['Main.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube268_1.geometry}
            material={materials['Walls.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube268_2.geometry}
            material={materials['Stone.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube268_3.geometry}
            material={materials['Wood.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube268_4.geometry}
            material={materials['Wood_Light.004']}
          />
        </group>
        <group
          position={[-0.275, 0.995, -0.763]}
          rotation={[0, -0.054, 0]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube269.geometry}
            material={materials['Main.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube269_1.geometry}
            material={materials['Walls.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube269_2.geometry}
            material={materials['Stone.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube269_3.geometry}
            material={materials['Wood.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube269_4.geometry}
            material={materials['Wood_Light.004']}
          />
        </group>
        <group
          position={[0.351, 0.956, -0.641]}
          rotation={[-Math.PI, 1.554, -Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube270.geometry}
            material={materials['Main.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube270_1.geometry}
            material={materials['Wood.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube270_2.geometry}
            material={materials['Wood_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube270_3.geometry}
            material={materials['Walls.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube270_4.geometry}
            material={materials['Stone.006']}
          />
        </group>
        <group
          position={[-0.336, 0.956, -0.651]}
          rotation={[-Math.PI, 1.554, -Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube271.geometry}
            material={materials['Main.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube271_1.geometry}
            material={materials['Wood.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube271_2.geometry}
            material={materials['Wood_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube271_3.geometry}
            material={materials['Walls.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube271_4.geometry}
            material={materials['Stone.006']}
          />
        </group>
        <group
          position={[-0.456, 0.956, -0.844]}
          rotation={[-Math.PI, 1.554, -Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube272.geometry}
            material={materials['Main.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube272_1.geometry}
            material={materials['Wood.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube272_2.geometry}
            material={materials['Wood_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube272_3.geometry}
            material={materials['Walls.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube272_4.geometry}
            material={materials['Stone.006']}
          />
        </group>
        <group
          position={[0.524, 0.956, -0.83]}
          rotation={[-Math.PI, 1.554, -Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube273.geometry}
            material={materials['Main.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube273_1.geometry}
            material={materials['Wood.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube273_2.geometry}
            material={materials['Wood_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube273_3.geometry}
            material={materials['Walls.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube273_4.geometry}
            material={materials['Stone.006']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rock_Group001.geometry}
          material={materials['Stone.001']}
          position={[-0.145, 0.978, 0.5]}
          rotation={[0, -0.415, 0]}
          scale={[0.7, 7, 0.7]}
        />
        <group
          position={[-0.591, 0.915, -0.573]}
          rotation={[-Math.PI, 0.83, -Math.PI]}
          scale={[0.4, 3.3, 0.45]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube274.geometry}
            material={materials['Stone.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube274_1.geometry}
            material={materials['Stone_Light.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube274_2.geometry}
            material={materials['Wood.008']}
          />
        </group>
        <group position={[0.583, 0.915, -0.562]} rotation={[0, 0.802, 0]} scale={[0.42, 3.3, 0.43]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube275.geometry}
            material={materials['Stone.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube275_1.geometry}
            material={materials['Stone_Light.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube275_2.geometry}
            material={materials['Wood.008']}
          />
        </group>
        <group
          position={[-0.019, 0.982, -0.353]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={[0.42, 4.2, 0.42]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube276.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube276_1.geometry}
            material={materials['Stone_Light.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube276_2.geometry}
            material={materials['Stone.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube276_3.geometry}
            material={materials['Wood.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube276_4.geometry}
            material={materials['Main.007']}
          />
        </group>
        <group
          position={[-0.79, 0.388, -0.8]}
          rotation={[Math.PI, -0.742, Math.PI]}
          scale={[0.25, 2.5, 0.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube277.geometry}
            material={materials['Stone_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube277_1.geometry}
            material={materials['Stone.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube277_2.geometry}
            material={materials['Wood.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube277_3.geometry}
            material={materials['Main.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube277_4.geometry}
            material={materials['Wood_Light.008']}
          />
        </group>
        <group
          position={[0.789, 0.388, -0.778]}
          rotation={[-Math.PI, 0.802, -Math.PI]}
          scale={[0.25, 2.5, 0.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube278.geometry}
            material={materials['Stone_Light.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube278_1.geometry}
            material={materials['Stone.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube278_2.geometry}
            material={materials['Wood.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube278_3.geometry}
            material={materials['Main.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube278_4.geometry}
            material={materials['Wood_Light.008']}
          />
        </group>
      </group>
    </group>
  )
})

useGLTF.preload('/tileJ.glb')

export default TileJ