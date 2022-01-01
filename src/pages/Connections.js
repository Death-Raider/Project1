import React from 'react'
import styled from 'styled-components'

import InfoSection from '../containers/InfoSection'
import {InfoDataConnections} from '../data/InfoData'

const Wrapper = styled.h1`
    text-align: center;
    margin-top: 2rem;
    padding: 1.5rem;
    font-size: xxx-large;
`;

const Connections = () => {
    return (
        <InfoSection InfoData={InfoDataConnections} StyleFunc={()=>{}} ExtraFunc={()=>(
            <Wrapper>Connections</Wrapper>
        )}/>
    )
}

export default Connections
