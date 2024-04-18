import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import MyNavbar from './Components/Navbar';
import JiuJitsu from './Components/JiuJitsu';
import MuayThai from './Components/MuayThai';
import Kids from './Components/Kids';
import CoverPhoto from './Components/CoverPhoto';
import './App.css';
import LoginPrompt from './Components/LoginPrompt';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function App() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const hardcodedUsername = 'teamacademy';
  const hardcodedPassword = 'operanonverba';

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (storedUsername === hardcodedUsername && storedPassword === hardcodedPassword) {
      setIsLoggedIn(true);
    } else {
      setShowPrompt(true);
    }
  }, []);

  const handleClosePrompt = () => {
    setShowPrompt(false);
    setIsLoggedIn(true);
    localStorage.setItem('username', hardcodedUsername);
    localStorage.setItem('password', hardcodedPassword);
  };

  const handleLogin = (username, password) => {
    if (username === hardcodedUsername && password === hardcodedPassword) {
      setShowPrompt(false);
      setIsLoggedIn(true);
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleAddTechnique = async (newTechnique) => {
    try {
      await axios.post('https://65e8adc04bb72f0a9c501d0d.mockapi.io/api/week12/techniques', newTechnique);
    } catch (error) {
      console.error('Error adding house:', error);
    }
  };

  return (
    <div className="App">
      <LoginPrompt 
        isOpen={showPrompt && location.pathname === '/'} 
        onClose={handleClosePrompt} 
        onLogin={handleLogin} 
      />
      <MyNavbar />
      <Routes>
        <Route path="/" element={<CoverPhoto />} />
        <Route path="/jiujitsu" element={<JiuJitsu />} />
        <Route path="/muaythai" element={<MuayThai />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>
    </div>
  );
}

export default App;