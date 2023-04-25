import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Wrapper } from "../component/Wrapper";

const RootLayout = () => {
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
