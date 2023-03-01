import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <Link className="menu-item" to="/">
          Home
        </Link>
        <Link className="menu-item" to="/friends">
          Friends
        </Link>
        <Link className="menu-item" to="/about">
          About
        </Link>
        <Link className="menu-item" to="/posts">
          Posts
        </Link>
      </nav>
    </div>
  );
};

export default Header;
