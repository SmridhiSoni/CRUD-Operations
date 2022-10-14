import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo1 from "../layout/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
        <NavLink className="nav-link" exact to="/">
        <img src ={logo1} width="50" height="50"/>
              </NavLink>
        </Link>
        {/* <li className="nav-item">
              <NavLink className="nav-link" exact to="/Home">
              <img src ={logo} width="70" height="70"/>
              </NavLink>
            </li> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">huhhhhh</span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Register">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Signup">
                Signup
              </NavLink>
            </li>
          </ul>
        </div>

        <Link className="btn btn-outline-light" to="/users/addUser">Add User</Link>
      </div>
    </nav>
  );
};

export default Navbar;