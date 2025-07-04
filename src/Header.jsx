import React, { useState, useEffect } from "react";
import logo from "./assests/Rectangle.jpg";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="web-logo" />
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Menu */}
        <nav className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" onClick={() => setMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ourTeam" onClick={() => setMenuOpen(false)}>
                Our Team
              </Link>
            </li>
          </ul>
          <div className="contact-us-cont">
          <Link className="contact-us" to="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

