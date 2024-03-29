import React from "react";
import { Image } from "./Image";
import { DownloadButton } from "./Button";
import { scaleUp } from "./Animations";
import { StyledGrid, StyledMapDiv, StyledSearched } from "../styles/styledComp";

export const Randoms = ({ images, theme }) => {
    return (
        <StyledSearched>
            <StyledGrid variants={scaleUp} initial="initial" animate="show">
                {images.map((image) => (
                    <StyledMapDiv variants={scaleUp} key={image.id}>
                        <Image img={image.urls.regular} />
                        <DownloadButton name={image.slug} url={image.urls} theme={theme} />
                    </StyledMapDiv>
                ))}
            </StyledGrid>
        </StyledSearched>
    );
};
