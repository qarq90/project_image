import styled from "styled-components";
import {motion} from "framer-motion";

export const StyledMyNav = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  color: #a67b5b;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  }
`;

export const StyledNav = styled.nav``;

export const StyledTitle = styled.h1`
  font-size: 2rem;
`;

export const StyledUl = styled.ul`
  display: flex;
  height: 6rem;
  list-style-type: none;
  align-items: center;
  justify-content: space-around;
  font-family: "Victor Mono", monospace;
  letter-spacing: 5px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const StyledLi = styled.li`
  padding: 0.5rem;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 105%;
  }
`;

export const StyledNavLeft = styled.div`
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: space-around;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const StyledNavRight = styled.div`
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: space-around;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
  }
`;

export const StyledIconDiv = styled.div`
  display: flex;
  width: 95%;
  padding: 0;
  margin: 0;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    justify-content: center;
  }
`;

export const StyledLiIcon = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #a67b5b;
  border-radius: 10px;
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    > svg {
      margin: 0.005rem;
      padding: 0.35rem;
      width: 50%;
      height: 50%;
    }
  }
`;

export const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-top: 20rem;
  }
`;

export const StyledInput = styled.input`
  width: 30rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  border: #a67b5b solid 2px;
  color: #a67b5b;
  font-weight: normal;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 95%;
    text-align: center;
  }
`;

export const StyledGrid = styled(motion.div)`
  display: grid;
  padding: 1rem;
  gap: 1rem;
  text-align: center;
  @media screen and (min-device-width: 481px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-top: 65%;
    grid-template-columns: 1fr 1fr;
  }
`;

export const StyledMapDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const StyledSearched = styled.div``;