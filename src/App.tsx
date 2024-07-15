import { Suspense, useEffect, useState } from "react";
import { Loader } from "./components/Loader";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import GmailIcon from "./assets/gmail.svg?react";
import { lazy } from "@loadable/component";
import "./App.scss";

export default function App() {
  const [shouldShowScrollHint, setShouldShowScrollHint] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  const LazyRoom = lazy(async () => {
    const model = await import("./components/Room/Room");
    setHasLoaded(true);
    return model;
  });

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

  const transitionToWorkspace = () => {
    window.dispatchEvent(new Event("transition-to-workspace"));
  };

  if (window.location.pathname === "/test") {
    return <h1>TEST</h1>
  }

  return (
    <div className="app">
      {hasLoaded && (
        <>
          <div className="name">
            <h1>Adrienne Rio</h1>
            <h2>Frontend developer</h2>
          </div>

          {shouldShowScrollHint && (
            <div
              className="app__scroll-indicator"
              onClick={transitionToWorkspace}
            >
              <div className="app__scroll-indicator-wheel" />
            </div>
          )}

          <div className="links">
            <GmailIcon
              width={44}
              height={44}
              color="#EA4335"
              onClick={() => window.open("mailto:riowongsoatmojo@gmail.com")}
            />
            <LinkedInLogoIcon
              color="#0077b5"
              width={44}
              height={44}
              onClick={() =>
                window.open("https://www.linkedin.com/in/adrienne-rio/")
              }
            />
            <GitHubLogoIcon
              color="#000000"
              width={44}
              height={44}
              onClick={() => window.open("https://github.com/idea456")}
            />
          </div>
        </>
      )}
      <Suspense fallback={<Loader />}>
        <LazyRoom />
      </Suspense>
    </div>
  );
}
