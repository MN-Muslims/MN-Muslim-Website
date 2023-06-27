import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/nav.css';
import Mnmuslims from '../images/minnesota-muslims-logo.jpg';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <img
        src={Mnmuslims}
        alt="Logo"
        className="navbar-logo"
      />
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/directory">Directory</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/login">Admin</a></li>


      </ul>
    </nav>
  );
}

export default Nav;
