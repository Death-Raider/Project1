import React, {useState} from 'react';

import GlobalStyle from './globalStyles'
import {NavBar} from './containers/NavBar'
import {Hero} from './containers/Hero'
import Dropdown from './containers/Dropdown'

import Home from './pages/Home'



const App =()=>{

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => { setIsOpen(!isOpen) }
    return (
        <>
            <GlobalStyle />
            <NavBar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Hero />
            <Home />
        </>
    )
}

export default App
