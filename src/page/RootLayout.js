import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../UI/navbar/Navbar";
import Footer from "../UI/footer/Footer";
import Livechat from "../UI/livechat/Livechat";
import { Wrapper } from "../UI/Wrapper";
import { useDispatch } from "react-redux";
import {
  restoreActiveStatus,
  updateCart,
  getData,
  signin,
  addCart,
} from "../store/actions/action";
import { getFromStorage, keyOfActiveUser } from "../storage/storage";
import { checkRestoreUser } from "../storage/checkUser";

const RootLayout = () => {
  console.log("33 rootlayout");
  const dispatch = useDispatch();

  // update active user every time refresh
  const activeInfor = getFromStorage(keyOfActiveUser) || false;
  useEffect(() => {
    console.log("activeInfor", activeInfor);

    // check active info of last time in Local storage
    if (activeInfor) {
      console.log("activeInfor", activeInfor);

      // check user existing and delete password before save to Local storage
      if (checkRestoreUser(activeInfor)) {
        console.log("33 rootlayout checkRestoreUser");

        const user = checkRestoreUser(activeInfor);
        // restore active user
        dispatch(signin(user));
        // Restore cart in local storage
        if (getFromStorage(`CartList__${user?.email}`)) {
          const updatedCart = getFromStorage(`CartList__${user?.email}`);
          console.log("33 rootlayout restore cart");

          dispatch(updateCart(updatedCart));
        }
      }
    }
    // restore undefined user
    else {
      // console.log("33 rootlayout restore undefined cart");
      const undefindedLocalCart = getFromStorage("CartList__undefined");
      if (undefindedLocalCart) {
        dispatch(updateCart(undefindedLocalCart));
      }
    }

    // last time was not signed in yet
  }, []);

  return (
    <div>
      <Wrapper>
        <Navbar />
        <Outlet />
      </Wrapper>
      <Livechat />

      <Footer />
    </div>
  );
};

export default RootLayout;
