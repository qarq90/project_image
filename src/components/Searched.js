import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { scaleUp } from "./Animations";

const Searched = ({ imgs, inputValue }) => {
  const downloadHandler = (value) => {
    window.open(value, "_blank");
  };
  return (
    <StyledSearched>
      <StyledGrid initial="hidden" animate="animate">
        {imgs.map((item) => (
          <StyledMapDiv variants={scaleUp} key={item.id}>
            <StyledImg
              variants={scaleUp}
              onClick={() => downloadHandler(item.links.download)}
              src={item.urls.regular}
              alt=""
            />
          </StyledMapDiv>
        ))}
      </StyledGrid>
    </StyledSearched>
  );
};

const StyledImg = styled(motion.img)`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100%;
  }
`;

const StyledMapDiv = styled(motion.div)``;

const StyledGrid = styled(motion.div)`
  display: grid;
  padding: 1rem;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-top: 65%;
  }
`;

const StyledSearched = styled.div``;

export default Searched;
