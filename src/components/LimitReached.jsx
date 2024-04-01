import React from 'react';
import styled from "styled-components";

export const LimitReached = (props) => {
    return (
        <>
            <StyledLimitContainer>
                <StyledSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                           stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           className="feather feather-alert-triangle">
                    <polygon points="12 2 2 22 22 22 12 2"></polygon>
                    <line x1="12" y1="10" x2="12" y2="14"></line>
                    <line x1="12" y1="18" x2="12" y2="18"></line>
                </StyledSVG>
                <StyledHeader>Request Limit Reached</StyledHeader>
                <StyledDescription> You have reached the maximum number of requests for images. Please try again later.</StyledDescription>
            </StyledLimitContainer>
        </>
    )
}

const StyledLimitContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 75vh;
    padding-bottom: 5rem;
    font-family: "Victor Mono", monospace;
    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
        margin-top: 15rem;
        >p{
            width: 50%;
        }
        >svg{
            width: 20vw;
        }
    }
`

const StyledSVG = styled.svg`
    width: 7.5vw;
`

const StyledHeader = styled.p`
    padding: 3rem;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
`

const StyledDescription = styled.p`
    width: 35rem;
    text-align: center;
`
