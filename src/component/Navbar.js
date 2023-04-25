import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    // <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <nav className='navbar navbar-expand navbar-light bg-light'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                aria-current='page'
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `nav-item ${classes.active}` : "nav-item"
                }
                to='shop'
              >
                Shop
              </NavLink>
            </li>
          </ul>
          {/* <ul className='navbar-nav mb-2 mb-lg-0'> */}
          <ul className='navbar-nav mb-2'>
            <li className='nav-item'>
              <NavLink className='nav-link ' aria-current='page' to='cart'>
                Cart
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link ' aria-current='page' href='#'>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
