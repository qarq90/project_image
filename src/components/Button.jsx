import React, {useState} from "react";
import styled from "styled-components";
import {StyledButton, StyledSelect} from "../styles/styledComp";
import {handleDownload} from "../lib/helper";


export const DownloadButton = ({name, url, theme}) => {
    const [selectedResolution, setSelectedResolution] = useState(null);
    const imageResolutions = [
        {name: 'Full HD', urlType: url.full},
        {name: 'Raw', urlType: url.raw},
        {name: 'Regular', urlType: url.regular},
        {name: 'Small', urlType: url.small},
        {name: 'Thumb', urlType: url.thumb}
    ];
    const downloadHandler = () => {
        if (selectedResolution) {
            const selectedUrl = selectedResolution.urlType;
            console.log(handleDownload(selectedUrl, selectedResolution.name + "-" + name).then(r => console.log(r)))
        } else {
            console.error('Please select an image resolution.');
        }
    };
    return (
        <>
            <StyledSelect
                className={`${theme ? "darkButton" : "lightButton"}`}
                onChange={(e) => setSelectedResolution(imageResolutions.find(resolution => resolution.name === e.target.value))}
                name="resolution">
                <StyledOption>Full HD</StyledOption>
                <StyledOption>Raw</StyledOption>
                <StyledOption>Regular</StyledOption>
                <StyledOption>Small</StyledOption>
                <StyledOption>Thumb</StyledOption>
            </StyledSelect>
            <StyledButton
                className={`${theme ? "darkButton" : "lightButton"}`}
                onClick={() => {
                    selectedResolution ? downloadHandler(selectedResolution, name) : handleDownload(url.full, name)
                }}>Download
            </StyledButton>
        </>
    )
}

const StyledOption = styled.option``