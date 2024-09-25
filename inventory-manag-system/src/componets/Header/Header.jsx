import React from "react";
import "./Header.css";

import Logo from "../../assets/logo.png";

function Header() {
  return (
    <nav className="header-navbar">
      <div className="logo-section">
        <img src={Logo} alt="Logo" className="Logo" />
        <h3 className="head">Inventory Management System</h3>
      </div>
      <div className="menu-list">
        <ul className="menu">
          <li>Home</li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
