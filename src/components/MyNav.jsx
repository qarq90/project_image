import React, {useEffect, useState} from "react"
import "../styles/global.css"
import navLogo from "../img/gallery.png"
import {FaBackspace, FaMoon, FaRandom, FaSearch, FaSun} from "react-icons/fa"
import {hover} from "./Animations"
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
} from "../styles/styledComp"
import {randomImages, searchImages} from '../lib/helper'
import {Searched} from "./Searched";
import {Randoms} from "./Randoms";
import {LimitReached} from "./LimitReached";

const MyNav = () => {
    const [theme, setTheme] = useState(true)
    const [title, setTitle] = useState(false)
    const [limit, setLimit] = useState(false)
    const [images, setImages] = useState([])
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (event) => {
        setTitle(true)
        setInputValue(event.target.value)
    }

    const themeHandler = () => {
        setTheme(!theme)
    }

    const clearHandler = () => {
        setTitle(false)
        setInputValue("")
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            fetchImages("searched").then(() => {
                console.log("Images Fetched Successfully")
            }).catch(error => {
                console.error("Error fetching images:", error)
            })
        }
    }

    const fetchImages = async (type) => {
        switch (type) {
            case "searched":
                let searchedImages = await searchImages(inputValue)
                if (searchedImages) {
                    setImages([])
                    setImages(searchedImages)
                    setTitle(true)
                } else {
                    setLimit(false)
                }
                break
            case "random":
                let randomizedImages = await randomImages()
                if (randomizedImages) {
                    setImages([])
                    setImages(prevImages => [...prevImages, ...randomizedImages])
                    setTitle(false)
                    setInputValue("")
                } else {
                    setLimit(false)
                }
                break
            case "loadMore":
                let moreImages = title ? await searchImages(inputValue) : await randomImages()
                if (moreImages) {
                    setImages(prevImages => [...prevImages, ...moreImages])
                } else {
                    setLimit(true)
                }
                break
            default:
                console.log("Invalid value for type")
                break
        }
    }

    useEffect(() => {
        const fetchOnLoad = async () => {
            try {
                let randomizedImages = await randomImages()
                if (randomizedImages) {
                    setImages(randomizedImages)
                } else {
                    setLimit(true)
                }
            } catch (error) {
                console.error('Error fetching and setting images:', error)
            }
        }
        fetchOnLoad().then(r => {
            console.log(r)
        })
    }, [])

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
                                    onClick={() => fetchImages("searched")}
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
                                    onClick={() => fetchImages("random")}
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
            {!limit ? (
                <>
                    {title ? (
                        <Searched images={images} theme={theme}/>
                    ) : (
                        <Randoms images={images} theme={theme}/>
                    )}
                </>
            ) : (
                <LimitReached/>
            )}
            {limit ? (<></>) : <>
                <StyledBottom>
                    <StyledBottomButton
                        className={`${theme ? "darkButton" : "lightButton"}`}
                        onClick={() => fetchImages("loadMore")}
                    >
                        Load More
                    </StyledBottomButton>
                </StyledBottom></>}
        </StyledMyNav>
    )
}


export default MyNav
