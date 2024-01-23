import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
// import { useState } from "react";
export const Navbar = () => {
  const { isLoggedIn } = useAuth();

  const { user } = useAuth();

  return (
    <>
      <header>
        <NavLink to="/" className="logo">
          <i className="ri-home-heart-fill"></i>
          <span>Trippo</span>
        </NavLink>

        <ul className="navbar" id="navbar">
          <li className="open">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="open">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="open">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="open">
            <NavLink to="/package">Package</NavLink>
          </li>
        </ul>

        <div className="main">
          {isLoggedIn ? (
          <>
            <NavLink to="/logout"  style={{"color":"rgb(193,20,20)"}}>Logout</NavLink>
            <NavLink to="/" style={{"color":"rgb(0,11,108)"}}><i className="ri-shield-user-line" style={{"color":"rgb(0,11,108)"}}></i> {user.username}</NavLink>
          </>
            
          ) : (
            <>
              <NavLink to="/login" className="user">
                <i className="ri-user-fill" />
                Sign In
              </NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </div>
      </header>
    </>
  );
};


