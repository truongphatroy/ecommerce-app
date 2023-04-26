import React from "react";
import Banner from "../component/Banner";
import Category from "../component/Category";
import ListItem from "../component/ListItem";
import Other from "../component/Other";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Category />
      <ListItem />
      <Other />
    </div>
  );
};

export default HomePage;
