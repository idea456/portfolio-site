import React from "react";
import { useAssets } from "./Scene";

const Floor = () => {
  const { nodes, materials } = useAssets();

  return (
    <group
      name="Floor1"
      position={[9.61, -163.18, 22.37]}
      scale={[0.95, 0.95, 0.88]}
    >
      <mesh
        name="Shelf 6"
        geometry={nodes["Shelf 6"].geometry}
        material={materials["Shelf 6 Material"]}
        castShadow
        receiveShadow
        position={[0, 0, 209.5]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[2.14, 0.5, 0.54]}
      />
      <mesh
        name="Shelf 5"
        geometry={nodes["Shelf 5"].geometry}
        material={materials["Shelf 5 Material"]}
        castShadow
        receiveShadow
        position={[0, 0, 114.03]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[2.14, 0.5, 0.54]}
      />
      <mesh
        name="Shelf 4"
        geometry={nodes["Shelf 4"].geometry}
        material={materials["Shelf 4 Material"]}
        castShadow
        receiveShadow
        position={[0, 0, -70.85]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[2.14, 0.5, 0.54]}
      />
      <mesh
        name="Shelf 51"
        geometry={nodes["Shelf 51"].geometry}
        material={materials["Shelf 51 Material"]}
        castShadow
        receiveShadow
        position={[0, 0, 21.79]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[2.14, 0.5, 0.54]}
      />
      <mesh
        name="Shelf 3"
        geometry={nodes["Shelf 3"].geometry}
        material={materials["Shelf 3 Material"]}
        castShadow
        receiveShadow
        position={[0, 0, -163.08]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[2.14, 0.5, 0.54]}
      />
      <mesh
        name="Shelf 61"
        geometry={nodes["Shelf 61"].geometry}
        material={materials["Shelf 61 Material"]}
        castShadow
        receiveShadow
        position={[0, 0, 163.08]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[2.14, 0.5, 0.54]}
      />
      <mesh
        name="Shelf 52"
        geometry={nodes["Shelf 52"].geometry}
        material={materials["Shelf 52 Material"]}
        castShadow
        receiveShadow
        position={[0, 0, 67.61]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[2.14, 0.5, 0.54]}
      />
      <mesh
        name="Shelf 41"
        geometry={nodes["Shelf 41"].geometry}
        material={materials["Shelf 41 Material"]}
        castShadow
        receiveShadow
        position={[0, 0, -117.27]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[2.14, 0.5, 0.54]}
      />
      <mesh
        name="Shelf 53"
        geometry={nodes["Shelf 53"].geometry}
        material={materials["Shelf 53 Material"]}
        castShadow
        receiveShadow
        position={[0, 0, -24.62]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[2.14, 0.5, 0.54]}
      />
      <mesh
        name="Shelf 2"
        geometry={nodes["Shelf 2"].geometry}
        material={materials["Shelf 2 Material"]}
        castShadow
        receiveShadow
        position={[0, 0, -209.5]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[2.14, 0.5, 0.54]}
      />
    </group>
  );
};

export default React.memo(Floor);
