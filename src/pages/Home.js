import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useWindowDimensions  } from 'react-native';

import {Hero} from '../containers/Hero'
import InfoSection from '../containers/InfoSection'
import {InfoDataHome} from '../data/InfoData'

const Home = () => {
    useEffect(() => {
            window.scrollTo(0, 0)
    }, [])
    const PositionInfo = () => {
        const { height, width } = useWindowDimensions();
        return {
            position: 'absolute',
            left: '0',
            top: ((height<1100)?'100vh':'1100px'),
            display: 'block'
        }
    }
    return (<>
        <Hero />
        <InfoSection InfoData={InfoDataHome} StyleFunc={PositionInfo} />
    </>)
}

export default Home
