import React from "react";
import { useAssets } from "./Scene";
import { Html } from "@react-three/drei";
import { MainPage } from "../../../pages";
import type {
    Mesh,
    BufferGeometry,
    NormalBufferAttributes,
    Material,
    Object3DEventMap,
} from "three";

const Workspace = React.forwardRef<
    Mesh<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[],
        Object3DEventMap
    >
>((_, ref) => {
    const htmlRef = React.useRef<HTMLDivElement>(null);
    const { nodes, materials } = useAssets();

    return (
        <group name='Workspace' position={[149.77, -66.47, -2.22]}>
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
            <group name='Monitor' position={[22.64, 79.6, -0.03]} scale={1.04}>
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
                    ref={ref}
                />
                <mesh
                    name='Plane 21'
                    geometry={nodes["Plane 21"].geometry}
                    material={materials["Plane 21 Material"]}
                    castShadow
                    receiveShadow
                    position={[-3.57, 2.34, -0.26]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[1.01, 1.01, 1]}
                >
                    <Html transform ref={htmlRef}>
                        <MainPage />
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
            <group name='Table' position={[0, -48.31, 0]} scale={[0.85, 1, 1]}>
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
                    material={materials["Rectangle 41 Material"]}
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
        // <group name='Workspace' position={[149.77, -66.47, -2.22]}>
        //     <group
        //         name='Cup'
        //         position={[-13.74, 10.16, -82.71]}
        //         rotation={[0, 0.61, 0]}
        //         scale={0.27}
        //     >
        //         <mesh
        //             name='Cylinder5'
        //             geometry={nodes.Cylinder5.geometry}
        //             material={materials.Floor}
        //             castShadow
        //             receiveShadow
        //             position={[3.18, -27.42, -4.24]}
        //             rotation={[-Math.PI, -0.96, -Math.PI]}
        //             scale={[3.74, 0.52, 3.74]}
        //         />
        //         <mesh
        //             name='Torus'
        //             geometry={nodes.Torus.geometry}
        //             material={materials["Torus Material"]}
        //             castShadow
        //             receiveShadow
        //             position={[-24.91, -1.64, -1.03]}
        //             rotation={[Math.PI, 0, -Math.PI / 2]}
        //             scale={[0.65, 0.58, 1]}
        //         />
        //         <mesh
        //             name='Ellipse1'
        //             geometry={nodes.Ellipse1.geometry}
        //             material={materials["Ellipse1 Material"]}
        //             castShadow
        //             receiveShadow
        //             position={[9.45, 19.96, 1.07]}
        //             rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        //             scale={1}
        //         />
        //         <mesh
        //             name='Cylinder6'
        //             geometry={nodes.Cylinder6.geometry}
        //             material={materials["Cylinder6 Material"]}
        //             castShadow
        //             receiveShadow
        //             position={[6.52, 0, -1.38]}
        //             rotation={[0, -Math.PI / 2, 0]}
        //         />
        //     </group>
        //     <group name='Monitor' position={[22.64, 79.6, -0.03]} scale={1.04}>
        //         <mesh
        //             name='Rectangle1'
        //             geometry={nodes.Rectangle1.geometry}
        //             material={materials["Rectangle1 Material"]}
        //             castShadow
        //             receiveShadow
        //             position={[-46.26, -74.85, 1.96]}
        //             rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        //             scale={0.96}
        //         />
        //         <mesh
        //             name='Cube8'
        //             geometry={nodes.Cube8.geometry}
        //             material={materials.Metal}
        //             castShadow
        //             receiveShadow
        //             position={[6.39, -30.5, 2.44]}
        //             rotation={[0, Math.PI / 2, 0]}
        //             scale={[1, 0.78, 0.56]}
        //         />
        //         <mesh
        //             name='Cube9'
        //             geometry={nodes.Cube9.geometry}
        //             material={materials.Metal}
        //             castShadow
        //             receiveShadow
        //             position={[5, -55.43, 2.5]}
        //             rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        //             scale={[2.46, 0.65, 0.32]}
        //             ref={ref}
        //         />
        //         <mesh
        //             name='Plane 21'
        //             geometry={nodes["Plane 21"].geometry}
        //             position={[-3.57, 2.34, -0.26]}
        //             rotation={[0, -Math.PI / 2, 0]}
        //         >
        //             <Html transform ref={htmlRef}>
        //                 <MainPage />
        //             </Html>
        //         </mesh>
        //         <mesh
        //             name='Rectangle2'
        //             geometry={nodes.Rectangle2.geometry}
        //             material={materials.Metal}
        //             castShadow
        //             receiveShadow
        //             position={[3.57, 0, 0]}
        //             rotation={[0, -Math.PI / 2, 0]}
        //             scale={[1, 1.09, 1]}
        //         />
        //     </group>
        //     <group name='Table' position={[0, -48.31, 0]} scale={[0.85, 1, 1]}>
        //         <mesh
        //             name='Rectangle 31'
        //             geometry={nodes["Rectangle 31"].geometry}
        //             material={materials.Wood}
        //             castShadow
        //             receiveShadow
        //             position={[-46.64, -37.68, 98.65]}
        //             rotation={[-1.45, 1.55, -1.65]}
        //             scale={[0.87, 0.64, 0.98]}
        //         />
        //         <mesh
        //             name='Rectangle 22'
        //             geometry={nodes["Rectangle 22"].geometry}
        //             material={materials.Wood}
        //             castShadow
        //             receiveShadow
        //             position={[-46.59, -37.63, -94.98]}
        //             rotation={[-1.45, 1.55, -1.65]}
        //             scale={[0.87, 0.64, 0.98]}
        //         />
        //         <mesh
        //             name='Rectangle 32'
        //             geometry={nodes["Rectangle 32"].geometry}
        //             material={materials.Wood}
        //             castShadow
        //             receiveShadow
        //             position={[1.96, -37.67, 96.02]}
        //             rotation={[-1.57, -0.02, -3.13]}
        //             scale={[0.88, 0.68, 0.81]}
        //         />
        //         <mesh
        //             name='Rectangle3'
        //             geometry={nodes.Rectangle3.geometry}
        //             material={materials.Wood}
        //             castShadow
        //             receiveShadow
        //             position={[1.96, -37.67, -94.98]}
        //             rotation={[-1.57, -0.02, -3.13]}
        //             scale={[0.88, 0.68, 0.81]}
        //         />
        //         <mesh
        //             name='Rectangle 41'
        //             geometry={nodes["Rectangle 41"].geometry}
        //             material={materials["Rectangle 41 Material"]}
        //             castShadow
        //             receiveShadow
        //             position={[27.86, 64.02, 1.79]}
        //             rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        //             scale={[0.74, 0.53, 1]}
        //         />
        //         <mesh
        //             name='Rectangle4'
        //             geometry={nodes.Rectangle4.geometry}
        //             material={materials.Wood}
        //             castShadow
        //             receiveShadow
        //             position={[0, 38.44, 0]}
        //             rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        //             scale={[0.83, 0.94, 1]}
        //         />
        //     </group>
        // </group>
    );
});

export default Workspace;
