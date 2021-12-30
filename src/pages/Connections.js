import React from 'react'
import styled from 'styled-components'

import InfoSection from '../containers/InfoSection'
import {InfoDataConnections} from '../data/InfoData'

const Connections = () => {
    return (
        <InfoSection InfoData={InfoDataConnections} StyleFunc={()=>{}} />
    )
}

export default Connections
