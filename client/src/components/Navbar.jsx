import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {

  function logout() {
    window.open('http://localhost:5000/auth/logout', '_self')
  }

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" className="link">
          My App
        </Link>
      </div>

      {props.user ? (
        <div className="navbarRightItem">
          <div className="navbarProfile">
            <div className="navbarProfile-image">
              <img
                src={props.user.photos[0].value}
                alt=""
              />
            </div>
            <div className="navbarProfile-name">{props.user.displayName}</div>
          </div>
          <div className="navbarAuth" onClick={logout}>Logout</div>
        </div>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};
