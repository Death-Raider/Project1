import React, {useEffect} from 'react'
import styled from 'styled-components'

import InfoSection from '../containers/InfoSection'
import {InfoDataConnections} from '../data/InfoData'



const Wrapper = styled.h1`
    position: relative;
    text-align: center;
    margin-top: 2rem;
    padding: 1.5rem;
    font-size: xxx-large;
    align-self: center;

`;

const Connections = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <InfoSection InfoData={InfoDataConnections} StyleFunc={()=>{}} ExtraFunc={()=>(
            <Wrapper>Connections</Wrapper>
        )}/>
    )
}

export default Connections
