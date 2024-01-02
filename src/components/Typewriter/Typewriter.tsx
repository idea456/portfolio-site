import { useCallback, useRef } from "react";
import "./Typwriter.scss";

const letters = "abcdefghijklmnopqrstuvwxyz0123456789#$_+=";

type TypewriterProps = {
    words: string;
};

function Typewriter({ words }: TypewriterProps) {
    const charRefs = useRef<HTMLSpanElement[]>([]);

    const onMouseEnter = useCallback(
        (c: string, i: number) => {
            const charRef = charRefs.current[i];
            if (!charRef.interval && c !== " ") {
                const interval = setInterval(() => {
                    const randomIndex = Math.floor(
                        Math.random() * (letters.length - 1),
                    );

                    charRef.innerText = letters[randomIndex];
                    charRef.style.background = "white";
                    charRef.style.color = "black";
                }, 100);
                charRef.interval = interval;

                const timeout = setTimeout(() => {
                    clearInterval(interval);
                    delete charRef.interval;
                    charRef.innerText = words[i];
                    charRef.style.background = "inherit";
                    charRef.style.color = "white";
                    clearTimeout(timeout);
                }, 1800);
                charRefs.current[i] = charRef;
            }
        },
        [words],
    );

    return (
        <div>
            <span className='typo'>
                <span>{"> "}</span>
                {words.split("").map((c, i) => {
                    return (
                        <span
                            onMouseEnter={() => {
                                onMouseEnter(c, i);
                            }}
                            ref={(r) => {
                                if (r) charRefs.current.push(r);
                            }}
                            key={`${c}-${i}`}
                        >
                            {c}
                        </span>
                    );
                })}
            </span>
        </div>
    );
}

export default Typewriter;
