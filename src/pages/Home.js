import React from 'react'
import styled from 'styled-components'

import InfoSection from '../containers/InfoSection'
import {InfoData} from '../data/InfoData'

const Home = () => {
    return (
        <InfoSection {...[InfoData]} />
    )
}

export default Home
