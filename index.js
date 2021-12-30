import React from 'react'
import ReactDOM from 'react-dom'
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
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
