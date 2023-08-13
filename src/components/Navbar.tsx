import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo">
          TinyPost
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/auth">Authenticate</Link>
          </li>
          <li>
            <Link to="/select-images">Select Images</Link>
          </li>
          <li>
            <Link to="/scheduled-posts">Scheduled Posts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
