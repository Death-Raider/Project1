import React from 'react'
import styled from 'styled-components'

import InfoSection from '../containers/InfoSection'
import {InfoDataProjects} from '../data/InfoData'

const Projects = () => {
    return (
        <InfoSection InfoData={InfoDataProjects} StyleFunc={()=>{}} />
    )
}
export default Projects
