// React core
import React from "react";
import { Link } from "react-router-dom";

// Media assets
import logo from "../../assets/Package_logo.png";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

//CSS
import footer from "../../css/modules/footer.css";

export default function Footer() {
  <script
    src="https://kit.fontawesome.com/86134dd369.js"
    crossorigin="anonymous"
  ></script>;

  // Render
  return (
    <body className="Site">
      <footer>
        <div className="socials">
          <span>
            <a className="navStyle" href="http://instagram.com" target="_blank">
              <AiFillInstagram />
              Instagram
            </a>
          </span>
          <span>
            <a className="navStyle" href="https://facebook.com" target="_blank">
              <AiFillFacebook />
              Facebook
            </a>
          </span>
        </div>
      </footer>
    </body>
  );
}
