import React from "react";
import ShopBanner from "./ShopBanner";
import ProductShow from "./ProductShow";
import classes from "./ProductList.module.scss";
const ProductList = () => {
  return (
    <div>
      <ShopBanner />
      <ProductShow />
    </div>
  );
};

export default ProductList;
