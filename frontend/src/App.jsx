import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from './components/Loginpage';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/home" element={<HomePage />} />
          {/* Add more routes here as we create more pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;