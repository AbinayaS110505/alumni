import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../css/App.css';
import img1 from "../img/download.jpeg";

function Navbar() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    setIsZoomed(true);
    setTimeout(() => setIsZoomed(false), 1000); 
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`nav ${menuOpen ? 'active' : ''}`}>
      <div className={`logo ${isZoomed ? 'zoom-logo' : ''}`} onClick={handleLogoClick}>
        <img src={img1} alt="Logo" />
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        &#x2630; 
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><NavLink exact to="/" className="nav-link" activeClassName="active-link">Home</NavLink></li>
        <li><NavLink to="/Contact" className="nav-link" activeClassName="active-link">Contact</NavLink></li>
        <li><NavLink to="/Login" className="nav-link" activeClassName="active-link">Login</NavLink></li>
        <li><NavLink to="/Register" className="nav-link" activeClassName="active-link">Register</NavLink></li>
      </ul>
    </nav>
  );
}
export default Navbar;
