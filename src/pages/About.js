import React, {useEffect} from 'react'
import styled, {css} from 'styled-components'
import {Button} from '../containers/Button'
import InfoSection from '../containers/InfoSection'
import {InfoDataAbout} from '../data/InfoData'

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <InfoSection InfoData={InfoDataAbout} StyleFunc={()=>{}} />
    )
}

export default About
