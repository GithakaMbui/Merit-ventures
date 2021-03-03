import React from 'react'
import styled from 'styled-components';
import { theme } from "../../theme";

const ButtonWrapper = styled.button`
padding: 7px 15px;
border-radius: 5px;
background-color: #00B997;
color: #fff;
font-weight: bold;
font-size: 16px;
outline: none;
border: 2px solid transparent;
transition: all 220ms ease-in-out;
cursor: pointer;

&:hover{
    background-color: transparent;
    border: 2px solid ${theme.primary};
}

`;

export function Button(props) {
    return <ButtonWrapper {...props}>{props.children }</ButtonWrapper>

}