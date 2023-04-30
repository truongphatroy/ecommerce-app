import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, showPopup } from "../../store/actions/action";
import DetailItem from "./DetailItem";
import ProductCard from "./ProductCard";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import classes from "./ListImage.module.scss";

const ListImage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const imageList = useSelector((state) =>
    // access to state of store and get 8 first elements
    state.ListImageInfo?.ListImage?.slice(0, 8)
  );

  const showModal = useSelector((state) => state.Popup.isPopup);
  // console.log(showModal);

  const handleclick = (event, itemId) => {
    console.log(event);
    console.log(itemId);

    // event.preventDefault();

    if (imageList) {
      const selectedItem = imageList.filter((e) => e._id.$oid === event);
      dispatch(showPopup(selectedItem));
    }
  };

  // const handleclick = (event) => {
  //   if (imageList) {
  //     const selectedItem = imageList.filter((e) => e._id.$oid === event);
  //     dispatch(showPopup(selectedItem));
  //   }
  // };

  // use boostrap to render image list
  if (imageList && imageList?.length > 0) {
    return (
      <div className={classes.ListImage}>
        <div className={classes.ListImageTitle}>
          <p>MADE THE HARD WAY</p>
          <h1>TOP TRENDING PRODUCTS</h1>
        </div>
        {/* Show 4 product (4pcs / row) */}
        <ProductCard
          numberOfCard={4}
          imageList={imageList}
          onClick={handleclick}
        />
        {showModal && <DetailItem />}
      </div>
    );
  }
};

export default ListImage;
