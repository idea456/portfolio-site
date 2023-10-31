import React, { FC, PropsWithChildren } from "react";
import "./Typwriter.scss";

const Typewriter: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div className='typewriter'>
            <span className='typewriter__text'>{children}</span>
        </div>
    );
};

export default Typewriter;
