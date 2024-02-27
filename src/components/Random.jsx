import React from "react";
import {scaleUp} from "./Animations";
import {DownloadButton} from "./Button";
import {Image} from "./Image";
import {StyledGrid, StyledMapDiv, StyledSearched} from "../styles/styledComp";

const Searched = ({random, theme}) => {
    return (<StyledSearched>
        <StyledGrid initial="hidden" animate="animate">
            {random.map((item) => (<StyledMapDiv variants={scaleUp} key={item.id}>
                <Image img={item.urls.regular}/>
                <DownloadButton name={item.slug} url={item.urls} theme={theme}/>
            </StyledMapDiv>))}
        </StyledGrid>
    </StyledSearched>);
};

export default Searched;
