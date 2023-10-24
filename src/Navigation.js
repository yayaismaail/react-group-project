import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import logo from './images/logo.png';

const Navigation = () => (
  <>
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Space Travellers Hub Logo" className="logo" />
        <span className="space-hub">Space Travellers Hub</span>
      </div>
      <nav className="nav-bar">
        <ul className="nav-lists">
          <li className="items-list">
            <NavLink to="/">Rocket</NavLink>
          </li>
          <li className="items-list">
            <NavLink to="/missions">Missions</NavLink>
          </li>
          <li className="items-list">
            <NavLink to="/dragons">Dragons</NavLink>
          </li>
          <li className="items-list">
            <NavLink to="/profile">My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <div className="hr" />
  </>
);
export default Navigation;
