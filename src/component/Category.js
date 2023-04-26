import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Category.module.scss";

import img1 from "../image/product_1.png";
import img2 from "../image/product_2.png";
import img3 from "../image/product_3.png";
import img4 from "../image/product_4.png";
import img5 from "../image/product_5.png";

const Category = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("shop");
  };

  return (
    <div className={classes.CategoryCover}>
      <p>CAREFULLY CREATED COLLECTIONS</p>
      <h1>BROWSE OUR CATEGORIES</h1>
      <div className={classes.Category}>
        <div className={classes.CategoryItem1}>
          <img onClick={handleClick} src={img1}></img>
        </div>
        <div className={classes.CategoryItem2}>
          <img onClick={handleClick} src={img2}></img>
        </div>
        <div className={classes.CategoryItem3}>
          <img onClick={handleClick} src={img3}></img>
        </div>
        <div className={classes.CategoryItem4}>
          <img onClick={handleClick} src={img4}></img>
        </div>
        <div className={classes.CategoryItem5}>
          <img onClick={handleClick} src={img5}></img>
        </div>
      </div>
    </div>
  );
};

export default Category;
