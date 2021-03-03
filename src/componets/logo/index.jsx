import React from 'react'
import styled from "styled-components"

import BeemaLogo from "../../assets/logo/logo_croped.png"
import { theme } from "../../theme";

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    `;

const LogoImg = styled.img`
width: 8em;
height: 8em;`
;

const Logotext = styled.div`
font-size: 40px;
margin-top: 6px;
color: #00B997;
font-weight: 900;
`;


export function Logo(props) {
    return (
    <LogoContainer>
    <LogoImg src={BeemaLogo} />
    <Logotext>Merit Ventures</Logotext>
    </LogoContainer>
    );
}