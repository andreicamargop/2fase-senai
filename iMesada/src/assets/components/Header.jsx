import React from "react";
import "./Header.css";
import Logo from "./Logo";

function Header() {
  return (
    <header className="container-header">
      <Logo />
      <h1>iMesada</h1>
    </header>
  );
}

export default Header;
