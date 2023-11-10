import React, { useImperativeHandle, useRef } from "react";
import useSpline from "@splinetool/r3f-spline";
import { Html, useBounds } from "@react-three/drei";

const Scene = React.forwardRef((props, ref) => {
    const { nodes, materials } = useSpline(
        "https://prod.spline.design/CxxKW4WaE4Skxb1b/scene.splinecode",
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
        <>
            <color attach='background' args={["#fefaed"]} />
            <group
                {...props}
                dispose={null}
                rotation={[0, Math.PI + 0.8, 0]}
                ref={roomRef}
            >
                <scene name='Scene 1'>
                    <group
                        name='Lamp'
                        position={[11.53, 85.77, -126.03]}
                        rotation={[0, 0.58, 0]}
                    >
                        <mesh
                            name='Cylinder 3'
                            geometry={nodes["Cylinder 3"].geometry}
                            material={materials.white}
                            castShadow
                            receiveShadow
                            position={[-5.16, 16.36, -0.65]}
                            rotation={[Math.PI / 2, 0.56, -Math.PI / 2]}
                            scale={[0.2, 0.17, 0.2]}
                        />
                        <mesh
                            name='Cylinder 2'
                            geometry={nodes["Cylinder 2"].geometry}
                            material={materials.white}
                            castShadow
                            receiveShadow
                            position={[13.79, -6.16, -0.57]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={[0.2, 0.24, 0.2]}
                        />
                        <mesh
                            name='Cylinder'
                            geometry={nodes.Cylinder.geometry}
                            material={materials.white}
                            castShadow
                            receiveShadow
                            position={[12.18, -36.81, 1.06]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={[1, 0.13, 1]}
                        />
                    </group>
                    <directionalLight
                        name='Directional Light'
                        castShadow
                        intensity={2.05}
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
                        name='Room'
                        position={[-160.96, 111, -47.76]}
                        rotation={[0, -0.03, 0]}
                        scale={1}
                    >
                        <group
                            name='cd-4'
                            position={[152.69, 18.52, 184.33]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={0.12}
                        >
                            <mesh
                                name='Cube'
                                geometry={nodes.Cube.geometry}
                                material={materials.black}
                                castShadow
                                receiveShadow
                                position={[46.2, -124.61, 7.27]}
                                rotation={[0, 0, -1.75]}
                                scale={1.28}
                            />
                            <mesh
                                name='Cylinder 21'
                                geometry={nodes["Cylinder 21"].geometry}
                                material={materials.black}
                                castShadow
                                receiveShadow
                                position={[-89.13, -155.17, 5.27]}
                                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                                scale={1.28}
                            />
                            <mesh
                                name='Cylinder1'
                                geometry={nodes.Cylinder1.geometry}
                                material={materials.black}
                                castShadow
                                receiveShadow
                                position={[86.56, -127.47, 7.09]}
                                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                                scale={1.28}
                            />
                            <mesh
                                name='Rectangle 2'
                                geometry={nodes["Rectangle 2"].geometry}
                                material={materials["Rectangle 2 Material"]}
                                castShadow
                                receiveShadow
                                position={[4.53, -22.14, -42.46]}
                                rotation={[0, 0, -Math.PI / 2]}
                                scale={1.28}
                            />
                            <mesh
                                name='d'
                                geometry={nodes.d.geometry}
                                material={materials["pink-light"]}
                                castShadow
                                receiveShadow
                                position={[0, 0, 0]}
                                rotation={[-1.94, -1.51, 2.72]}
                                scale={[0.72, 0.09, 0.72]}
                            />
                            <mesh
                                name='Cylinder2'
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
                            name='Plant'
                            position={[164.99, -93.1, -149.69]}
                            rotation={[0, -0.73, 0]}
                            scale={1.2}
                        >
                            <mesh
                                name='Cylinder 31'
                                geometry={nodes["Cylinder 31"].geometry}
                                material={materials.white}
                                castShadow
                                receiveShadow
                                position={[0, -36.62, -1.27]}
                                rotation={[0, Math.PI / 2, 0]}
                                scale={0.89}
                            />
                            <mesh
                                name='Cylinder 6'
                                geometry={nodes["Cylinder 6"].geometry}
                                material={materials.Green}
                                castShadow
                                receiveShadow
                                position={[-0.43, 1.68, -12.29]}
                                rotation={[-0.28, 1.06, 3.04]}
                                scale={0.42}
                            />
                            <mesh
                                name='Cylinder 8'
                                geometry={nodes["Cylinder 8"].geometry}
                                material={materials.Green}
                                castShadow
                                receiveShadow
                                position={[-3.46, -8.54, 12.03]}
                                rotation={[-2.62, 1.24, 0]}
                                scale={0.42}
                            />
                            <mesh
                                name='Cylinder 9'
                                geometry={nodes["Cylinder 9"].geometry}
                                material={materials.Green}
                                castShadow
                                receiveShadow
                                position={[4.53, -8.73, -14.12]}
                                rotation={[-0.33, 0.34, 2.99]}
                                scale={0.42}
                            />
                            <mesh
                                name='Cylinder 7'
                                geometry={nodes["Cylinder 7"].geometry}
                                material={materials.Green}
                                castShadow
                                receiveShadow
                                position={[-4.63, 3.16, 6.13]}
                                rotation={[-2.98, Math.PI / 2, 0]}
                                scale={0.42}
                            />
                            <mesh
                                name='Cylinder 5'
                                geometry={nodes["Cylinder 5"].geometry}
                                material={materials.Green}
                                castShadow
                                receiveShadow
                                position={[-4.63, 8.43, -4.24]}
                                rotation={[3.05, Math.PI / 2, 0]}
                                scale={0.42}
                            />
                            <mesh
                                name='Cylinder 22'
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
                            name='Walls'
                            position={[6.69, 26.05, 23.99]}
                            rotation={[-Math.PI, -0.03, -Math.PI]}
                            scale={1.73}
                        >
                            <group
                                name='Floor'
                                position={[-0.5, -108.13, 2.68]}
                                rotation={[0, 0, 0]}
                                scale={1}
                            >
                                <mesh
                                    name='Concrete'
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
                                name='Cube 79'
                                geometry={nodes["Cube 79"].geometry}
                                material={materials["Cube 79 Material"]}
                                castShadow
                                receiveShadow
                                position={[-102.18, 48.97, -88.08]}
                                rotation={[1.54, 1.05, -1.54]}
                                scale={1}
                            />
                            <mesh
                                name='Cube 78'
                                geometry={nodes["Cube 78"].geometry}
                                material={materials["Cube 78 Material"]}
                                castShadow
                                receiveShadow
                                position={[-105.32, 49.01, 86.42]}
                                rotation={[1.54, 1.05, -1.54]}
                                scale={1}
                            />
                            <mesh
                                name='Cube 77'
                                geometry={nodes["Cube 77"].geometry}
                                material={materials["Cube 77 Material"]}
                                castShadow
                                receiveShadow
                                position={[-139.31, -71.16, -9.04]}
                                rotation={[0, 1.55, 0]}
                            />
                            <mesh
                                name='Shape'
                                geometry={nodes.Shape.geometry}
                                material={materials.orange}
                                castShadow
                                receiveShadow
                                position={[135.82, -105.6, -130.96]}
                                rotation={[0, -0.02, 0]}
                                scale={1}
                            />
                            <mesh
                                name='Wall'
                                geometry={nodes.Wall.geometry}
                                material={materials.orange}
                                castShadow
                                receiveShadow
                                position={[135.5, -105.6, -114.31]}
                                rotation={[0, -0.02, 0]}
                                scale={1}
                            />
                            <mesh
                                name='Cube 5'
                                geometry={nodes["Cube 5"].geometry}
                                material={materials["Cube 5 Material"]}
                                castShadow
                                receiveShadow
                                position={[-68.8, 101.1, 13.19]}
                                rotation={[1.54, 1.05, 0.03]}
                                scale={1}
                            />
                            <mesh
                                name='Cube 4'
                                geometry={nodes["Cube 4"].geometry}
                                material={materials["Cube 4 Material"]}
                                castShadow
                                receiveShadow
                                position={[-97.09, 49.1, -80.4]}
                                rotation={[1.54, 1.05, -1.54]}
                            />
                            <mesh
                                name='Cube 3'
                                geometry={nodes["Cube 3"].geometry}
                                material={materials["Cube 3 Material"]}
                                castShadow
                                receiveShadow
                                position={[-100.45, 48.2, 87.31]}
                                rotation={[1.54, 1.05, -1.54]}
                            />
                            <mesh
                                name='Cube 7'
                                geometry={nodes["Cube 7"].geometry}
                                material={materials["Cube 7 Material"]}
                                castShadow
                                receiveShadow
                                position={[-95.78, -61.45, -118.4]}
                                rotation={[0, -0.02, 0]}
                                scale={[1, 1, 0.64]}
                            />
                            <mesh
                                name='Cube1'
                                geometry={nodes.Cube1.geometry}
                                material={materials["Cube1 Material"]}
                                castShadow
                                receiveShadow
                                position={[-133.77, -61.45, -0.44]}
                                rotation={[0, 1.55, 0]}
                            />
                        </group>
                        <group
                            name='Case'
                            position={[161.75, -34.62, 88.37]}
                            rotation={[0, -0.02, 0]}
                            scale={1}
                        >
                            <mesh
                                name='Plane'
                                geometry={nodes.Plane.geometry}
                                material={materials["Plane Material"]}
                                castShadow
                                receiveShadow
                                position={[-27.37, -0.04, 0.26]}
                                rotation={[0, -1.55, 0]}
                                scale={[0.97, 1, 1.14]}
                            />
                            <mesh
                                name='Cube2'
                                geometry={nodes.Cube2.geometry}
                                material={materials.Wall}
                                castShadow
                                receiveShadow
                                position={[0.16, 0, 0]}
                                rotation={[-Math.PI / 2, 0, -1.55]}
                                scale={[0.84, 1, 1.45]}
                            />
                        </group>
                        <group
                            name='Keyboard'
                            position={[115.57, -61.37, -0.31]}
                            scale={0.21}
                        >
                            <mesh
                                name='Cube 33'
                                geometry={nodes["Cube 33"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-52.94, 10.97, 10.53]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1, 0.63]}
                            />
                            <mesh
                                name='Cube 27'
                                geometry={nodes["Cube 27"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[23.67, 17.19, 115.74]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 30'
                                geometry={nodes["Cube 30"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-25.53, 17.19, 2.09]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 29'
                                geometry={nodes["Cube 29"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-0.87, 17.19, -4.05]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 26'
                                geometry={nodes["Cube 26"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[23.65, 17.19, -12.2]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 23'
                                geometry={nodes["Cube 23"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[48.99, 17.19, 155.21]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 31'
                                geometry={nodes["Cube 31"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-0.24, 16.59, 140.62]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 2.28, 1]}
                            />
                            <mesh
                                name='Cube 28'
                                geometry={nodes["Cube 28"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[23.92, 16.59, 147.39]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.66, 1]}
                            />
                            <mesh
                                name='Cube 301'
                                geometry={nodes["Cube 301"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-25.36, 17.19, 106.21]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 291'
                                geometry={nodes["Cube 291"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-0.7, 17.19, 100.07]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 271'
                                geometry={nodes["Cube 271"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[23.82, 17.19, 91.91]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 302'
                                geometry={nodes["Cube 302"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-25.37, 17.19, -23.04]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 292'
                                geometry={nodes["Cube 292"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-0.72, 17.19, -29.18]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 261'
                                geometry={nodes["Cube 261"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[23.81, 17.19, -37.33]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 22'
                                geometry={nodes["Cube 22"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[49.15, 17.19, 131.38]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 25'
                                geometry={nodes["Cube 25"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[49.23, 17.19, 0.97]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 24'
                                geometry={nodes["Cube 24"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[49.23, 17.19, -78.13]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 20'
                                geometry={nodes["Cube 20"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[49.23, 17.19, -78.13]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 19'
                                geometry={nodes["Cube 19"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-52.37, 17.19, -77.72]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 303'
                                geometry={nodes["Cube 303"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-25.68, 17.19, 80.13]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 293'
                                geometry={nodes["Cube 293"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-1.02, 17.19, 73.99]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 272'
                                geometry={nodes["Cube 272"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[23.5, 17.19, 65.84]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 304'
                                geometry={nodes["Cube 304"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-25.7, 17.19, -47.81]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 294'
                                geometry={nodes["Cube 294"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-1.04, 17.19, -53.95]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 262'
                                geometry={nodes["Cube 262"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[23.49, 17.19, -62.11]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 221'
                                geometry={nodes["Cube 221"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[48.83, 17.19, 105.31]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 251'
                                geometry={nodes["Cube 251"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[48.91, 17.19, -25.11]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 241'
                                geometry={nodes["Cube 241"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[48.91, 17.19, -104.21]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 201'
                                geometry={nodes["Cube 201"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[48.91, 17.19, -104.21]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 34'
                                geometry={nodes["Cube 34"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-52.7, 17.19, 152.14]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 18'
                                geometry={nodes["Cube 18"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-52.7, 17.19, -103.79]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 305'
                                geometry={nodes["Cube 305"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-25.51, 17.19, 54.37]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 295'
                                geometry={nodes["Cube 295"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-0.86, 17.19, 48.23]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 273'
                                geometry={nodes["Cube 273"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[23.67, 17.19, 40.08]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 306'
                                geometry={nodes["Cube 306"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-25.53, 17.19, -73.58]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 296'
                                geometry={nodes["Cube 296"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-0.87, 17.19, -79.71]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 263'
                                geometry={nodes["Cube 263"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[23.65, 17.19, -87.87]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 222'
                                geometry={nodes["Cube 222"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[48.99, 17.19, 79.54]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 242'
                                geometry={nodes["Cube 242"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[49.08, 17.19, -129.97]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 202'
                                geometry={nodes["Cube 202"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[49.08, 17.19, -129.97]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 341'
                                geometry={nodes["Cube 341"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-52.53, 17.19, 126.38]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 17'
                                geometry={nodes["Cube 17"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-52.53, 17.19, -129.55]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 307'
                                geometry={nodes["Cube 307"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-25.38, 17.19, 28.54]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 297'
                                geometry={nodes["Cube 297"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-0.73, 17.19, 22.4]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 274'
                                geometry={nodes["Cube 274"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[23.8, 17.19, 14.24]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 308'
                                geometry={nodes["Cube 308"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-25.4, 17.19, -99.41]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 298'
                                geometry={nodes["Cube 298"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-0.74, 17.19, -105.55]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 264'
                                geometry={nodes["Cube 264"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[23.78, 17.19, -113.7]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 223'
                                geometry={nodes["Cube 223"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[49.12, 17.19, 53.71]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 252'
                                geometry={nodes["Cube 252"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[49.04, 17.19, 27.73]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 21'
                                geometry={nodes["Cube 21"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[49.04, 17.19, -51.37]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 203'
                                geometry={nodes["Cube 203"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[49.2, 17.19, -155.8]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 342'
                                geometry={nodes["Cube 342"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-52.4, 17.19, 100.55]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 16'
                                geometry={nodes["Cube 16"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-52.4, 17.19, -155.39]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.08, 1]}
                            />
                            <mesh
                                name='Cube 15'
                                geometry={nodes["Cube 15"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-26.86, 17.19, -140.42]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 2.47, 1]}
                            />
                            <mesh
                                name='Cube 32'
                                geometry={nodes["Cube 32"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-23.4, 13.19, 141.93]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.95, 1]}
                            />
                            <mesh
                                name='Cube 14'
                                geometry={nodes["Cube 14"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[-1.78, 17.19, -143.82]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 2.22, 1]}
                            />
                            <mesh
                                name='Cube 13'
                                geometry={nodes["Cube 13"].geometry}
                                material={materials["Keyboard Keys"]}
                                castShadow
                                receiveShadow
                                position={[23.64, 17.19, -148.07]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1, 1.88, 1]}
                            />
                            <mesh
                                name='Cube 11'
                                geometry={nodes["Cube 11"].geometry}
                                material={materials["Cube 11 Material"]}
                                castShadow
                                receiveShadow
                                position={[0, -3.33, 0]}
                                scale={[0.74, 0.16, 1.01]}
                            />
                        </group>
                        <group
                            name='Speaker'
                            position={[148.92, -81.35, 156.73]}
                            scale={[0.15, 0.13, 0.15]}
                        >
                            <mesh
                                name='Plane 2'
                                geometry={nodes["Plane 2"].geometry}
                                material={materials["Plane 2 Material"]}
                                castShadow
                                receiveShadow
                                position={[-73.13, -3.79, 2.77]}
                                rotation={[0, -Math.PI / 2, 0]}
                            />
                            <mesh
                                name='Cube 12'
                                geometry={nodes["Cube 12"].geometry}
                                material={materials["Cube 12 Material"]}
                                castShadow
                                receiveShadow
                                position={[-67.21, 3.84, 5.49]}
                                rotation={[0, -Math.PI / 2, 0]}
                                scale={[1, 1, 1.24]}
                            />
                            <mesh
                                name='Cube 111'
                                geometry={nodes["Cube 111"].geometry}
                                material={materials["Cube 111 Material"]}
                                castShadow
                                receiveShadow
                            />
                        </group>
                        <group name='Group' position={[150.3, -32.23, 157.97]}>
                            <mesh
                                name='Cube 6'
                                geometry={nodes["Cube 6"].geometry}
                                material={materials["Cube 6 Material"]}
                                castShadow
                                receiveShadow
                                position={[0.44, 4.64, 0.64]}
                                rotation={[0, 0, Math.PI / 2]}
                                scale={[0.39, 0.72, 3.62]}
                            />
                            <mesh
                                name='Cube 51'
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
                            name='Cube 10'
                            geometry={nodes["Cube 10"].geometry}
                            material={materials["Cube 10 Material"]}
                            castShadow
                            receiveShadow
                            position={[146.44, -22.05, 188.1]}
                            rotation={[1.91, 0, Math.PI / 2]}
                            scale={[0.76, 0.72, 3.81]}
                        />
                        <mesh
                            name='Cube 9'
                            geometry={nodes["Cube 9"].geometry}
                            material={materials["Cube 9 Material"]}
                            castShadow
                            receiveShadow
                            position={[148.18, -21.69, 197.16]}
                            rotation={[1.91, 0, Math.PI / 2]}
                            scale={[0.76, 0.72, 3.81]}
                        />
                        <mesh
                            name='Cube 8'
                            geometry={nodes["Cube 8"].geometry}
                            material={materials["Cube 8 Material"]}
                            castShadow
                            receiveShadow
                            position={[150.31, -19.36, 206.91]}
                            rotation={[1.91, 0, Math.PI / 2]}
                            scale={[1, 0.72, 3.81]}
                        />
                        <group
                            name='Succulent1 2'
                            position={[151.85, 24.77, 155.33]}
                            scale={[-0.23, 0.23, 0.23]}
                        >
                            <mesh
                                name='Cylinder 32'
                                geometry={nodes["Cylinder 32"].geometry}
                                material={materials.Green}
                                castShadow
                                receiveShadow
                                position={[-1.55, 4.13, -43.91]}
                                rotation={[Math.PI, 0.74, -Math.PI]}
                                scale={[0.3, 1.72, 0.3]}
                            />
                            <mesh
                                name='Cylinder 23'
                                geometry={nodes["Cylinder 23"].geometry}
                                material={materials.Green}
                                castShadow
                                receiveShadow
                                position={[-13.18, 4.06, -32.22]}
                                rotation={[Math.PI, 0.74, -Math.PI]}
                                scale={[0.3, 0.69, 0.3]}
                            />
                            <mesh
                                name='Cylinder3'
                                geometry={nodes.Cylinder3.geometry}
                                material={materials.Green}
                                castShadow
                                receiveShadow
                                position={[4.12, 12.86, -29.45]}
                                rotation={[Math.PI, 0, -Math.PI]}
                                scale={[0.3, 0.69, 0.3]}
                            />
                            <mesh
                                name='Cylinder4'
                                geometry={nodes.Cylinder4.geometry}
                                material={materials.Floor}
                                castShadow
                                receiveShadow
                                position={[-2.93, -42.2, -32.94]}
                                rotation={[0, -Math.PI / 2, 0]}
                                scale={[0.39, 0.05, 0.39]}
                            />
                        </group>
                        <group
                            name='Succuelent'
                            position={[153.86, -18.3, 158.67]}
                        >
                            <group
                                name='Succulent1 3'
                                position={[1.14, 0.07, 0.82]}
                                scale={0.16}
                            >
                                <mesh
                                    name='Cube 71'
                                    geometry={nodes["Cube 71"].geometry}
                                    material={materials.Green}
                                    castShadow
                                    receiveShadow
                                    position={[116.2, -31.87, 17.4]}
                                    rotation={[1.41, 1.5, -1.49]}
                                    scale={1}
                                />
                                <mesh
                                    name='Cube 61'
                                    geometry={nodes["Cube 61"].geometry}
                                    material={materials.Green}
                                    castShadow
                                    receiveShadow
                                    position={[-121.73, -20.14, -14.83]}
                                    rotation={[-Math.PI / 2, -1.56, -1.65]}
                                    scale={1}
                                />
                                <mesh
                                    name='Cube 72'
                                    geometry={nodes["Cube 72"].geometry}
                                    material={materials.Green}
                                    castShadow
                                    receiveShadow
                                    position={[20.62, -15.19, -117.12]}
                                    rotation={[3.14, 0.01, 2.9]}
                                    scale={1}
                                />
                                <mesh
                                    name='Cube 52'
                                    geometry={nodes["Cube 52"].geometry}
                                    material={materials.Green}
                                    castShadow
                                    receiveShadow
                                    position={[-23.45, -11.8, 118.51]}
                                    rotation={[0, 0, -0.33]}
                                />
                                <mesh
                                    name='Sphere'
                                    geometry={nodes.Sphere.geometry}
                                    material={materials.Wood}
                                    castShadow
                                    receiveShadow
                                    position={[-1.67, -17.3, -2.46]}
                                    rotation={[0, 0, Math.PI]}
                                />
                            </group>
                            <mesh
                                name='Cylinder 24'
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
                            name='Succulent1'
                            position={[166.83, -37.95, 39.65]}
                            scale={0.16}
                        >
                            <mesh
                                name='Cube 73'
                                geometry={nodes["Cube 73"].geometry}
                                material={materials.Green}
                                castShadow
                                receiveShadow
                                position={[116.2, -31.87, 17.4]}
                                rotation={[1.41, 1.5, -1.49]}
                                scale={1}
                            />
                            <mesh
                                name='Cube 62'
                                geometry={nodes["Cube 62"].geometry}
                                material={materials.Green}
                                castShadow
                                receiveShadow
                                position={[-121.73, -20.14, -14.83]}
                                rotation={[-Math.PI / 2, -1.56, -1.65]}
                                scale={1}
                            />
                            <mesh
                                name='Cube 74'
                                geometry={nodes["Cube 74"].geometry}
                                material={materials.Green}
                                castShadow
                                receiveShadow
                                position={[20.62, -15.19, -117.12]}
                                rotation={[3.14, 0.01, 2.9]}
                                scale={1}
                            />
                            <mesh
                                name='Cube 53'
                                geometry={nodes["Cube 53"].geometry}
                                material={materials.Green}
                                castShadow
                                receiveShadow
                                position={[-23.45, -11.8, 118.51]}
                                rotation={[0, 0, -0.33]}
                            />
                            <mesh
                                name='Sphere 2'
                                geometry={nodes["Sphere 2"].geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[-93.37, 361.17, 674.73]}
                                rotation={[0, 0, Math.PI]}
                            />
                            <mesh
                                name='Sphere1'
                                geometry={nodes.Sphere1.geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[-1.67, -17.3, -2.46]}
                                rotation={[0, 0, Math.PI]}
                            />
                        </group>
                        <mesh
                            name='Cube 35'
                            geometry={nodes["Cube 35"].geometry}
                            material={materials["Cube 35 Material"]}
                            castShadow
                            receiveShadow
                            position={[184.27, -54.94, 46.29]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[0.45, 0.49, 1.29]}
                        />
                        <mesh
                            name='Cube 2'
                            geometry={nodes["Cube 2"].geometry}
                            material={materials["Cube 2 Material"]}
                            castShadow
                            receiveShadow
                            position={[184.27, -54.94, -46.31]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[0.45, 0.49, 1.29]}
                        />
                        <mesh
                            name='Cube 36'
                            geometry={nodes["Cube 36"].geometry}
                            material={materials["Cube 36 Material"]}
                            castShadow
                            receiveShadow
                            position={[162.78, -54.94, 46.29]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[0.45, 0.49, 1.29]}
                        />
                        <mesh
                            name='Cube3'
                            geometry={nodes.Cube3.geometry}
                            material={materials["Cube3 Material"]}
                            castShadow
                            receiveShadow
                            position={[162.78, -54.94, -46.31]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[0.45, 0.49, 1.29]}
                        />
                        <group
                            name='Box 2'
                            position={[152.83, -125.31, 194]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[0.43, 0.38, 0.38]}
                        >
                            <mesh
                                name='Cube 210'
                                geometry={nodes["Cube 210"].geometry}
                                material={materials.Cardboard}
                                castShadow
                                receiveShadow
                                position={[0, 28.27, 0]}
                                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                                scale={[1.12, 1, 0.29]}
                            />
                            <mesh
                                name='Cube4'
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
                            name='Box 4'
                            position={[150.83, -64.54, 194.04]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[0.3, 0.2, 0.23]}
                        >
                            <mesh
                                name='Cube 211'
                                geometry={nodes["Cube 211"].geometry}
                                material={materials.Cardboard}
                                castShadow
                                receiveShadow
                                position={[0, 28.27, 0]}
                                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                                scale={[1.12, 1, 0.29]}
                            />
                            <mesh
                                name='Cube5'
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
                            name='Box 3'
                            position={[150.83, -82.14, 194.04]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[0.34, 0.26, 0.34]}
                        >
                            <mesh
                                name='Cube 212'
                                geometry={nodes["Cube 212"].geometry}
                                material={materials.Cardboard}
                                castShadow
                                receiveShadow
                                position={[0, 28.27, 0]}
                                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                                scale={[1.12, 1, 0.29]}
                            />
                            <mesh
                                name='Cube6'
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
                            name='Box'
                            position={[150.93, -129.49, 160.47]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[0.34, 0.26, 0.34]}
                        >
                            <mesh
                                name='Cube 213'
                                geometry={nodes["Cube 213"].geometry}
                                material={materials.Cardboard}
                                castShadow
                                receiveShadow
                                position={[0, 28.27, 0]}
                                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                                scale={[1.12, 1, 0.29]}
                            />
                            <mesh
                                name='Cube7'
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
                            name='Shelves'
                            position={[153.25, -69.58, 172.98]}
                        >
                            <mesh
                                name='Rectangle 4'
                                geometry={nodes["Rectangle 4"].geometry}
                                material={materials.Oak}
                                castShadow
                                receiveShadow
                                position={[-0.26, -76.09, 1.62]}
                                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                                scale={[0.98, 1.12, 1]}
                            />
                            <mesh
                                name='Rectangle 3'
                                geometry={nodes["Rectangle 3"].geometry}
                                material={materials.Oak}
                                castShadow
                                receiveShadow
                                position={[-0.26, -28.67, 1.62]}
                                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                                scale={[0.98, 1.12, 1]}
                            />
                            <mesh
                                name='Rectangle 21'
                                geometry={nodes["Rectangle 21"].geometry}
                                material={materials.Oak}
                                castShadow
                                receiveShadow
                                position={[-0.26, 27.03, 1.62]}
                                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                                scale={[0.98, 1.12, 1]}
                            />
                            <mesh
                                name='Rectangle'
                                geometry={nodes.Rectangle.geometry}
                                material={materials.Oak}
                                castShadow
                                receiveShadow
                                position={[-0.26, 76.66, 1.62]}
                                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                                scale={[0.98, 1.12, 1]}
                            />
                            <mesh
                                name='Cube 121'
                                geometry={nodes["Cube 121"].geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[1.4, -81.06, 44.05]}
                                rotation={[0, Math.PI / 2, 0]}
                                scale={[0.28, 0.51, 0.33]}
                            />
                            <mesh
                                name='Cube 112'
                                geometry={nodes["Cube 112"].geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[1.4, -30.8, 44.05]}
                                rotation={[0, Math.PI / 2, 0]}
                                scale={[0.28, 0.51, 0.33]}
                            />
                            <mesh
                                name='Cube 101'
                                geometry={nodes["Cube 101"].geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[1.4, 23.41, 44.05]}
                                rotation={[0, Math.PI / 2, 0]}
                                scale={[0.28, 0.51, 0.33]}
                            />
                            <mesh
                                name='Cube 91'
                                geometry={nodes["Cube 91"].geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[1.4, 73.27, 44.05]}
                                rotation={[0, Math.PI / 2, 0]}
                                scale={[0.28, 0.51, 0.33]}
                            />
                            <mesh
                                name='Cube 122'
                                geometry={nodes["Cube 122"].geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[1.4, -81.06, -41.12]}
                                rotation={[0, Math.PI / 2, 0]}
                                scale={[0.28, 0.51, 0.33]}
                            />
                            <mesh
                                name='Cube 113'
                                geometry={nodes["Cube 113"].geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[1.4, -30.8, -41.12]}
                                rotation={[0, Math.PI / 2, 0]}
                                scale={[0.28, 0.51, 0.33]}
                            />
                            <mesh
                                name='Cube 102'
                                geometry={nodes["Cube 102"].geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[1.4, 23.41, -41.12]}
                                rotation={[0, Math.PI / 2, 0]}
                                scale={[0.28, 0.51, 0.33]}
                            />
                            <mesh
                                name='Cube 63'
                                geometry={nodes["Cube 63"].geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[1.4, 73.27, -41.12]}
                                rotation={[0, Math.PI / 2, 0]}
                                scale={[0.28, 0.51, 0.33]}
                            />
                            <mesh
                                name='Cube 81'
                                geometry={nodes["Cube 81"].geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[30.03, 0, 40.69]}
                                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                                scale={[0.52, 0.7, 1.19]}
                            />
                            <mesh
                                name='Cube 75'
                                geometry={nodes["Cube 75"].geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[30.03, 0, -41.73]}
                                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                                scale={[0.52, 0.7, 1.19]}
                            />
                            <mesh
                                name='Cube 82'
                                geometry={nodes["Cube 82"].geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[-30.03, 0, 40.69]}
                                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                                scale={[0.52, 0.7, 1.19]}
                            />
                            <mesh
                                name='Cube 54'
                                geometry={nodes["Cube 54"].geometry}
                                material={materials.Wood}
                                castShadow
                                receiveShadow
                                position={[-30.03, 0, -41.73]}
                                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                                scale={[0.52, 0.7, 1.19]}
                            />
                        </group>
                        <mesh
                            name='Ellipse'
                            geometry={nodes.Ellipse.geometry}
                            material={materials.Oak}
                            castShadow
                            receiveShadow
                            position={[-6.24, -157.25, 2.96]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={1}
                        />
                        <group
                            name='Floor1'
                            position={[9.61, -163.18, 22.37]}
                            scale={[0.95, 0.95, 0.88]}
                        >
                            <mesh
                                name='Shelf 6'
                                geometry={nodes["Shelf 6"].geometry}
                                material={materials["Shelf 6 Material"]}
                                castShadow
                                receiveShadow
                                position={[0, 0, 209.5]}
                                rotation={[-Math.PI, 0, -Math.PI]}
                                scale={[2.14, 0.5, 0.54]}
                            />
                            <mesh
                                name='Shelf 5'
                                geometry={nodes["Shelf 5"].geometry}
                                material={materials["Shelf 5 Material"]}
                                castShadow
                                receiveShadow
                                position={[0, 0, 114.03]}
                                rotation={[-Math.PI, 0, -Math.PI]}
                                scale={[2.14, 0.5, 0.54]}
                            />
                            <mesh
                                name='Shelf 4'
                                geometry={nodes["Shelf 4"].geometry}
                                material={materials["Shelf 4 Material"]}
                                castShadow
                                receiveShadow
                                position={[0, 0, -70.85]}
                                rotation={[-Math.PI, 0, -Math.PI]}
                                scale={[2.14, 0.5, 0.54]}
                            />
                            <mesh
                                name='Shelf 51'
                                geometry={nodes["Shelf 51"].geometry}
                                material={materials["Shelf 51 Material"]}
                                castShadow
                                receiveShadow
                                position={[0, 0, 21.79]}
                                rotation={[-Math.PI, 0, -Math.PI]}
                                scale={[2.14, 0.5, 0.54]}
                            />
                            <mesh
                                name='Shelf 3'
                                geometry={nodes["Shelf 3"].geometry}
                                material={materials["Shelf 3 Material"]}
                                castShadow
                                receiveShadow
                                position={[0, 0, -163.08]}
                                rotation={[-Math.PI, 0, -Math.PI]}
                                scale={[2.14, 0.5, 0.54]}
                            />
                            <mesh
                                name='Shelf 61'
                                geometry={nodes["Shelf 61"].geometry}
                                material={materials["Shelf 61 Material"]}
                                castShadow
                                receiveShadow
                                position={[0, 0, 163.08]}
                                rotation={[-Math.PI, 0, -Math.PI]}
                                scale={[2.14, 0.5, 0.54]}
                            />
                            <mesh
                                name='Shelf 52'
                                geometry={nodes["Shelf 52"].geometry}
                                material={materials["Shelf 52 Material"]}
                                castShadow
                                receiveShadow
                                position={[0, 0, 67.61]}
                                rotation={[-Math.PI, 0, -Math.PI]}
                                scale={[2.14, 0.5, 0.54]}
                            />
                            <mesh
                                name='Shelf 41'
                                geometry={nodes["Shelf 41"].geometry}
                                material={materials["Shelf 41 Material"]}
                                castShadow
                                receiveShadow
                                position={[0, 0, -117.27]}
                                rotation={[-Math.PI, 0, -Math.PI]}
                                scale={[2.14, 0.5, 0.54]}
                            />
                            <mesh
                                name='Shelf 53'
                                geometry={nodes["Shelf 53"].geometry}
                                material={materials["Shelf 53 Material"]}
                                castShadow
                                receiveShadow
                                position={[0, 0, -24.62]}
                                rotation={[-Math.PI, 0, -Math.PI]}
                                scale={[2.14, 0.5, 0.54]}
                            />
                            <mesh
                                name='Shelf 2'
                                geometry={nodes["Shelf 2"].geometry}
                                material={materials["Shelf 2 Material"]}
                                castShadow
                                receiveShadow
                                position={[0, 0, -209.5]}
                                rotation={[-Math.PI, 0, -Math.PI]}
                                scale={[2.14, 0.5, 0.54]}
                            />
                        </group>
                        <group
                            name='Workspace'
                            position={[149.77, -66.47, -2.22]}
                        >
                            <group
                                name='Cup'
                                position={[-13.74, 10.16, -82.71]}
                                rotation={[0, 0.61, 0]}
                                scale={0.27}
                            >
                                <mesh
                                    name='Cylinder5'
                                    geometry={nodes.Cylinder5.geometry}
                                    material={materials.Floor}
                                    castShadow
                                    receiveShadow
                                    position={[3.18, -27.42, -4.24]}
                                    rotation={[-Math.PI, -0.96, -Math.PI]}
                                    scale={[3.74, 0.52, 3.74]}
                                />
                                <mesh
                                    name='Torus'
                                    geometry={nodes.Torus.geometry}
                                    material={materials["Torus Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[-24.91, -1.64, -1.03]}
                                    rotation={[Math.PI, 0, -Math.PI / 2]}
                                    scale={[0.65, 0.58, 1]}
                                />
                                <mesh
                                    name='Ellipse1'
                                    geometry={nodes.Ellipse1.geometry}
                                    material={materials["Ellipse1 Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[9.45, 19.96, 1.07]}
                                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                                    scale={1}
                                />
                                <mesh
                                    name='Cylinder6'
                                    geometry={nodes.Cylinder6.geometry}
                                    material={materials["Cylinder6 Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[6.52, 0, -1.38]}
                                    rotation={[0, -Math.PI / 2, 0]}
                                />
                            </group>
                            <group
                                name='Monitor'
                                position={[22.64, 79.6, -0.03]}
                                scale={1.04}
                            >
                                <mesh
                                    name='Rectangle1'
                                    geometry={nodes.Rectangle1.geometry}
                                    material={materials["Rectangle1 Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[-46.26, -74.85, 1.96]}
                                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                                    scale={0.96}
                                />
                                <mesh
                                    name='Cube8'
                                    geometry={nodes.Cube8.geometry}
                                    material={materials.Metal}
                                    castShadow
                                    receiveShadow
                                    position={[6.39, -30.5, 2.44]}
                                    rotation={[0, Math.PI / 2, 0]}
                                    scale={[1, 0.78, 0.56]}
                                />
                                <mesh
                                    name='Cube9'
                                    geometry={nodes.Cube9.geometry}
                                    material={materials.Metal}
                                    castShadow
                                    receiveShadow
                                    position={[5, -55.43, 2.5]}
                                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                                    scale={[2.46, 0.65, 0.32]}
                                    ref={monitorRef}
                                />
                                <mesh
                                    name='Plane 21'
                                    geometry={nodes["Plane 21"].geometry}
                                    // material={materials["Plane 21 Material"]}
                                    position={[-3.57, 2.34, -0.26]}
                                    rotation={[0, -Math.PI / 2, 0]}
                                    scale={[1.01, 1.01, 1]}
                                    // ref={ref}
                                >
                                    <Html
                                        as='div'
                                        transform
                                        // position={[0, -1, 0]}
                                        scale={[3.2, 3.01, 3]}
                                    >
                                        <div
                                            style={{
                                                // width: "100vw",
                                                height: "100vh",
                                                background: "white",
                                                display: "grid",
                                                placeItems: "center",
                                                cursor: "default",
                                                padding: "0 30rem",
                                                overflow: "scroll",
                                            }}
                                        >
                                            <h1
                                                style={{
                                                    color: "black",
                                                    fontSize: 60,
                                                }}
                                            >
                                                こんにちは
                                            </h1>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Officia quo quaerat
                                                exercitationem excepturi, nemo
                                                impedit odio dicta? Rerum,
                                                labore ipsa, saepe natus totam
                                                eveniet quae, officia
                                                dignissimos esse perferendis
                                                ratione!
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Officia quo quaerat
                                                exercitationem excepturi, nemo
                                                impedit odio dicta? Rerum,
                                                labore ipsa, saepe natus totam
                                                eveniet quae, officia
                                                dignissimos esse perferendis
                                                ratione!
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Officia quo quaerat
                                                exercitationem excepturi, nemo
                                                impedit odio dicta? Rerum,
                                                labore ipsa, saepe natus totam
                                                eveniet quae, officia
                                                dignissimos esse perferendis
                                                ratione!
                                            </p>

                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Officia quo quaerat
                                                exercitationem excepturi, nemo
                                                impedit odio dicta? Rerum,
                                                labore ipsa, saepe natus totam
                                                eveniet quae, officia
                                                dignissimos esse perferendis
                                                ratione!
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Officia quo quaerat
                                                exercitationem excepturi, nemo
                                                impedit odio dicta? Rerum,
                                                labore ipsa, saepe natus totam
                                                eveniet quae, officia
                                                dignissimos esse perferendis
                                                ratione!
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Officia quo quaerat
                                                exercitationem excepturi, nemo
                                                impedit odio dicta? Rerum,
                                                labore ipsa, saepe natus totam
                                                eveniet quae, officia
                                                dignissimos esse perferendis
                                                ratione!
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Officia quo quaerat
                                                exercitationem excepturi, nemo
                                                impedit odio dicta? Rerum,
                                                labore ipsa, saepe natus totam
                                                eveniet quae, officia
                                                dignissimos esse perferendis
                                                ratione!
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Officia quo quaerat
                                                exercitationem excepturi, nemo
                                                impedit odio dicta? Rerum,
                                                labore ipsa, saepe natus totam
                                                eveniet quae, officia
                                                dignissimos esse perferendis
                                                ratione!
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Officia quo quaerat
                                                exercitationem excepturi, nemo
                                                impedit odio dicta? Rerum,
                                                labore ipsa, saepe natus totam
                                                eveniet quae, officia
                                                dignissimos esse perferendis
                                                ratione!
                                            </p>
                                            <button>CLICK ME</button>
                                        </div>
                                    </Html>
                                </mesh>
                                <mesh
                                    name='Rectangle2'
                                    geometry={nodes.Rectangle2.geometry}
                                    material={materials.Metal}
                                    castShadow
                                    receiveShadow
                                    position={[3.57, 0, 0]}
                                    rotation={[0, -Math.PI / 2, 0]}
                                    scale={[1, 1.09, 1]}
                                />
                            </group>
                            <group
                                name='Table'
                                position={[0, -48.31, 0]}
                                scale={[0.85, 1, 1]}
                            >
                                <mesh
                                    name='Rectangle 31'
                                    geometry={nodes["Rectangle 31"].geometry}
                                    material={materials.Wood}
                                    castShadow
                                    receiveShadow
                                    position={[-46.64, -37.68, 98.65]}
                                    rotation={[-1.45, 1.55, -1.65]}
                                    scale={[0.87, 0.64, 0.98]}
                                />
                                <mesh
                                    name='Rectangle 22'
                                    geometry={nodes["Rectangle 22"].geometry}
                                    material={materials.Wood}
                                    castShadow
                                    receiveShadow
                                    position={[-46.59, -37.63, -94.98]}
                                    rotation={[-1.45, 1.55, -1.65]}
                                    scale={[0.87, 0.64, 0.98]}
                                />
                                <mesh
                                    name='Rectangle 32'
                                    geometry={nodes["Rectangle 32"].geometry}
                                    material={materials.Wood}
                                    castShadow
                                    receiveShadow
                                    position={[1.96, -37.67, 96.02]}
                                    rotation={[-1.57, -0.02, -3.13]}
                                    scale={[0.88, 0.68, 0.81]}
                                />
                                <mesh
                                    name='Rectangle3'
                                    geometry={nodes.Rectangle3.geometry}
                                    material={materials.Wood}
                                    castShadow
                                    receiveShadow
                                    position={[1.96, -37.67, -94.98]}
                                    rotation={[-1.57, -0.02, -3.13]}
                                    scale={[0.88, 0.68, 0.81]}
                                />
                                <mesh
                                    name='Rectangle 41'
                                    geometry={nodes["Rectangle 41"].geometry}
                                    material={
                                        materials["Rectangle 41 Material"]
                                    }
                                    castShadow
                                    receiveShadow
                                    position={[27.86, 64.02, 1.79]}
                                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                                    scale={[0.74, 0.53, 1]}
                                />
                                <mesh
                                    name='Rectangle4'
                                    geometry={nodes.Rectangle4.geometry}
                                    material={materials.Wood}
                                    castShadow
                                    receiveShadow
                                    position={[0, 38.44, 0]}
                                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                                    scale={[0.83, 0.94, 1]}
                                />
                            </group>
                        </group>
                    </group>

                    <hemisphereLight
                        name='Default Ambient Light'
                        intensity={2.75}
                        color='#fee8e8'
                    />
                </scene>
            </group>
        </>
    );
});

export default Scene;
