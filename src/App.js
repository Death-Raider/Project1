import React, {useState} from 'react';
import {NavBar} from './containers/NavBar'
import {Hero} from './containers/Hero'
import InfoSection from './containers/InfoSection'
import Dropdown from './containers/Dropdown'
import {BrowserRouter as Router} from 'react-router-dom'
import GlobalStyle from './globalStyles'
import {InfoData} from './data/InfoData'
const App =()=>{

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => { setIsOpen(!isOpen) }
    return (
        <>
            <GlobalStyle />
            <NavBar toggle={toggle} />
            <Hero />
            <InfoSection {...[InfoData]} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
        </>
    )
}

export default App
