import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import axios from "axios";
import navLogo from "../img/gallery.png";
import { FaSearch, FaBackspace, FaRandom } from "react-icons/fa";
import { hover } from "./Animations";
import Searched from "./Searched";
import Random from "./Random";

const MyNav = () => {
  const [title, setTitle] = useState(false);
  const [imgs, setImgs] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setTitle(true);
    setInputValue(event.target.value);
  };

  const clearHandler = () => {
    setTitle(false);
    setInputValue("");
  };
  const fetchHandler = () => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?page=1&query=${inputValue}&client_id=${process.env.REACT_APP_API_KEY}`,
        );
        console.log(response.data);
        const top10Imgs = response.data.results.slice(0, 10);
        setImgs(top10Imgs);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  };

  useEffect(() => {
    const randomImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random?count=10&client_id=${process.env["REACT_APP_API_KEY"]}`,
        );
        console.log(response.data);
        const top10Imgs = response.data;
        setImgs(top10Imgs);
      } catch (error) {
        console.error("Error fetching random images:", error);
      }
    };
    randomImages();
  }, []);

  const randomFetchHandler = () => {
    const randomFetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random?count=10&client_id=${process.env["REACT_APP_API_KEY"]}`,
        );
        console.log(response.data);
        const top10Imgs = response.data;
        setImgs(top10Imgs);
      } catch (error) {
        console.error("Error fetching random images:", error);
      }
    };
    randomFetchImages();
    setInputValue("");
  };
  return (
    <StyledMyNav>
      <StyledNav>
        <StyledUl>
          <StyledNavLeft>
            <StyledLi>
              <StyledImg src={navLogo} alt="" />
            </StyledLi>
            <StyledLi>
              <StyledTitle>Image-Innator</StyledTitle>
            </StyledLi>
          </StyledNavLeft>
          <StyledNavRight>
            <StyledLi>
              <StyledInput
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type here..."
              />
            </StyledLi>
            <StyledLi>
              <StyledLiIcon
                onClick={fetchHandler}
                variants={hover}
                whileHover="whileHover"
              >
                <FaSearch size={30} />
              </StyledLiIcon>
            </StyledLi>
            <StyledLi>
              <StyledLiIcon
                onClick={clearHandler}
                variants={hover}
                whileHover="whileHover"
              >
                <FaBackspace size={30} />
              </StyledLiIcon>
            </StyledLi>
            <StyledLi>
              <StyledLiIcon
                onClick={randomFetchHandler}
                variants={hover}
                whileHover="whileHover"
              >
                <FaRandom size={30} />
              </StyledLiIcon>
            </StyledLi>
          </StyledNavRight>
        </StyledUl>
      </StyledNav>
      {title ? (
        <Searched inputValue={inputValue} imgs={imgs} />
      ) : (
        <Random random={imgs} />
      )}
    </StyledMyNav>
  );
};

const StyledMyNav = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  color: #a67b5b;
  background-color: #f8f8ff;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  }
`;

const StyledNav = styled.nav``;

const StyledTitle = styled.h1`
  font-size: 2rem;
`;

const StyledUl = styled.ul`
  display: flex;
  height: 6rem;
  list-style-type: none;
  align-items: center;
  justify-content: space-around;
  font-family: "Victor Mono", monospace;
  letter-spacing: 5px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    margin-left: 1rem;
    width: 90%;
  }
`;

const StyledLi = styled.li`
  padding: 0.5rem;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 105%;
  }
`;

const StyledNavLeft = styled.div`
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: space-around;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
`;

const StyledNavRight = styled.div`
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: space-around;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
  }
`;

const StyledLiIcon = styled(motion.div)`
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
  }
`;

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-top: 20rem;
  }
`;

const StyledInput = styled.input`
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
export default MyNav;
