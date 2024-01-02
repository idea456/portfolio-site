import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import "./PixelTransition.scss";

const COLUMNS = 20;

/**

     * Shuffles array in place (Fisher–Yates shuffle).

     * @param {Array} a items An array containing the items.

     */

const shuffle = <T extends number[]>(a: T): T => {
    let j, x, i;

    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));

        x = a[i];

        a[i] = a[j];

        a[j] = x;
    }

    return a;
};

const pixelVariant = {
    initial: {
        opacity: 0,
    },
    open: (i: number) => ({
        opacity: 1,
        transition: {
            duration: 0,
            delay: 0.02 * i,
        },
    }),
    closed: (i: number) => ({
        opacity: 0,
        transition: {
            duration: 0,
            delay: 0.02 * i,
        },
    }),
};

type PixelTransitionProps = {
    show: boolean;
};

const PixelTransition = ({ show }: PropsWithChildren<PixelTransitionProps>) => {
    const getPixels = () => {
        const blockSize = window.innerWidth * 0.05;
        const rows = Math.ceil(window.innerHeight / blockSize);

        const shuffledPixels = shuffle([...Array(rows)].map((_, i) => i));

        return shuffledPixels.map((randomI, i) => {
            return (
                <motion.div
                    className='pixel'
                    variants={pixelVariant}
                    initial='initial'
                    animate={show ? "open" : "closed"}
                    custom={i + randomI}
                />
            );
        });
    };

    return (
        <div className='pixels'>
            {[...Array(COLUMNS)].map((_, i) => {
                return <div className='column'>{getPixels()}</div>;
            })}
        </div>
    );
};

export default PixelTransition;
