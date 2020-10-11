import React from "react";
import logo from "./../../logo.svg";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <header className="Header-header">
        <img src={logo} className="Header-logo" alt="logo" />
        <h1>My App</h1>
      </header>
    </div>
  );
}

export default Header;
