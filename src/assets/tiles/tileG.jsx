import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TileG = React.forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/tileG.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.35, 0]} rotation={[Math.PI, 0, Math.PI]} scale={[1, 0.1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials['Grass.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials['City_floor.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials['Grass_edge.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_3.geometry}
          material={materials.City_edge}
        />
        <group
          position={[0.301, 1.002, 0.729]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020.geometry}
            material={materials['Wood.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020_1.geometry}
            material={materials.Metal_Light}
          />
        </group>
        <group
          position={[0.205, 1.044, 0.846]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.3, 3, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022.geometry}
            material={materials.Wood_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022_1.geometry}
            material={materials['Wood.014']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials['Material.001']}
          position={[0, -2, 0]}
          scale={[0.95, 1, 0.95]}
        />
        <group
          position={[0.297, 0.924, 0.816]}
          rotation={[-Math.PI, 0.715, -Math.PI]}
          scale={[0.1, 1, 0.1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023.geometry}
            material={materials.Stone}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_1.geometry}
            material={materials.Wood}
          />
        </group>
        <group
          position={[-0.263, 0.86, 0.895]}
          rotation={[Math.PI, -0.49, Math.PI]}
          scale={[0.15, 1.2, 0.15]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials['Wood.010']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials['Wood_Light.006']}
          />
        </group>
        <group
          position={[-0.468, 0.86, 0.815]}
          rotation={[-Math.PI, 0.669, -Math.PI]}
          scale={[0.15, 1.2, 0.15]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014.geometry}
            material={materials['Wood.010']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_1.geometry}
            material={materials['Wood_Light.006']}
          />
        </group>
        <group position={[0.004, 0.995, -0.64]} rotation={[0, 1.523, 0]} scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube223.geometry}
            material={materials['Main.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube223_1.geometry}
            material={materials['Walls.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube223_2.geometry}
            material={materials['Stone.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube223_3.geometry}
            material={materials['Wood.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube223_4.geometry}
            material={materials['Wood_Light.003']}
          />
        </group>
        <group position={[0.043, 0.995, 0.288]} rotation={[0, 1.523, 0]} scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube224.geometry}
            material={materials['Main.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube224_1.geometry}
            material={materials['Walls.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube224_2.geometry}
            material={materials['Stone.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube224_3.geometry}
            material={materials['Wood.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube224_4.geometry}
            material={materials['Wood_Light.003']}
          />
        </group>
        <group
          position={[0.087, 0.956, 0.348]}
          rotation={[Math.PI, -0.023, Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube225.geometry}
            material={materials['Main.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube225_1.geometry}
            material={materials['Wood.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube225_2.geometry}
            material={materials['Wood_Light.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube225_3.geometry}
            material={materials['Walls.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube225_4.geometry}
            material={materials['Stone.004']}
          />
        </group>
        <group
          position={[-0.105, 0.956, 0.469]}
          rotation={[Math.PI, -0.023, Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube226.geometry}
            material={materials['Main.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube226_1.geometry}
            material={materials['Wood.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube226_2.geometry}
            material={materials['Wood_Light.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube226_3.geometry}
            material={materials['Walls.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube226_4.geometry}
            material={materials['Stone.004']}
          />
        </group>
        <group
          position={[-0.08, 0.956, -0.826]}
          rotation={[Math.PI, -0.023, Math.PI]}
          scale={[0.18, 1.8, 0.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube227.geometry}
            material={materials['Main.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube227_1.geometry}
            material={materials['Wood.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube227_2.geometry}
            material={materials['Wood_Light.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube227_3.geometry}
            material={materials['Walls.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube227_4.geometry}
            material={materials['Stone.004']}
          />
        </group>
        <group
          position={[-0.073, 0.921, -0.147]}
          rotation={[-Math.PI, 1.565, -Math.PI]}
          scale={[0.2, 2, 0.2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube228.geometry}
            material={materials['Wood_Light.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube228_1.geometry}
            material={materials['Wood.013']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube228_2.geometry}
            material={materials['Metal_Light.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube228_3.geometry}
            material={materials['Green.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube228_4.geometry}
            material={materials['Stone.013']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube228_5.geometry}
            material={materials['Yellow.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube228_6.geometry}
            material={materials['Red.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube228_7.geometry}
            material={materials['Gold.001']}
          />
        </group>
        <group
          position={[0.581, 0.915, 0.576]}
          rotation={[-Math.PI, 0.83, -Math.PI]}
          scale={[0.42, 3.3, 0.43]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube229.geometry}
            material={materials['Stone.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube229_1.geometry}
            material={materials['Stone_Light.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube229_2.geometry}
            material={materials['Wood.003']}
          />
        </group>
        <group
          position={[0.592, 0.915, -0.602]}
          rotation={[Math.PI, -0.79, Math.PI]}
          scale={[0.42, 3.3, 0.43]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube230.geometry}
            material={materials['Stone.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube230_1.geometry}
            material={materials['Stone_Light.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube230_2.geometry}
            material={materials['Wood.003']}
          />
        </group>
        <group
          position={[-0.574, 0.915, 0.584]}
          rotation={[Math.PI, -0.79, Math.PI]}
          scale={[0.42, 3.3, 0.43]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube231.geometry}
            material={materials['Stone.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube231_1.geometry}
            material={materials['Stone_Light.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube231_2.geometry}
            material={materials['Wood.003']}
          />
        </group>
        <group
          position={[-0.598, 0.915, -0.612]}
          rotation={[-Math.PI, 0.749, -Math.PI]}
          scale={[0.42, 3.3, 0.43]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube232.geometry}
            material={materials['Stone.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube232_1.geometry}
            material={materials['Stone_Light.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube232_2.geometry}
            material={materials['Wood.003']}
          />
        </group>
        <group
          position={[0.377, 0.982, -0.02]}
          rotation={[-Math.PI, 1.565, -Math.PI]}
          scale={[0.42, 4.2, 0.42]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube233.geometry}
            material={materials['Metal.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube233_1.geometry}
            material={materials['Stone_Light.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube233_2.geometry}
            material={materials['Stone.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube233_3.geometry}
            material={materials['Wood.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube233_4.geometry}
            material={materials['Main.002']}
          />
        </group>
        <group
          position={[-0.327, 0.934, -0.016]}
          rotation={[-Math.PI, 1.565, -Math.PI]}
          scale={[0.42, 4.2, 0.42]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube234.geometry}
            material={materials['Stone.012']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube234_1.geometry}
            material={materials['Stone_Light.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube234_2.geometry}
            material={materials['Wood.012']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube234_3.geometry}
            material={materials['Main.009']}
          />
        </group>
        <group position={[0.814, 0.388, 0.823]} rotation={[0, 0.749, 0]} scale={[0.25, 2.5, 0.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube235.geometry}
            material={materials['Stone_Light.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube235_1.geometry}
            material={materials['Stone.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube235_2.geometry}
            material={materials['Wood.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube235_3.geometry}
            material={materials['Main.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube235_4.geometry}
            material={materials['Wood_Light.001']}
          />
        </group>
        <group
          position={[0.801, 0.388, -0.812]}
          rotation={[-Math.PI, 0.804, -Math.PI]}
          scale={[0.25, 2.5, 0.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube236.geometry}
            material={materials['Stone_Light.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube236_1.geometry}
            material={materials['Stone.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube236_2.geometry}
            material={materials['Wood.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube236_3.geometry}
            material={materials['Main.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube236_4.geometry}
            material={materials['Wood_Light.001']}
          />
        </group>
        <group
          position={[-0.816, 0.388, 0.827]}
          rotation={[0, -0.778, 0]}
          scale={[0.25, 2.5, 0.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube237.geometry}
            material={materials['Stone_Light.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube237_1.geometry}
            material={materials['Stone.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube237_2.geometry}
            material={materials['Wood.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube237_3.geometry}
            material={materials['Main.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube237_4.geometry}
            material={materials['Wood_Light.001']}
          />
        </group>
        <group
          position={[-0.817, 0.388, -0.806]}
          rotation={[Math.PI, -0.81, Math.PI]}
          scale={[0.25, 2.5, 0.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube238.geometry}
            material={materials['Stone_Light.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube238_1.geometry}
            material={materials['Stone.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube238_2.geometry}
            material={materials['Wood.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube238_3.geometry}
            material={materials['Main.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube238_4.geometry}
            material={materials['Wood_Light.001']}
          />
        </group>
      </group>
    </group>
  )
})

useGLTF.preload('/tileG.glb')

export default TileG