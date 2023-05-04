import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../UI/navbar/Navbar";
import Footer from "../UI/footer/Footer";
import { Wrapper } from "../UI/Wrapper";
import { useDispatch } from "react-redux";
import { restoreActiveStatus, restoreUserCart } from "../store/actions/action";
import { activeInfor, getFromStorage } from "../storage/storage";

const RootLayout = () => {
  console.log("33 rootlayout");
  const dispatch = useDispatch();
  // update active status every time start
  useEffect(() => {
    if (activeInfor) {
      // restore active user
      dispatch(restoreActiveStatus(activeInfor));

      // Restore cart in local storage
      const keyOfexistingLocalCart = `CartList__${activeInfor.email}`;

      const existingLocalCart = getFromStorage(keyOfexistingLocalCart);

      if (existingLocalCart) {
        dispatch(restoreUserCart(existingLocalCart));
      }
    } else {
      // Restore non-active user's cart in local storage
      const keyOfexistingLocalCart = `CartList__undefined`;

      const existingLocalCart = getFromStorage(keyOfexistingLocalCart);

      if (existingLocalCart) {
        dispatch(restoreUserCart(existingLocalCart));
      }
    }
  }, [activeInfor]);

  return (
    <>
      <div>
        <Wrapper>
          <Navbar />
          <Outlet />
        </Wrapper>
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
