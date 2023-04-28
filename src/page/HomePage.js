import React from "react";
import Banner from "../component/Banner";
import Category from "../component/Category";
import ListImage from "../component/ListImage";
import OtherInfo from "../component/OtherInfo";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Category />
      <ListImage />
      <OtherInfo />
    </div>
  );
};

export default HomePage;
