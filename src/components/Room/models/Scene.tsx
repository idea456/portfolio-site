import React, { useRef, useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";
import useSpline from "@splinetool/r3f-spline";
import * as _ from "lodash";
import gsap from "gsap";
import loadable from "@loadable/component";

const LazyFloor = loadable(() => import("./Floor"));
const LazyKeyboard = loadable(() => import("./Keyboard"));
const LazyWorkspace = loadable(() => import("./Workspace"));
const LazyShelves = loadable(() => import("./Shelves"));
const LazyWalls = loadable(() => import("./Walls"));

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

const Scene = () => {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/CxxKW4WaE4Skxb1b/scene.splinecode"
  );
  const monitorRef = useRef(null);
  const roomRef = useRef(null);

  const tlRef = React.useRef<GSAPTimeline | null>(null);
  const { camera } = useThree();

  const transitionCameraToWorkspace = () => {
    // @ts-expect-error Monitor is not initialized
    const monitorPosition = monitorRef?.current.position;

    if (tlRef?.current) {
      tlRef?.current
        .to(camera.position, {
          x: monitorPosition.x - 110,
          y: monitorPosition.y + 170,
          z: monitorPosition.z - 60,
          duration: 2,
          ease: "power4.out",
        })
        .to(
          camera.rotation,
          {
            x: 0,
            y: -0.8,
            z: 0,
            ease: "power4.out",
            duration: 2,
          },
          "-=2"
        );
    }
  };

  const transitionCameraToMainScene = () => {
    if (tlRef?.current) {
      tlRef?.current.clear();
      tlRef?.current
        .to(camera.position, {
          x: -1000,
          y: 300,
          z: 0,
          duration: 2,
          ease: "power4.out",
        })
        .to(
          camera.rotation,
          {
            x: -1.5707963267948974,
            y: -1.27933953231703,
            z: -1.5707963267948974,
            ease: "power4.out",
            duration: 2,
          },
          "-=2"
        );
    }
  };

  const throttledTransitionCameraToWorkspace = _.throttle(
    transitionCameraToWorkspace,
    1000,
    {
      trailing: false,
    }
  );
  const throttledTransitionCameraToMainScene = _.throttle(
    transitionCameraToMainScene,
    1000,
    {
      trailing: false,
    }
  );

  useLayoutEffect(() => {
    tlRef.current = gsap.timeline({});
    window.addEventListener("wheel", throttledTransitionCameraToWorkspace);
    window.addEventListener("keydown", (listener) => {
      if (listener.key === "Escape") {
        throttledTransitionCameraToMainScene();
      }
    });
    window.addEventListener("transition-main-scene", () => {
      transitionCameraToMainScene();
    });
    window.addEventListener("transition-to-workspace", () => {
      transitionCameraToWorkspace();
    });
  }, []);

  return (
    <AssetsContext.Provider value={{ nodes, materials }}>
      <color attach="background" args={["#fefaed"]} />
      <group
        dispose={null}
        rotation={[0, Math.PI + 0.8, 0]}
        ref={roomRef}
        position={[0, 0, 100]}
      >
        <scene name="Scene 1">
          <group
            name="Lamp"
            position={[19.63, 84.44, -135.97]}
            rotation={[0, 0.46, 0]}
            scale={0.97}
          >
            <mesh
              name="Cylinder 3"
              geometry={nodes["Cylinder 3"].geometry}
              material={materials["Cylinder 3 Material"]}
              castShadow
              receiveShadow
              position={[-5.16, 16.36, -0.65]}
              rotation={[Math.PI / 2, 0.56, -Math.PI / 2]}
              scale={[0.2, 0.17, 0.2]}
            />
            <mesh
              name="Cylinder 2"
              geometry={nodes["Cylinder 2"].geometry}
              material={materials["Cylinder 2 Material"]}
              castShadow
              receiveShadow
              position={[13.79, -6.16, -0.57]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.2, 0.24, 0.2]}
            />
            <mesh
              name="Cylinder"
              geometry={nodes.Cylinder.geometry}
              material={materials["Cylinder Material"]}
              castShadow
              receiveShadow
              position={[12.18, -36.81, 1.06]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1, 0.13, 1]}
            />
          </group>
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
                material={materials["Cube Material"]}
                castShadow
                receiveShadow
                position={[46.2, -124.61, 7.27]}
                rotation={[0, 0, -1.75]}
                scale={1.28}
              />
              <mesh
                name="Cylinder 21"
                geometry={nodes["Cylinder 21"].geometry}
                material={materials["Cylinder 21 Material"]}
                castShadow
                receiveShadow
                position={[-89.13, -155.17, 5.27]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={1.28}
              />
              <mesh
                name="Cylinder1"
                geometry={nodes.Cylinder1.geometry}
                material={materials["Cylinder1 Material"]}
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
                material={materials["d Material"]}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[-1.94, -1.51, 2.72]}
                scale={[0.72, 0.09, 0.72]}
              />
              <mesh
                name="Cylinder2"
                geometry={nodes.Cylinder2.geometry}
                material={materials["Cylinder2 Material"]}
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
            <LazyWalls />
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
            <LazyKeyboard />
            <group
              name="Speaker"
              position={[148.92, -81.35, 156.73]}
              scale={[0.15, 0.13, 0.15]}
            >
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
                name="Cube 69"
                geometry={nodes["Cube 69"].geometry}
                material={materials["Cube 69 Material"]}
                castShadow
                receiveShadow
                position={[0.44, 4.64, 0.64]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.39, 0.72, 3.62]}
              />
              <mesh
                name="Cube 54"
                geometry={nodes["Cube 54"].geometry}
                material={materials["Cube 54 Material"]}
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
              name="Cube 81"
              geometry={nodes["Cube 81"].geometry}
              material={materials["Cube 81 Material"]}
              castShadow
              receiveShadow
              position={[150.31, -19.36, 206.91]}
              rotation={[1.91, 0, Math.PI / 2]}
              scale={[1, 0.72, 3.81]}
            />
            <group name="Succuelent" position={[153.86, 21.24, 153.05]}>
              <group
                name="Succulent1 3"
                position={[1.14, 0.07, 0.82]}
                scale={0.16}
              >
                <mesh
                  name="Cube 75"
                  geometry={nodes["Cube 75"].geometry}
                  material={materials.Green}
                  castShadow
                  receiveShadow
                  position={[116.2, -31.87, 17.4]}
                  rotation={[1.41, 1.5, -1.49]}
                  scale={1}
                />
                <mesh
                  name="Cube 610"
                  geometry={nodes["Cube 610"].geometry}
                  material={materials.Green}
                  castShadow
                  receiveShadow
                  position={[-121.73, -20.14, -14.83]}
                  rotation={[-Math.PI / 2, -1.56, -1.65]}
                  scale={1}
                />
                <mesh
                  name="Cube 76"
                  geometry={nodes["Cube 76"].geometry}
                  material={materials.Green}
                  castShadow
                  receiveShadow
                  position={[20.62, -15.19, -117.12]}
                  rotation={[3.14, 0.01, 2.9]}
                  scale={1}
                />
                <mesh
                  name="Cube 55"
                  geometry={nodes["Cube 55"].geometry}
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
                name="Cylinder3"
                geometry={nodes.Cylinder3.geometry}
                material={materials.Floor}
                castShadow
                receiveShadow
                position={[11.36, -65.85, -113.37]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 0.14, 1]}
              />
              <mesh
                name="Cylinder 23"
                geometry={nodes["Cylinder 23"].geometry}
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
              position={[165.06, -37.05, 40.18]}
              scale={0.16}
            >
              <mesh
                name="Cube 710"
                geometry={nodes["Cube 710"].geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[116.2, -31.87, 17.4]}
                rotation={[1.41, 1.5, -1.49]}
                scale={1}
              />
              <mesh
                name="Cube 611"
                geometry={nodes["Cube 611"].geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[-121.73, -20.14, -14.83]}
                rotation={[-Math.PI / 2, -1.56, -1.65]}
                scale={1}
              />
              <mesh
                name="Cube 711"
                geometry={nodes["Cube 711"].geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[20.62, -15.19, -117.12]}
                rotation={[3.14, 0.01, 2.9]}
                scale={1}
              />
              <mesh
                name="Cube 56"
                geometry={nodes["Cube 56"].geometry}
                material={materials.Green}
                castShadow
                receiveShadow
                position={[-23.45, -11.8, 118.51]}
                rotation={[0, 0, -0.33]}
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
              name="Cube 2"
              geometry={nodes["Cube 2"].geometry}
              material={materials["Cube 2 Material"]}
              castShadow
              receiveShadow
              position={[184.27, -54.94, -46.31]}
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
                name="Cube 22"
                geometry={nodes["Cube 22"].geometry}
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
              name="Box 4"
              position={[150.83, -64.54, 194.04]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.3, 0.2, 0.23]}
            >
              <mesh
                name="Cube 23"
                geometry={nodes["Cube 23"].geometry}
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
              name="Box 3"
              position={[150.83, -82.14, 194.04]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.34, 0.26, 0.34]}
            >
              <mesh
                name="Cube 24"
                geometry={nodes["Cube 24"].geometry}
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
            <group
              name="Box"
              position={[150.93, -129.49, 160.47]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.34, 0.26, 0.34]}
            >
              <mesh
                name="Cube 25"
                geometry={nodes["Cube 25"].geometry}
                material={materials.Cardboard}
                castShadow
                receiveShadow
                position={[0, 28.27, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1.12, 1, 0.29]}
              />
              <mesh
                name="Cube8"
                geometry={nodes.Cube8.geometry}
                material={materials.Cardboard}
                castShadow
                receiveShadow
                position={[0.77, -4.34, -0.24]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1.1, 1, 1]}
              />
            </group>
            <LazyShelves />
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
            <LazyFloor />
            <LazyWorkspace ref={monitorRef} />
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
};

export default Scene;