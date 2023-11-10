import { Suspense, useEffect, useRef, useState } from "react";
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

export default function App() {
    const orbitRef = useRef<OrbitControlsImpl | null>(null);
    const [isCameraEnabled, setIsCameraEnabled] = useState(true);
    const tlRef = useRef<GSAPTimeline | null>(null);

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (e.keyCode == 32 && e.target == document.body) {
                e.preventDefault();
            }
        });

        tlRef.current = gsap.timeline({});

        // if (orbitRef?.current?.rotation) {
        //     tlRef.current.to(orbitRef?.current.rotation, {
        //         y: -90.2,
        //         duration: 4,
        //         onComplete: () => {
        //             // orbitRef?.current?.enabled = false;
        //         },
        //     });
        // }
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <div
                style={{
                    height: "100.1vh",
                    width: "100vw",
                }}
                onScroll={() => console.log("lmao")}
            >
                <div
                    style={{
                        position: "absolute",
                        bottom: 40,
                        left: 50,
                        zIndex: 9999,
                        display: "block",
                    }}
                >
                    <Typewriter>Frontend developer, Adrienne Rio</Typewriter>
                </div>

                <Canvas
                    shadows
                    flat
                    linear
                    camera={{
                        near: 1,
                        far: 10000,
                        position: [-1000, 200, 0],
                        // position: [-100, 100, 100],
                        // rotation: [0, Math.PI + 0.7, 0],
                        scale: 1,
                        fov: 50,
                    }}
                    style={{
                        touchAction: "none",
                    }}
                >
                    <color attach='background' args={["#f5eedf"]} />
                    <PresentationControls
                        snap
                        global
                        zoom={0.7}
                        rotation={[0, Math.PI + 0.7, 0]}
                        polar={[0, 0]}
                        azimuth={[Math.PI, Math.PI * 1.65]}
                    >
                        <Room />
                        {/* <OrbitControls
                        enableDamping
                        dampingFactor={0.1}
                        minPolarAngle={0}
                        maxPolarAngle={1.5}
                        minAzimuthAngle={Math.PI}
                        maxAzimuthAngle={Math.PI * 1.65}
                        minDistance={0}
                        maxDistance={1000}
                        target={[0, 125, -50]}
                        ref={orbitRef}
                        makeDefault
                    /> */}
                    </PresentationControls>
                    <axesHelper args={[200]} />
                    {/* </Bounds> */}
                </Canvas>
            </div>
        </Suspense>
    );
}
