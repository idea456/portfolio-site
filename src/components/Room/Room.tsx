import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import Scene from "./models/Scene";
import { useThree } from "@react-three/fiber";
import _ from "lodash";

const Room = () => {
    const monitorRef = React.useRef(null);
    const tlRef = React.useRef<GSAPTimeline | null>(null);
    const [transitionPhases, setTransitionPhases] = React.useState<
        [boolean, boolean]
    >([false, false]);
    const { camera } = useThree();

    const onScrollWheel = () => {
        const monitorPosition = monitorRef.current?.monitor.position;

        console.log(transitionPhases);
        if (tlRef?.current) {
            if (!transitionPhases[0]) {
                setTransitionPhases([true, false]);
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
                            onComplete: () => {
                                camera.updateProjectionMatrix();
                            },
                        },
                        "-=2",
                    );
            }
        }
    };

    useLayoutEffect(() => {
        tlRef.current = gsap.timeline({});
        window.addEventListener("wheel", _.throttle(onScrollWheel, 1000));
    }, []);

    return <Scene ref={monitorRef} />;
};

export default Room;
