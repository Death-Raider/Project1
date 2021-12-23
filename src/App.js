import React from 'react';
import {NavBar} from './containers/NavBar'
import {Hero} from './containers/Hero'
import {BrowserRouter as Router} from 'react-router-dom'
import GlobalStyle from './globalStyles'
const App =()=>{
    return (
        <>
            <GlobalStyle />
            <NavBar />
            <Hero />
        </>
    )
}

export default App
