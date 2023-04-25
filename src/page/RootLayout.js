import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const RootLayout = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
