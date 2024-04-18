import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import logo from '../Images/academylogo.png';
import '../App.css'

const MyNavbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/">
            <img src={logo} alt="brand-logo"></img>
          </a>
        </div>
        <div className="navbar-links">
          <ul>
            <li><Link to="/jiujitsu">Jiu Jitsu</Link></li>
            <li><Link to="/muaythai">Muay Thai</Link></li>
            <li><Link to="/kids">Kids</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default MyNavbar;