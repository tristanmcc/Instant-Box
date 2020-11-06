// React core
import React from "react";
import {Link} from 'react-router-dom';

// Media assets
import logo from "../../assets/Package_logo.png";

//CSS
import header from "../../css/modules/header.css";

export default function Header() {
  // Render
  return (
    <header className="header">
      <h1>Instant Box
      <a href="#">
        <img src={logo} alt="Logo" />
      </a></h1>
      <ul className ="nav-links">
        <Link className= "navStyle" to="/">
        <li>Home</li>
        </Link>
        <Link className= "navStyle" to= "/Search">
        <li>Packages</li>
        </Link>
      </ul>

      {/*<div className="search-bar">
        <input placeholder="Search" />
        <a to="/search-page"><button>Search</button></a>
  </div>*/}
    </header>
  );
}

