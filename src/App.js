//import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Profile from './Profile';
import Navbar from './Navbar';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar /> 
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Signup/>}></Route>
         
          
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;