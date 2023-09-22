import React from 'react';

import { Home } from './pages/index.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App