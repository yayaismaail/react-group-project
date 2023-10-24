import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const NavBar = () => (
  <header className="header">
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="" className="logo" />
        <h1>Space Travellers Hub</h1>
      </div>
      <ul className="list-item">
        <li>Rockets</li>
        <li>
          <NavLink to="/mission">Missions</NavLink>
        </li>
        <li>My Profile</li>
      </ul>
    </nav>
  </header>
);

export default NavBar;

// export default NavBar;
