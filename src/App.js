import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        {/* Your routed content or page content goes here */}
        <h1>Main Content</h1>
      </div>
    </div>
  );
}

export default App;
