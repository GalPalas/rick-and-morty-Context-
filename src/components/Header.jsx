import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-light bg-light py-3">
      <div className="container-fluid">
        <h1 className="brand display-6">Rick and Morty</h1>
      </div>
    </nav>
  );
}

export default Header;
