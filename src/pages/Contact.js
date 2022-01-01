import React from 'react'
import styled from 'styled-components'

import InfoSection from '../containers/InfoSection'
import {InfoDataContact} from '../data/InfoData'

const Wrapper = styled.h1`
    text-align: center;
    margin-top: 2rem;
    padding: 1.5rem;
    font-size: xxx-large;
`;

const Contact = () => {
    return (
        <InfoSection InfoData={InfoDataContact} StyleFunc={()=>{}} ExtraFunc={()=>(
            <Wrapper>Contact Me</Wrapper>
        )}/>
    )
}

export default Contact
