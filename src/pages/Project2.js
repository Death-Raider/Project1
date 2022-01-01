import React from 'react'
import styled from 'styled-components'

import InfoSection from '../containers/InfoSection'
import {InfoDataProject2} from '../data/InfoData'

const Wrapper = styled.h1`
    text-align: center;
    margin-top: 2rem;
    padding: 1.5rem;
    font-size: xxx-large;
`;

const Project2 = () => {
    return (
        <InfoSection InfoData={InfoDataProject2} StyleFunc={()=>{}}ExtraFunc={()=>{
            return(
                <Wrapper>Minecraft Vision AI</Wrapper>
            )
        }} />
    )
}

export default Project2
