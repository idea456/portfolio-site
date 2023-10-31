import React from "react";
import "./Typwriter.scss";

const Typewriter: React.FC<React.PropsWithChildren<unknown>> = ({
    children,
}) => {
    return (
        <div className='typewriter'>
            <span className='typewriter__text'>{children}</span>
        </div>
    );
};

export default Typewriter;
