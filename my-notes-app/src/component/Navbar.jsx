import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/daftar-catatan">Daftar Catatan</Link>
        </li>
        <li>
            <Link to="/Users">Users</Link>
        </li>
        <li>
            <Link to="/post">post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
