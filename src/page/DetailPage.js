import React from "react";
import { useSelector } from "react-redux";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import ProductShowCard from "../component/shop/ProductShowCard";
import classes from "./DetailPage.module.scss";
const DetailPage = () => {
  const selectedProductCategory = useSelector(
    (state) => state?.ShowDetail?.category
  );
  const selectedProductId = useSelector((state) => state?.ShowDetail?.itemId);
  const productList = useSelector((state) => state?.ProductList?.ListImage);
  console.log(productList);
  console.log(selectedProductCategory);
  // console.log(selectedProductId);

  const selectedProduct = productList?.find(
    (product) => product?._id?.$oid === selectedProductId
  );
  const productDescription = selectedProduct?.long_desc;

  const productRelateList = productList?.filter(
    (product) =>
      product?.category === selectedProductCategory &&
      product?._id.$oid !== selectedProductId
  );

  const productPrice = parseInt(selectedProduct?.price).toLocaleString("vi-VN");

  let quantity = 1;

  if (selectedProduct) {
    return (
      <div className='container mt-5'>
        <div className='row '>
          <div className='col-md-1 col-lg-1 p-0 d-flex'>
            <div className=' align-self-center'>
              <img className={classes.smallImage} src={selectedProduct.img1} />
              <img className={classes.smallImage} src={selectedProduct.img2} />
              <img className={classes.smallImage} src={selectedProduct.img3} />
              <img className={classes.smallImage} src={selectedProduct.img4} />
            </div>
          </div>
          <div className='col-md-6 col-lg-5 '>
            <img className={classes.bigImage} src={selectedProduct.img1} />
          </div>
          <div className='col-md-5 col-lg-6 '>
            <h4>{selectedProduct.name}</h4>
            <p className='fw-light fs-6'>{productPrice} VND</p>
            <p className='fw-light fs-6'>{selectedProduct.short_desc}</p>
            <p className=''>
              CATEGORY:{` `}
              <span className='fw-light'>{selectedProduct.category}</span>
            </p>
            <div className='input-group mt-5 mb-3 '>
              <div className='d-flex align-items-center border border-secondary'>
                <input
                  style={{ maxWidth: "150px" }}
                  type='text'
                  className='form-control border-0'
                  placeholder='QUANTITY'
                  aria-label="Recipient's username"
                  aria-describedby='basic-addon2'
                ></input>
                <div className='d-flex align-items-center me-2'>
                  <AiFillCaretLeft />
                  <span className='d-flex align-items-center ms-2 me-2'>
                    {quantity}
                  </span>
                  <AiFillCaretRight />
                </div>
              </div>
              <span
                className='input-group-text bg-dark text-light fw-light'
                id='basic-addon2'
              >
                Add to cart
              </span>
            </div>
          </div>
        </div>
        <div className=''>
          <button
            type='button'
            className='btn btn-dark rounded-0 mt-4 fw-light'
          >
            DESCRIPTION
          </button>
          <h4 className='fw-normal mt-3 fs-5'>PRODUCT DESCRIPTION</h4>
          <p className='fw-light lh-1' style={{ whiteSpace: "pre-line" }}>
            {productDescription}
          </p>
        </div>
        <div className={classes.ShowDetailRelation}>
          <h4 className='fw-normal mt-5 fs-5'>RELATED PRODUCT</h4>
          <ProductShowCard numberOfCard={4} imageList={productRelateList} />
        </div>
      </div>
    );
  }
};
export default DetailPage;
