import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiFillCaretDown } from "react-icons/ai";
import { activeInfor } from "../../storage/storage";
import classes from "./Navbar.module.scss";

import { deleteDataInStorage, keyOfActiveUser } from "../../storage/storage";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginStatus = useSelector((state) => state.Login.stateLogin);
  const location = useLocation();
  console.log(loginStatus);

  // navigate for Navbar
  const handleNavigate = (event) => {
    switch (event.target.innerHTML) {
      case "Home":
        return navigate("/");
      case "Shop":
        return navigate("shop");
      case "BOUTIQUE":
        return navigate("/");
      case "Cart":
        return navigate("cart");
      case "Login": {
        // if (loginStatus) {
        //   alert("You are active. Please logout before Login!");
        //   return;
        // } else {
        // return navigate("signin");
        // }
        return navigate("signin");
      }
    }
  };

  // logout
  const handleLogout = () => {
    // delete active data in Local storage
    deleteDataInStorage(keyOfActiveUser);
    // update state by redux
    dispatch({ type: "ON_LOGOUT" });
  };

  return (
    <div className={classes.Navbar}>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <button
            type='button'
            onClick={handleNavigate}
            className={location.pathname === "/" ? `${classes.active}` : ""}
          >
            Home
          </button>
        </li>
        <li className={classes.listItem}>
          <button
            type='button'
            onClick={handleNavigate}
            className={location.pathname === "/shop" ? `${classes.active}` : ""}
          >
            Shop
          </button>
        </li>
      </ul>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <button type='button' onClick={handleNavigate}>
            BOUTIQUE
          </button>
        </li>
      </ul>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <button
            type='button'
            onClick={handleNavigate}
            className={location.pathname === "/cart" ? `${classes.active}` : ""}
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
              <path d='M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64H48c8.8 0 16 7.2 16 16V368c0 44.2 35.8 80 80 80h18.7c-1.8 5-2.7 10.4-2.7 16c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16H450.7c-1.8 5-2.7 10.4-2.7 16c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H144c-8.8 0-16-7.2-16-16V80C128 35.8 92.2 0 48 0H32zM192 80V272c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H464V176c0 5.9-3.2 11.3-8.5 14.1s-11.5 2.5-16.4-.8L400 163.2l-39.1 26.1c-4.9 3.3-11.2 3.6-16.4 .8s-8.5-8.2-8.5-14.1V32H240c-26.5 0-48 21.5-48 48z' />
            </svg>
            <span>Cart</span>
          </button>
        </li>
        <li className={classes.listItem}>
          <button
            type='button'
            onClick={handleNavigate}
            className={
              location.pathname === "/login" ? `${classes.active}` : ""
            }
          >
            <svg
              className={classes.svgLogin}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
            >
              <path d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z' />
            </svg>
            {/* change style when loginning or not */}
            {!loginStatus ? (
              <span>Login</span>
            ) : (
              <span>{activeInfor.fullName}</span>
            )}
            <span>{loginStatus && <AiFillCaretDown />}</span>
          </button>
        </li>
        {loginStatus && (
          <li className={classes.listItem}>
            <button
              type='button'
              onClick={handleLogout}
              className={
                location.pathname === "/login" ? `${classes.active}` : ""
              }
            >
              <span>( Logout )</span>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
