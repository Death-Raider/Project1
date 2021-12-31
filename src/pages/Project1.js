import React from 'react'
import styled from 'styled-components'

import InfoSection from '../containers/InfoSection'
import {InfoDataProject1} from '../data/InfoData'

const Wrapper = styled.h1`
    text-align: center;
    margin-top: 2rem;
    padding: 1.5rem;
    font-size: xxx-large;
`;

const Project1 = () => {
    return (
        <InfoSection InfoData={InfoDataProject1} StyleFunc={()=>{}} ExtraFunc={()=>{
            return(
                <Wrapper>Rainfall Predictor</Wrapper>
            )
        }} />
    )
}

export default Project1
