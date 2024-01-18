import { usePreloader } from "../../../hooks";
import { useAssets } from "./Scene";

const Floor = () => {
  const { nodes, materials } = useAssets();
  const modelRef = usePreloader(
    {
      x: 0,
      y: 0,
      z: 0,
    },
    {
      x: 0.95,
      y: 0.95,
      z: 0.88,
    }
  );

  return (
    <group name="Floor1" position={[9.61, -163.18, 22.37]} ref={modelRef}>
      <mesh
        name="Shelf 6"
        geometry={nodes["Shelf 6"].geometry}
        material={materials.Floorboard}
        castShadow
        receiveShadow
        position={[0, 0, 209.5]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[2.14, 0.5, 0.54]}
      />
      <mesh
        name="Shelf 5"
        geometry={nodes["Shelf 5"].geometry}
        material={materials.Floorboard}
        castShadow
        receiveShadow
        position={[0, 0, 114.03]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[2.14, 0.5, 0.54]}
      />
      <mesh
        name="Shelf 4"
        geometry={nodes["Shelf 4"].geometry}
        material={materials.Floorboard}
        castShadow
        receiveShadow
        position={[0, 0, -70.85]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[2.14, 0.5, 0.54]}
      />
      <mesh
        name="Shelf 51"
        geometry={nodes["Shelf 51"].geometry}
        material={materials.Floorboard}
        castShadow
        receiveShadow
        position={[0, 0, 21.79]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[2.14, 0.5, 0.54]}
      />
      <mesh
        name="Shelf 3"
        geometry={nodes["Shelf 3"].geometry}
        material={materials.Floorboard}
        castShadow
        receiveShadow
        position={[0, 0, -163.08]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[2.14, 0.5, 0.54]}
      />
      <mesh
        name="Shelf 61"
        geometry={nodes["Shelf 61"].geometry}
        material={materials.Floorboard}
        castShadow
        receiveShadow
        position={[0, 0, 163.08]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[2.14, 0.5, 0.54]}
      />
      <mesh
        name="Shelf 52"
        geometry={nodes["Shelf 52"].geometry}
        material={materials.Floorboard}
        castShadow
        receiveShadow
        position={[0, 0, 67.61]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[2.14, 0.5, 0.54]}
      />
      <mesh
        name="Shelf 41"
        geometry={nodes["Shelf 41"].geometry}
        material={materials.Floorboard}
        castShadow
        receiveShadow
        position={[0, 0, -117.27]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[2.14, 0.5, 0.54]}
      />
      <mesh
        name="Shelf 53"
        geometry={nodes["Shelf 53"].geometry}
        material={materials.Floorboard}
        castShadow
        receiveShadow
        position={[0, 0, -24.62]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[2.14, 0.5, 0.54]}
      />
      <mesh
        name="Shelf 2"
        geometry={nodes["Shelf 2"].geometry}
        material={materials.Floorboard}
        castShadow
        receiveShadow
        position={[0, 0, -209.5]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[2.14, 0.5, 0.54]}
      />
    </group>
  );
};

export default Floor;
