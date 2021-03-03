import React from 'react';
import styled from "styled-components"
import { TopSection } from "./topSection"

const PageContainer = styled.div`
width: 100%;
height: 100%
flex-direction: column;
`; 

export function Homepage(props) {
    //return <div> jambo from Merit Ventures</div>
    return <PageContainer>
        <TopSection />
    </PageContainer>

}