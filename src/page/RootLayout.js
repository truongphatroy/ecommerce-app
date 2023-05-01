import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../UI/navbar/Navbar";
import Footer from "../UI/footer/Footer";
import { Wrapper } from "../UI/Wrapper";

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
