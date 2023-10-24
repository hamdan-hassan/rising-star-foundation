import React, { useState } from "react";
import "../styles/Navbar.css"; // Import your CSS file
import logo from "../assets/felicia2.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} height={70} width={70} />
      </div>
      <div class="navbar-brand">Rising Star Foundation</div>
      <div className={`menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
          </li>
          <NavLink to="/apprenticeship" className="nav-link">
            Apprenticeship
          </NavLink>
          <NavLink to="/business-startup" className="nav-link">
            Business Startup
          </NavLink>
          <NavLink to="/education-support" className="nav-link">
            Education Support
          </NavLink>
          <NavLink to="/skills-training" className="nav-link">
            Skills Training
          </NavLink>
        </ul>
      </div>
      <div
        className={`menu-icon ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
