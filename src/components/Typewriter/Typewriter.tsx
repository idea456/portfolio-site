import React from "react";
import styled, { keyframes } from "styled-components";
// import "./Typwriter.scss";

// .typewriter {
//     display: inline-block;
//     width: 400px;
//     height: fit-content;

//     &__text {
//         color: #0000;
//         cursor: default;
//         font-size: 60px;
//         letter-spacing: 0.1px;
//         background: linear-gradient(-90deg, white 5px, #0000 0) 10px 0,
//             linear-gradient(white 0 0) 0 0;
//         background-size: calc(32 * 1ch) 200%;
//         -webkit-background-clip: padding-box, text;
//         background-clip: padding-box, text;
//         background-repeat: no-repeat;
//         animation: b 0.7s infinite steps(1),
//             t calc(32 * 0.1s) steps(32) forwards;
//     }

const TypewriterWrapper = styled.div`
    display: inline-block;
    width: 400px;
    height: fit-content;
`;

const TypewriterText = styled.span`
    color: #0000;
    cursor: default;
    font-size: 60px;
    letter-spacing: 0.1px;
    background: linear-gradient(-90deg, #ff8e3c 5px, #0000 0) 10px 0,
        linear-gradient(#ff8e3c 0 0) 0 0;
    background-size: calc(32 * 1ch) 200%;
    -webkit-background-clip: padding-box, text;
    background-clip: padding-box, text;
    background-repeat: no-repeat;
    animation: b 0.7s infinite steps(1), t calc(32 * 0.1s) steps(32) forwards;
`;

const Typewriter: React.FC<React.PropsWithChildren<unknown>> = ({
    children,
}) => {
    return (
        <TypewriterWrapper>
            <TypewriterText>{children}</TypewriterText>
        </TypewriterWrapper>
    );
};

export default Typewriter;
