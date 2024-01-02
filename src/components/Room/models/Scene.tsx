import React, { useImperativeHandle, useRef } from "react";
import useSpline from "@splinetool/r3f-spline";
import Keyboard from "./Keyboard";
import Shelves from "./Shelves";
import Floor from "./Floor";
import Workspace from "./Workspace";

type TAssetsContext = {
  nodes: Record<string, any>;
  materials: Record<string, any>;
};

const AssetsContext = React.createContext<TAssetsContext | null>(null);

export const useAssets = () => {
  const context = React.useContext(AssetsContext);
  if (!context) {
    throw new Error("Wrap the models in AssetsContext!");
  }
  return context;
};

const Scene = React.forwardRef((props, ref) => {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/CxxKW4WaE4Skxb1b/scene.splinecode"
  );
  const monitorRef = useRef(null);
  const roomRef = useRef(null);

  useImperativeHandle(ref, () => ({
    get monitor() {
      return monitorRef.current;
    },
    get room() {
      return roomRef.current;
    },
  }));

  return (
    <AssetsContext.Provider value={{ nodes, materials }}>
      <color attach="background" args={["#fefaed"]} />
      <group
        {...props}
        dispose={null}
        rotation={[0, Math.PI + 0.8, 0]}
        ref={roomRef}
        position={[0, 0, 100]}
      >
        <scene name="Scene 1">
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={2.45}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-578.5755}
            shadow-camera-right={578.5755}
            shadow-camera-top={578.5755}
            shadow-camera-bottom={-578.5755}
            position={[184.47, 240.97, -131.91]}
            rotation={[0, 0, -1.17]}
          />
          <group
            name="Room"
            position={[-160.96, 111, -47.76]}
            rotation={[0, -0.03, 0]}
            scale={1}
          >
            <group
              name="cd-4"
              position={[152.69, 18.52, 184.33]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.12}
            >
              <mesh
                name="Cube"
                geometry={nodes.Cube.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[46.2, -124.61, 7.27]}
                rotation={[0, 0, -1.75]}
                scale={1.28}
              />
              <mesh
                name="Cylinder 21"
                geometry={nodes["Cylinder 21"].geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[-89.13, -155.17, 5.27]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={1.28}
              />
              <mesh
                name="Cylinder1"
                geometry={nodes.Cylinder1.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[86.56, -127.47, 7.09]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={1.28}
              />
              <mesh
                name="Rectangle 2"
                geometry={nodes["Rectangle 2"].geometry}
                material={materials["Rectangle 2 Material"]}
                castShadow
                receiveShadow
                position={[4.53, -22.14, -42.46]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={1.28}
              />
              <mesh
                name="d"
                geometry={nodes.d.geometry}
                material={materials["pink-light"]}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[-1.94, -1.51, 2.72]}
                scale={[0.72, 0.09, 0.72]}
              />
              <mesh
                name="Cylinder2"
                geometry={nodes.Cylinder2.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.72, 0.09, 0.72]}
              />
            </group>
            <group
              name="Plant"
              position={[164.99, -93.1, -149.69]}
              rotation={[0, -0.73, 0]}
              scale={1.2}
            >
              <mesh
                name="Cylinder 31"
                geometry={nodes["Cylinder 31"].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0, -36.62, -1.27]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.89}
              />
              <mesh
                name="Cylinder 6"
                geometry={nodes["Cylinder 6"].geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[-0.43, 1.68, -12.29]}
                rotation={[-0.28, 1.06, 3.04]}
                scale={0.42}
              />
              <mesh
                name="Cylinder 8"
                geometry={nodes["Cylinder 8"].geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[-3.46, -8.54, 12.03]}
                rotation={[-2.62, 1.24, 0]}
                scale={0.42}
              />
              <mesh
                name="Cylinder 9"
                geometry={nodes["Cylinder 9"].geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[4.53, -8.73, -14.12]}
                rotation={[-0.33, 0.34, 2.99]}
                scale={0.42}
              />
              <mesh
                name="Cylinder 7"
                geometry={nodes["Cylinder 7"].geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[-4.63, 3.16, 6.13]}
                rotation={[-2.98, Math.PI / 2, 0]}
                scale={0.42}
              />
              <mesh
                name="Cylinder 5"
                geometry={nodes["Cylinder 5"].geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[-4.63, 8.43, -4.24]}
                rotation={[3.05, Math.PI / 2, 0]}
                scale={0.42}
              />
              <mesh
                name="Cylinder 22"
                geometry={nodes["Cylinder 22"].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0, -26.47, -1.27]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.83}
              />
            </group>
            <group
              name="Walls"
              position={[6.69, 26.05, 23.99]}
              rotation={[-Math.PI, -0.03, -Math.PI]}
              scale={1.73}
            >
              <group
                name="Floor"
                position={[-0.5, -108.13, 2.68]}
                rotation={[0, 0, 0]}
                scale={1}
              >
                <mesh
                  name="Concrete"
                  geometry={nodes.Concrete.geometry}
                  material={materials["Concrete Material"]}
                  castShadow
                  receiveShadow
                  position={[0, -12.17, 0]}
                  rotation={[-1.58, 0, 1.56]}
                  scale={[1, 1.15, 1]}
                />
              </group>
              <mesh
                name="Cube 79"
                geometry={nodes["Cube 79"].geometry}
                material={materials["Cube 79 Material"]}
                castShadow
                receiveShadow
                position={[-102.18, 48.97, -88.08]}
                rotation={[1.54, 1.05, -1.54]}
                scale={1}
              />
              <mesh
                name="Cube 78"
                geometry={nodes["Cube 78"].geometry}
                material={materials["Cube 78 Material"]}
                castShadow
                receiveShadow
                position={[-105.32, 49.01, 86.42]}
                rotation={[1.54, 1.05, -1.54]}
                scale={1}
              />
              <mesh
                name="Cube 77"
                geometry={nodes["Cube 77"].geometry}
                material={materials["Cube 77 Material"]}
                castShadow
                receiveShadow
                position={[-139.31, -71.16, -9.04]}
                rotation={[0, 1.55, 0]}
              />
              <mesh
                name="Shape"
                geometry={nodes.Shape.geometry}
                material={materials.orange}
                castShadow
                receiveShadow
                position={[135.82, -105.6, -130.96]}
                rotation={[0, -0.02, 0]}
                scale={1}
              />

              <mesh
                name="Cube 5"
                geometry={nodes["Cube 5"].geometry}
                material={materials["Cube 5 Material"]}
                castShadow
                receiveShadow
                position={[-68.8, 101.1, 13.19]}
                rotation={[1.54, 1.05, 0.03]}
                scale={1}
              />
              <mesh
                name="Cube 4"
                geometry={nodes["Cube 4"].geometry}
                material={materials["Cube 4 Material"]}
                castShadow
                receiveShadow
                position={[-97.09, 49.1, -80.4]}
                rotation={[1.54, 1.05, -1.54]}
              />
              <mesh
                name="Cube 3"
                geometry={nodes["Cube 3"].geometry}
                material={materials["Cube 3 Material"]}
                castShadow
                receiveShadow
                position={[-100.45, 48.2, 87.31]}
                rotation={[1.54, 1.05, -1.54]}
              />
              <mesh
                name="Cube 7"
                geometry={nodes["Cube 7"].geometry}
                material={materials["Cube 7 Material"]}
                castShadow
                receiveShadow
                position={[-95.78, -61.45, -118.4]}
                rotation={[0, -0.02, 0]}
                scale={[1, 1, 0.64]}
              />
              <mesh
                name="Cube1"
                geometry={nodes.Cube1.geometry}
                material={materials["Cube1 Material"]}
                castShadow
                receiveShadow
                position={[-133.77, -61.45, -0.44]}
                rotation={[0, 1.55, 0]}
              />
            </group>
            <group
              name="Case"
              position={[161.75, -34.62, 88.37]}
              rotation={[0, -0.02, 0]}
              scale={1}
            >
              <mesh
                name="Plane"
                geometry={nodes.Plane.geometry}
                material={materials["Plane Material"]}
                castShadow
                receiveShadow
                position={[-27.37, -0.04, 0.26]}
                rotation={[0, -1.55, 0]}
                scale={[0.97, 1, 1.14]}
              />
              <mesh
                name="Cube2"
                geometry={nodes.Cube2.geometry}
                material={materials.Wall}
                castShadow
                receiveShadow
                position={[0.16, 0, 0]}
                rotation={[-Math.PI / 2, 0, -1.55]}
                scale={[0.84, 1, 1.45]}
              />
            </group>
            <Keyboard />
            <group
              name="Speaker"
              position={[148.92, -81.35, 156.73]}
              scale={[0.15, 0.13, 0.15]}
            >
              <mesh
                name="Plane 2"
                geometry={nodes["Plane 2"].geometry}
                material={materials["Plane 2 Material"]}
                castShadow
                receiveShadow
                position={[-73.13, -3.79, 2.77]}
                rotation={[0, -Math.PI / 2, 0]}
              />
              <mesh
                name="Cube 12"
                geometry={nodes["Cube 12"].geometry}
                material={materials["Cube 12 Material"]}
                castShadow
                receiveShadow
                position={[-67.21, 3.84, 5.49]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 1, 1.24]}
              />
              <mesh
                name="Cube 111"
                geometry={nodes["Cube 111"].geometry}
                material={materials["Cube 111 Material"]}
                castShadow
                receiveShadow
              />
            </group>
            <group name="Group" position={[150.3, -32.23, 157.97]}>
              <mesh
                name="Cube 6"
                geometry={nodes["Cube 6"].geometry}
                material={materials["Cube 6 Material"]}
                castShadow
                receiveShadow
                position={[0.44, 4.64, 0.64]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.39, 0.72, 3.62]}
              />
              <mesh
                name="Cube 51"
                geometry={nodes["Cube 51"].geometry}
                material={materials["Cube 51 Material"]}
                castShadow
                receiveShadow
                position={[0, -1.67, 0]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[1, 0.72, 3.62]}
              />
            </group>
            <mesh
              name="Cube 10"
              geometry={nodes["Cube 10"].geometry}
              material={materials["Cube 10 Material"]}
              castShadow
              receiveShadow
              position={[146.44, -22.05, 188.1]}
              rotation={[1.91, 0, Math.PI / 2]}
              scale={[0.76, 0.72, 3.81]}
            />
            <mesh
              name="Cube 9"
              geometry={nodes["Cube 9"].geometry}
              material={materials["Cube 9 Material"]}
              castShadow
              receiveShadow
              position={[148.18, -21.69, 197.16]}
              rotation={[1.91, 0, Math.PI / 2]}
              scale={[0.76, 0.72, 3.81]}
            />
            <mesh
              name="Cube 8"
              geometry={nodes["Cube 8"].geometry}
              material={materials["Cube 8 Material"]}
              castShadow
              receiveShadow
              position={[150.31, -19.36, 206.91]}
              rotation={[1.91, 0, Math.PI / 2]}
              scale={[1, 0.72, 3.81]}
            />
            <group
              name="Succulent1 2"
              position={[151.85, 24.77, 155.33]}
              scale={[-0.23, 0.23, 0.23]}
            >
              <mesh
                name="Cylinder 32"
                geometry={nodes["Cylinder 32"].geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[-1.55, 4.13, -43.91]}
                rotation={[Math.PI, 0.74, -Math.PI]}
                scale={[0.3, 1.72, 0.3]}
              />
              <mesh
                name="Cylinder 23"
                geometry={nodes["Cylinder 23"].geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[-13.18, 4.06, -32.22]}
                rotation={[Math.PI, 0.74, -Math.PI]}
                scale={[0.3, 0.69, 0.3]}
              />
              <mesh
                name="Cylinder3"
                geometry={nodes.Cylinder3.geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[4.12, 12.86, -29.45]}
                rotation={[Math.PI, 0, -Math.PI]}
                scale={[0.3, 0.69, 0.3]}
              />
              <mesh
                name="Cylinder4"
                geometry={nodes.Cylinder4.geometry}
                material={materials.Floor}
                castShadow
                receiveShadow
                position={[-2.93, -42.2, -32.94]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.39, 0.05, 0.39]}
              />
            </group>
            <group name="Succuelent" position={[153.86, -18.3, 158.67]}>
              <group
                name="Succulent1 3"
                position={[1.14, 0.07, 0.82]}
                scale={0.16}
              >
                <mesh
                  name="Cube 71"
                  geometry={nodes["Cube 71"].geometry}
                  material={materials.Green}
                  castShadow
                  receiveShadow
                  position={[116.2, -31.87, 17.4]}
                  rotation={[1.41, 1.5, -1.49]}
                  scale={1}
                />
                <mesh
                  name="Cube 61"
                  geometry={nodes["Cube 61"].geometry}
                  material={materials.Green}
                  castShadow
                  receiveShadow
                  position={[-121.73, -20.14, -14.83]}
                  rotation={[-Math.PI / 2, -1.56, -1.65]}
                  scale={1}
                />
                <mesh
                  name="Cube 72"
                  geometry={nodes["Cube 72"].geometry}
                  material={materials.Green}
                  castShadow
                  receiveShadow
                  position={[20.62, -15.19, -117.12]}
                  rotation={[3.14, 0.01, 2.9]}
                  scale={1}
                />
                <mesh
                  name="Cube 52"
                  geometry={nodes["Cube 52"].geometry}
                  material={materials.Green}
                  castShadow
                  receiveShadow
                  position={[-23.45, -11.8, 118.51]}
                  rotation={[0, 0, -0.33]}
                />
                <mesh
                  name="Sphere"
                  geometry={nodes.Sphere.geometry}
                  material={materials.Wood}
                  castShadow
                  receiveShadow
                  position={[-1.67, -17.3, -2.46]}
                  rotation={[0, 0, Math.PI]}
                />
              </group>
              <mesh
                name="Cylinder 24"
                geometry={nodes["Cylinder 24"].geometry}
                material={materials.Floor}
                castShadow
                receiveShadow
                position={[-1.07, -6.98, 0.03]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 0.14, 1]}
              />
            </group>
            <group
              name="Succulent1"
              position={[166.83, -37.95, 39.65]}
              scale={0.16}
            >
              <mesh
                name="Cube 73"
                geometry={nodes["Cube 73"].geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[116.2, -31.87, 17.4]}
                rotation={[1.41, 1.5, -1.49]}
                scale={1}
              />
              <mesh
                name="Cube 62"
                geometry={nodes["Cube 62"].geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[-121.73, -20.14, -14.83]}
                rotation={[-Math.PI / 2, -1.56, -1.65]}
                scale={1}
              />
              <mesh
                name="Cube 74"
                geometry={nodes["Cube 74"].geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[20.62, -15.19, -117.12]}
                rotation={[3.14, 0.01, 2.9]}
                scale={1}
              />
              <mesh
                name="Cube 53"
                geometry={nodes["Cube 53"].geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[-23.45, -11.8, 118.51]}
                rotation={[0, 0, -0.33]}
              />
              <mesh
                name="Sphere 2"
                geometry={nodes["Sphere 2"].geometry}
                material={materials.Wood}
                castShadow
                receiveShadow
                position={[-93.37, 361.17, 674.73]}
                rotation={[0, 0, Math.PI]}
              />
              <mesh
                name="Sphere1"
                geometry={nodes.Sphere1.geometry}
                material={materials.Wood}
                castShadow
                receiveShadow
                position={[-1.67, -17.3, -2.46]}
                rotation={[0, 0, Math.PI]}
              />
            </group>
            <mesh
              name="Cube 35"
              geometry={nodes["Cube 35"].geometry}
              material={materials["Cube 35 Material"]}
              castShadow
              receiveShadow
              position={[184.27, -54.94, 46.29]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.45, 0.49, 1.29]}
            />
            <mesh
              name="Cube 2"
              geometry={nodes["Cube 2"].geometry}
              material={materials["Cube 2 Material"]}
              castShadow
              receiveShadow
              position={[184.27, -54.94, -46.31]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.45, 0.49, 1.29]}
            />
            <mesh
              name="Cube 36"
              geometry={nodes["Cube 36"].geometry}
              material={materials["Cube 36 Material"]}
              castShadow
              receiveShadow
              position={[162.78, -54.94, 46.29]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.45, 0.49, 1.29]}
            />
            <mesh
              name="Cube3"
              geometry={nodes.Cube3.geometry}
              material={materials["Cube3 Material"]}
              castShadow
              receiveShadow
              position={[162.78, -54.94, -46.31]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.45, 0.49, 1.29]}
            />
            <group
              name="Box 2"
              position={[152.83, -125.31, 194]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.43, 0.38, 0.38]}
            >
              <mesh
                name="Cube 210"
                geometry={nodes["Cube 210"].geometry}
                material={materials.Cardboard}
                castShadow
                receiveShadow
                position={[0, 28.27, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1.12, 1, 0.29]}
              />
              <mesh
                name="Cube4"
                geometry={nodes.Cube4.geometry}
                material={materials.Cardboard}
                castShadow
                receiveShadow
                position={[0.77, -4.34, -0.24]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1.1, 1, 1]}
              />
            </group>
            <group
              name="Box 4"
              position={[150.83, -64.54, 194.04]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.3, 0.2, 0.23]}
            >
              <mesh
                name="Cube 211"
                geometry={nodes["Cube 211"].geometry}
                material={materials.Cardboard}
                castShadow
                receiveShadow
                position={[0, 28.27, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1.12, 1, 0.29]}
              />
              <mesh
                name="Cube5"
                geometry={nodes.Cube5.geometry}
                material={materials.Cardboard}
                castShadow
                receiveShadow
                position={[0.77, -4.34, -0.24]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1.1, 1, 1]}
              />
            </group>
            <group
              name="Box 3"
              position={[150.83, -82.14, 194.04]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.34, 0.26, 0.34]}
            >
              <mesh
                name="Cube 212"
                geometry={nodes["Cube 212"].geometry}
                material={materials.Cardboard}
                castShadow
                receiveShadow
                position={[0, 28.27, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1.12, 1, 0.29]}
              />
              <mesh
                name="Cube6"
                geometry={nodes.Cube6.geometry}
                material={materials.Cardboard}
                castShadow
                receiveShadow
                position={[0.77, -4.34, -0.24]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1.1, 1, 1]}
              />
            </group>
            <group
              name="Box"
              position={[150.93, -129.49, 160.47]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.34, 0.26, 0.34]}
            >
              <mesh
                name="Cube 213"
                geometry={nodes["Cube 213"].geometry}
                material={materials.Cardboard}
                castShadow
                receiveShadow
                position={[0, 28.27, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1.12, 1, 0.29]}
              />
              <mesh
                name="Cube7"
                geometry={nodes.Cube7.geometry}
                material={materials.Cardboard}
                castShadow
                receiveShadow
                position={[0.77, -4.34, -0.24]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1.1, 1, 1]}
              />
            </group>
            <Shelves />
            <mesh
              name="Ellipse"
              geometry={nodes.Ellipse.geometry}
              material={materials.Oak}
              castShadow
              receiveShadow
              position={[-6.24, -157.25, 2.96]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={1}
            />
            <Floor />
            <Workspace ref={monitorRef} />
          </group>

          <hemisphereLight
            name="Default Ambient Light"
            intensity={2.75}
            color="#fee8e8"
          />
        </scene>
      </group>
    </AssetsContext.Provider>
  );
});

export default Scene;
