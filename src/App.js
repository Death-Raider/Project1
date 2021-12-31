import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes , Route
} from "react-router-dom";

import GlobalStyle from './globalStyles'
import {NavBar} from './containers/NavBar'
import Dropdown from './containers/Dropdown'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Connections from './pages/Connections'
import Projects from './pages/Projects'
import Project1 from './pages/Project1'
import Project2 from './pages/Project2'
import Project3 from './pages/Project3'


const App =()=>{

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => { setIsOpen(!isOpen) }
    return (
        <>
            <GlobalStyle />
            <NavBar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project1" element={<Project1 />} />
            <Route path="/project2" element={<Project2 />} />
            <Route path="/project3" element={<Project3 />} />
            </Routes>
        </>
    )
}

export default App
