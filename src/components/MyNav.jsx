import React, {useEffect, useState} from "react";
import axios from "axios";
import "../styles/global.css";
import navLogo from "../img/gallery.png";
import {FaBackspace, FaMoon, FaRandom, FaSearch, FaSun} from "react-icons/fa";
import {hover} from "./Animations";
import {Searched} from "./Searched";
import {Randoms} from "./Randoms";
import {
    StyledBottom,
    StyledBottomButton,
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
        const [images, setImages] = useState([]);
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
            let pageCount = 0;
            const clientID = "LOfhmCf0mt15DeFZ-22fw3zvfuoTr833GKJHCO5BmZ8";
            try {
                let currentImages = [];

                const response = await axios.get(
                    `https://api.unsplash.com/search/photos?query=${inputValue}&per_page=9&client_id=${clientID}`
                );
                pageCount++;

                console.log(response.data.results);
                currentImages.push(...response.data.results);

                console.log(currentImages);

                setImages(currentImages);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        const fetchHandler = () => {
            fetchImages();
        };

        const randomFetchImages = async () => {
            const clientID = "LOfhmCf0mt15DeFZ-22fw3zvfuoTr833GKJHCO5BmZ8";
            let pageCount = 1;
            try {
                const response = await axios.get(
                    `https://api.unsplash.com/photos/random?count=9&page=${pageCount}&client_id=${clientID}`
                );
                pageCount++;
                console.log(response.data);
                setImages(prevImages => [...prevImages, ...response.data]);
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
                                <StyledInput
                                    id="search"
                                    className={theme ? "darkMode" : "lightMode"}
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
                    <Searched images={images} theme={theme}/>
                ) : (
                    <Randoms images={images} theme={theme}/>
                )}
                <StyledBottom>
                    <StyledBottomButton
                        className={`${theme ? "darkButton" : "lightButton"}`}
                        onClick={randomFetchHandler}
                    >
                        Load More
                    </StyledBottomButton>
                </StyledBottom>
            </StyledMyNav>
        );
    }
;


export default MyNav;
