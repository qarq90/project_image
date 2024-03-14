import React from "react";
import { scaleUp } from "./Animations";
import { DownloadButton } from "./Button";
import { Image } from "./Image";
import { StyledGrid, StyledMapDiv, StyledSearched } from "../styles/styledComp";

export const Randoms = ({ images, theme }) => {
    return (
        <StyledSearched>
            <StyledGrid variants={scaleUp} initial="hidden" animate="animate">
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
