import * as three from "three";
import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./components/Room";
import { Typewriter } from "./components/Typewriter";
import { Loader } from "./components/Loader";

export default function App() {
    const scroll = useRef(0);

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (e.keyCode == 32 && e.target == document.body) {
                e.preventDefault();
            }
        });
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <div
                style={{
                    height: "100vh",
                    width: "100vw",
                }}
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
                    <Typewriter>
                        <span style={{ color: "#FF8E3C" }}>
                            Frontend developer,
                        </span>{" "}
                        Adrienne Rio
                    </Typewriter>
                </div>

                <Canvas shadows flat linear>
                    <Scene scroll={scroll} />
                    <OrbitControls
                        minPolarAngle={0}
                        maxPolarAngle={1}
                        minAzimuthAngle={Math.PI}
                        maxAzimuthAngle={Math.PI * 1.55}
                        minDistance={200}
                        maxDistance={1000}
                    />
                </Canvas>
            </div>
        </Suspense>
    );
}
