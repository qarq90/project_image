import React, {useEffect, useState} from "react";
import axios from "axios";
import "../styles/global.css";
import navLogo from "../img/gallery.png";
import {FaBackspace, FaMoon, FaRandom, FaSearch, FaSun} from "react-icons/fa";
import {hover} from "./Animations";
import Searched from "./Searched";
import Random from "./Random";
import {
    StyledIconDiv,
    StyledImg,
    StyledInput,
    StyledLi,
    StyledLiIcon,
    StyledMyNav,
    StyledNav,
    StyledNavLeft,
    StyledNavRight,
    StyledTitle,
    StyledUl
} from "../styles/styledComp";

const MyNav = () => {
        const [theme, setTheme] = useState(true);
        const [title, setTitle] = useState(false);
        const [imgs, setImgs] = useState([]);
        const [inputValue, setInputValue] = useState("");

        const handleInputChange = (event) => {
            setTitle(true);
            setInputValue(event.target.value);
        };

        const themeHandler = () => {
            setTheme(!theme);
        }

        const clearHandler = () => {
            setTitle(false);
            setInputValue("");
        };

        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                fetchHandler();
            }
        };

        const fetchImages = async () => {
            try {
                const response = await axios.get(
                    `https://api.unsplash.com/search/photos?per_page=60&query=${inputValue}&client_id=${process.env.REACT_APP_API_KEY}`,
                );
                console.log(response.data);
                const top10Imgs = response.data.results;
                setImgs(top10Imgs);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        const fetchHandler = () => {
            fetchImages();
        };

        const randomFetchImages = async () => {
            try {
                const response = await axios.get(
                    `https://api.unsplash.com/photos/random?count=24&client_id=${process.env["REACT_APP_API_KEY"]}`,
                );
                console.log(response.data);
                const top10Imgs = response.data;
                setImgs(top10Imgs);
            } catch (error) {
                console.error("Error fetching random images:", error);
            }
        };

        const randomFetchHandler = () => {
            randomFetchImages();
            setInputValue("");
        };

        useEffect(() => {
            randomFetchImages();
        }, []);

        return (
            <StyledMyNav className={theme ? "darkMode" : "lightMode"}>
                <StyledNav>
                    <StyledUl>
                        <StyledNavLeft>
                            <StyledLi>
                                <StyledImg src={navLogo} alt=""/>
                            </StyledLi>
                            <StyledLi>
                                <StyledTitle>Image-Innator</StyledTitle>
                            </StyledLi>
                        </StyledNavLeft>
                        <StyledNavRight>
                            <StyledLi>
                                <StyledInput className={theme ? "darkMode" : "lightMode"}
                                             value={inputValue}
                                             onChange={handleInputChange}
                                             onKeyDown={handleKeyDown}
                                             placeholder="Type here..."
                                />
                            </StyledLi>
                            <StyledIconDiv>
                                <StyledLi>
                                    <StyledLiIcon
                                        onClick={fetchHandler}
                                        variants={hover}
                                        whileHover="whileHover"
                                    >
                                        <FaSearch size={30}/>
                                    </StyledLiIcon>
                                </StyledLi>
                                <StyledLi>
                                    <StyledLiIcon
                                        onClick={clearHandler}
                                        variants={hover}
                                        whileHover="whileHover"
                                    >
                                        <FaBackspace size={30}/>
                                    </StyledLiIcon>
                                </StyledLi>
                                <StyledLi>
                                    <StyledLiIcon
                                        onClick={randomFetchHandler}
                                        variants={hover}
                                        whileHover="whileHover"
                                    >
                                        <FaRandom size={30}/>
                                    </StyledLiIcon>
                                </StyledLi>
                                <StyledLi>
                                    <StyledLiIcon
                                        onClick={themeHandler}
                                        variants={hover}
                                        whileHover="whileHover"
                                    >
                                        {theme ? <FaMoon size={30}/> : <FaSun size={30}/>}
                                    </StyledLiIcon>
                                </StyledLi>
                            </StyledIconDiv>
                        </StyledNavRight>
                    </StyledUl>
                </StyledNav>
                {title ? (
                    <Searched inputValue={inputValue} imgs={imgs}/>
                ) : (
                    <Random random={imgs}/>
                )}
            </StyledMyNav>
        );
    }
;


export default MyNav;
