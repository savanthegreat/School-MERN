import React from "react";
import "./Header.css";
import headerlogo from "../../images/headerlogo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    // <div className="header" id="myHeader">
    //   <img src={headerlogo} alt="School Name" className="headerImage" />
    // </div>
    // <Router>
    <div className="header">
      <a href="#default" className="logo">
        <img src={headerlogo} alt="School Name" className="headerImage" />
      </a>
      <div className="header-left">
        <h3>Welcome to Sharda Vidhya Mandir School!</h3>
      </div>

      <div className="header-right">
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
    // </Router>
  );
}

export default Header;
