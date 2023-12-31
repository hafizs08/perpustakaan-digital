import React from "react";
import { Link } from "react-router-dom";
import { Button, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useUser } from './UserContext';

const Navbar = () => {
  const { user, logout } = useUser();

  return (
    <div className="ui fluid container secondary menu">
      <Link to="/" className="active item">
        Home
      </Link>
      <Link to="/Rating" className="item">
        Rating
      </Link>
      <Link to="/TambahBuku" className="item">
        Tambah Buku
      </Link>
      <Link to="/Peminjaman" className="item">
        Peminjaman
      </Link> 
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
        {user ? (
          <button onClick={logout} className="ui item">
            Logout
          </button>
        ) : (
          <Link to="/login" className="ui item">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
