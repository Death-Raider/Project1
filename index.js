import React from 'react'
import ReactDOM from 'react-dom'
// import { Switch , Route } from 'react-router'
import {
  BrowserRouter,
  Routes , Route
} from "react-router-dom";

import App from './src/App';
import About from './src/pages/About'
import Contact from './src/pages/Contact'
import Connections from './src/pages/Connections'
import Projects from './src/pages/Projects'
import Project1 from './src/pages/Project1'
import Project2 from './src/pages/Project2'
import Project3 from './src/pages/Project3'
import Project4 from './src/pages/Project4'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project1" element={<Project1 />} />
            <Route path="/project2" element={<Project2 />} />
            <Route path="/project3" element={<Project3 />} />
            <Route path="/project4" element={<Project4 />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
