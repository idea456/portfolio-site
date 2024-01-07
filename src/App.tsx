import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import { Room } from "./components/Room";
import { Loader } from "./components/Loader";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import GmailIcon from "./assets/gmail.svg?react";
import "./App.scss";

export default function App() {
    const [shouldShowScrollHint, setShouldShowScrollHint] = useState(true);

    useEffect(() => {
        window.addEventListener("wheel", () => {
            setShouldShowScrollHint(false);
        });
        window.addEventListener("keydown", (listener) => {
            if (listener.key === "Escape") {
                setShouldShowScrollHint(true);
            }
        });
        window.addEventListener("transition-main-scene", () => {
            setShouldShowScrollHint(true);
        });
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <div className='app'>
                <div className='name'>
                    <h1>Adrienne Rio</h1>
                    <h2>Frontend developer</h2>
                </div>

                {shouldShowScrollHint && (
                    <div className='app__scroll-indicator'>
                        <div className='app__scroll-indicator-wheel' />
                    </div>
                )}

                <div className='links'>
                    <GmailIcon
                        width={44}
                        height={44}
                        color='#EA4335'
                        onClick={() =>
                            window.open("mailto:riowongsoatmojo@gmail.com")
                        }
                    />
                    <LinkedInLogoIcon
                        color='#0077b5'
                        width={44}
                        height={44}
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/adrienne-rio/",
                            )
                        }
                    />
                    <GitHubLogoIcon
                        color='#000000'
                        width={44}
                        height={44}
                        onClick={() =>
                            window.open("https://github.com/idea456")
                        }
                    />
                </div>

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
                        azimuth={[-0.8, 0.8]}
                    >
                        <Room />;
                    </PresentationControls>
                </Canvas>
            </div>
        </Suspense>
    );
}
