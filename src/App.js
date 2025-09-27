import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <h1>Welcome to my app!</h1>
        <p>This content won't be hidden behind the navbar.</p>
      </div>
    </>
  );
}

export default App;
