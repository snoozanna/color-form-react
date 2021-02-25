import React from "react";
import logo from "./../../logo_q.png";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <header className="Header-header">
        <div className="title-wrapper">
          {" "}
          <h1>Whats your favourite colour?</h1>
        </div>
      </header>
    </div>
  );
}

export default Header;
