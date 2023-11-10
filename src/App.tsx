import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
    OrbitControls,
    PresentationControls,
    CameraControls,
    Bounds,
} from "@react-three/drei";
import { Room } from "./components/Room";
import { Typewriter } from "./components/Typewriter";
import { Loader } from "./components/Loader";
import gsap from "gsap";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import * as THREE from "three";
import Scene from "./components/Room/Scene";

export default function App() {
    const tlRef = useRef<GSAPTimeline | null>(null);
    const mainRef = useRef();
    const monitorRef = React.useRef(null);

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (e.keyCode == 32 && e.target == document.body) {
                e.preventDefault();
            }
        });
        window.addEventListener("wheel", () => {
            console.log("wheeling");
        });
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <div
                style={{
                    height: "100vh",
                    width: "100vw",
                    overflow: "hidden",
                }}
            >
                {/* <div
                    style={{
                        position: "absolute",
                        bottom: 40,
                        left: 50,
                        zIndex: 9999,
                        display: "block",
                    }}
                >
                    <Typewriter>Frontend developer, Adrienne Rio</Typewriter>
                </div> */}

                <Canvas
                    shadows
                    flat
                    linear
                    camera={{
                        near: 1,
                        far: 10000,
                        position: [-1000, 300, 0],
                        scale: 1,
                        fov: 50,
                    }}
                    style={{
                        touchAction: "none",
                    }}
                >
                    <color attach='background' args={["#f5eedf"]} />
                    <PresentationControls
                        config={{ mass: 2, tension: 500 }}
                        snap={{ mass: 2, tension: 300 }}
                        zoom={0.8}
                        rotation={[0, Math.PI, 0]}
                        polar={[0, 0]}
                        // azimuth={[-0.2, 0.2]}
                        azimuth={[-0.8, 0.8]}
                    >
                        <Room />;
                    </PresentationControls>
                </Canvas>
            </div>
        </Suspense>
    );
}
