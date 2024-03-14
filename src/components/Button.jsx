import {handleDownload} from "../lib/helper";
import React, {useState} from "react";
import styled from "styled-components";


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
            handleDownload(selectedUrl, selectedResolution.name + "-" + name);
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

const StyledSelect = styled.select`
  margin-top: 1rem;
  text-align: center;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    border: 1px solid black;
    cursor: pointer;
  }

`;

const StyledButton = styled.a`
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    border: 1px solid black;
    scale: 0.95;
    cursor: pointer;
  }
`;

const StyledOption = styled.option``