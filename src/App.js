import React, {useState} from 'react';
import {NavBar} from './containers/NavBar'
import {Hero} from './containers/Hero'
import {BrowserRouter as Router} from 'react-router-dom'
import Dropdown from './containers/Dropdown'
import GlobalStyle from './globalStyles'
const App =()=>{

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => { setIsOpen(!isOpen) }
    return (
        <>
            <GlobalStyle />
            <NavBar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Hero />
        </>
    )
}

export default App
