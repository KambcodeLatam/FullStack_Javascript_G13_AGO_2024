import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="menu">
        <ol>
          <li className="menu-item">
            <Link to='/'>Home</Link>
          </li>
          <li className="menu-item">
            <Link to='/characters'>About</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Navbar;
