import React from 'react'
import styled from 'styled-components'

import InfoSection from '../containers/InfoSection'
import {InfoDataProjects} from '../data/InfoData'

const Wrapper = styled.h1`
    text-align: center;
    margin-top: 2rem;
    padding: 1.5rem;
    font-size: xxx-large;
`;

const Projects = () => {
    return (
        <InfoSection InfoData={InfoDataProjects} StyleFunc={()=>{}} ExtraFunc={()=>(
            <Wrapper>My Projects</Wrapper>
        )}/>
    )
}
export default Projects
