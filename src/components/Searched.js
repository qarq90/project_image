import React from "react";
import {scaleUp} from "./Animations";
import {DownloadButton} from "./Button";
import {Image} from "./Image";
import {StyledGrid, StyledMapDiv, StyledSearched} from "../styles/styledComp";

const Searched = ({imgs, inputValue}) => {
    return (<StyledSearched>
        <StyledGrid initial="hidden" animate="animate">
            {imgs.map((item) => (<StyledMapDiv variants={scaleUp} key={item.id}>
                <Image img={item.urls.regular}/>
                <DownloadButton name={item.slug} url={item.urls.full}/>
            </StyledMapDiv>))}
        </StyledGrid>
    </StyledSearched>);
};


export default Searched;
