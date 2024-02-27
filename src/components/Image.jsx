import styled from "styled-components";
import {motion} from "framer-motion";
import {scaleUp} from "./Animations";
import React from "react";


export const Image = ({img}) => {
    return (
        <StyledImg
            variants={scaleUp}
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

  &:hover {
    cursor: pointer;
    scale: 0.95;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100%;
    height: 69%;
  }
`;