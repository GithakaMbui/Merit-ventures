import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styled from 'styled-components';

const ArrowContainer = styled.div`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background-color:rgba(113, 113, 113, 0.48);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ArrowIcon = styled.div`
    margin-top: 3px;
    color: #fff;
    font-size: 30px;
`;

export function DownArrow() {
    return(
        <ArrowContainer>
            <ArrowIcon>
                <FontAwesomeIcon icon={faAngleDown} />
            </ArrowIcon>
        </ArrowContainer>
    )

}