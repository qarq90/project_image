import styled from "styled-components";
import {motion} from "framer-motion";
import React from "react";

export const Image = ({img}) => {
    return (
        <StyledImg
            src={img}
            alt=""
        />
    )
}
const StyledImg = styled(motion.img)`
    width: 100%;
    height: 30rem;
    object-fit: cover;
    border-radius: 10px;
    transition: 0.5s all ease;
    zoom: unset;

    &:hover {
        transform: scale(1.025);
    }

    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
        width: 100%;
        height: 69%;
    }
`;