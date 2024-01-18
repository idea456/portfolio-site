import React from "react";
import gsap from "gsap";
import type { Group } from "three";

type TScale = {
  x: number | string;
  y: number | string;
  z: number | string;
};
const usePreloader = (
  initialScale?: TScale,
  finalScale: TScale = {
    x: 1,
    y: 1,
    z: 1,
  }
) => {
  const tlRef = React.useRef<gsap.core.Timeline>();
  const modelRef = React.useRef<Group>(null);

  React.useLayoutEffect(() => {
    tlRef.current = gsap.timeline({});
  }, []);

  React.useEffect(() => {
    if (modelRef.current && tlRef.current) {
      if (initialScale) {
        tlRef.current
          .from(modelRef.current.scale, {
            ...initialScale,
          })
          .to(modelRef.current.scale, {
            ...finalScale,
            ease: "back.out(2.5)",
            duration: 0.7,
          });
      } else {
        tlRef.current.to(modelRef.current.scale, {
          ...finalScale,
          ease: "back.out(2.5)",
          duration: 0.7,
        });
      }
    }
  }, []);

  return modelRef;
};

export default usePreloader;
