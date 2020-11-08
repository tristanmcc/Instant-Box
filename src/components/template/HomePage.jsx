// React core
import React from "react";

// Components
import Header from "../organism/Header";
import Footer from "../organism/Footer";

//Media
import logo from "../../assets/Package_logo.png";
import locker from "../../assets/locker-graphic.png";

//CSS
import css from "../../css/templates/homePage.css";


export default function HomePage() {
  return (
    <div className="site">
      <Header />
      <h1 className = "title">Home</h1>
      <div  className="homePage">
      <h2 className = "intro">What is Instant Box?</h2>
      <div className= "content">
      <p>Instant box is a shipping service available in selected online stores. We ship your package to one of our hundreds of smart cabinets, usually the same day you place the order.</p>
      </div>
      <a className = "images" href ="#">
          <img className ="logo" src={logo} alt="Logo" />
          <img className ="locker" src={locker} alt="Lockers" />
      </a>
<h3 className="intro">How does it work?</h3>
    <ul className="content">
    <li>1. Select Instant box at the checkout of your favorite store.</li>
    <li>2. We send an SMS with tracking link and PIN code.</li>
    <li>3. You pick up your package with the PIN code, without having to stand in line at the postal agent for a single second.</li>
    </ul>
    </div>
    <Footer/>
    </div>
  );
}