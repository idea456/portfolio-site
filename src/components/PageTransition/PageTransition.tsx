import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

const pageVariant = {
    initial: {
        opacity: 0,
    },
    open: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
};

type PageTransitionProps = {
    show: boolean;
    className?: string;
};

const PageTransition = ({
    show,
    children,
    className,
}: PropsWithChildren<PageTransitionProps>) => {
    return (
        <motion.div
            className={className}
            variants={pageVariant}
            initial='initial'
            animate={show ? "open" : "closed"}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
