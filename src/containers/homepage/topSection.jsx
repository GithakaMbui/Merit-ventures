import React from "react";
import styled from "styled-components"
import Backgroundimg from "../../assets/pictures/company_team.jpg"


import { Logo } from "../../componets/logo/index"
import { Marginer } from "../../componets/marginer/index"
import { Button } from "../../componets/button/index"
import { DownArrow } from "../../componets/downarrow/index"
const TopContainer = styled.div` 
width: 100%;
height: 100vh;
padding: 0;
background-image: url(${Backgroundimg});
position: relative;
`; 

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(55, 55, 55, 0.89);
    display: flex;
    flex-direction: column; 
    align-items: center;
    `;

const MotivationalText = styled.h1`
font-size: 34px;
font-weight: bold;
line-height: 1.4;
color: #fff;
margin: 0;
`;

const DownArrowContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
`;

    export function TopSection(props) {
    return (
    <TopContainer>
    <BackgroundFilter>
    <Marginer direction="vertical" margin="5em" />
    <Logo />
    <Marginer direction="vertical" margin="4em" />
    <MotivationalText>Asset Tagging </MotivationalText>
    <MotivationalText>From the Best in the Industry </MotivationalText>
    <Marginer direction="vertical" margin="2em" />
    <Button> Start your project</Button>
    <DownArrowContainer>
        <DownArrow />
    </DownArrowContainer>
    </BackgroundFilter>
    </TopContainer> );

}