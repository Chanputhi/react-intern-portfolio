
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Education from './components/Education';
import Project from './components/Project';
import Post from './components/Post';

function App() {
  return (
    
    <Routes>
        <Route path="/" element={ <NavBar />} >
        {/* <Route path="/" element={ <div>hi</div>} > */}

          <Route index element={<HomePage />} />
          <Route path="education" element={<Education />} />
          <Route path="project" element={<Project />} />
          <Route path="post" element={<Post />} /> 
          <Route path="*" element={<div>nothing</div>} />
        </Route>

      </Routes>

    
  );
}

export default App;
