import React from 'react';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Stack from './pages/Stack.js';
import Project from './pages/Project.js';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
