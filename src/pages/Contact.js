import React from 'react'
import styled from 'styled-components'

import InfoSection from '../containers/InfoSection'
import {InfoDataContact} from '../data/InfoData'

const Contact = () => {
    return (
        <InfoSection InfoData={InfoDataContact} StyleFunc={()=>{}} />
    )
}

export default Contact
