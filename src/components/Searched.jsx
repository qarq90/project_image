import React from "react";
import {scaleUp} from "./Animations";
import {DownloadButton} from "./Button";
import {Image} from "./Image";
import {StyledGrid, StyledMapDiv, StyledSearched} from "../styles/styledComp";

const Searched = ({imgs, theme}) => {
    return (<StyledSearched>
        <StyledGrid initial="hidden" animate="animate">
            {imgs.map((img) => (<StyledMapDiv variants={scaleUp} key={img.id}>
                <Image img={img.urls.regular}/>
                <DownloadButton name={img.slug} url={img.urls} theme={theme}/>
            </StyledMapDiv>))}
        </StyledGrid>
    </StyledSearched>);
};


export default Searched;
