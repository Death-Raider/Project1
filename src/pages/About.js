import React from 'react'
import styled from 'styled-components'

import InfoSection from '../containers/InfoSection'
import {InfoDataAbout} from '../data/InfoData'

const About = () => {
    return (
        <InfoSection InfoData={InfoDataAbout} StyleFunc={()=>{}} />
    )
}

export default About
