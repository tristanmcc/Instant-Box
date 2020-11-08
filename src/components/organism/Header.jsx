// React core
import React from "react";
import { Link } from "react-router-dom";

// Media assets
import logo from "../../assets/Package_logo.png";

//CSS
import header from "../../css/modules/header.css";

export default function Header() {
  // Render
  return (
    <header className="header">
      <h1>
        Instant Box
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
      </h1>
      
      {/* Navigation links in header to switch between pages using react router dom */}
      <ul className="nav-links">
        <Link className="navStyle" to="/">
          <li>Home</li>
        </Link>
        <Link className="navStyle" to="/Packages">
          <li>All Packages</li>
        </Link>
        <Link className="navStyle" to="/Search">
          <li>Search</li>
        </Link>
      </ul>
    </header>
  );
}
