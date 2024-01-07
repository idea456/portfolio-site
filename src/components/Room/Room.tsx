import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import Scene from "./models/Scene";
import { useThree } from "@react-three/fiber";
import _ from "lodash";

const Room = () => {
    const monitorRef = React.useRef(null);
    const tlRef = React.useRef<GSAPTimeline | null>(null);
    const { camera } = useThree();

    const transitionCameraToWorkspace = () => {
        // @ts-expect-error Monitor is not initialized
        const monitorPosition = monitorRef.current.monitor.position;

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
                    "-=2",
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
                    "-=2",
                );
        }
    };

    useLayoutEffect(() => {
        tlRef.current = gsap.timeline({});
    }, []);

    const throttledTransitionCameraToWorkspace = _.throttle(
        transitionCameraToWorkspace,
        1000,
        {
            trailing: false,
        },
    );
    const throttledTransitionCameraToMainScene = _.throttle(
        transitionCameraToMainScene,
        1000,
        {
            trailing: false,
        },
    );

    // const value = {
    //     transitionCameraToMainScene:,
    // };

    useLayoutEffect(() => {
        window.addEventListener("wheel", throttledTransitionCameraToWorkspace);
        window.addEventListener("keydown", (listener) => {
            if (listener.key === "Escape") {
                throttledTransitionCameraToMainScene();
            }
        });
        window.addEventListener("transition-main-scene", () => {
            transitionCameraToMainScene();
        });
    }, []);

    return <Scene ref={monitorRef} />;
};

export default Room;
