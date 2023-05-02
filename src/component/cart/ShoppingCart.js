import React from "react";
import { useNavigate } from "react-router-dom";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { FcLeft, FcRight } from "react-icons/fc";
import { FiGift } from "react-icons/fi";
import classes from "./ShoppingCart.module.scss";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const handleGoShop = () => {
    navigate("/shop");
  };
  const handleGoCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div>
      <h4 className='mt-5'>SHOPPING CART</h4>
      <div className={classes.shopCart}>
        {/* detail table */}
        <div className='row'>
          <div className='col-lg-8 '>
            <ul className='list-group list-group-horizontal text-light bg-light border-0'>
              <li className='list-group-item bg-light border-0'>IMAGE</li>
              <li className='list-group-item bg-light border-0'>PRODUCT</li>
              <li className='list-group-item bg-light border-0'>PRICE</li>
              <li className='list-group-item bg-light border-0'>QUANTITY</li>
              <li className='list-group-item bg-light border-0'>TOTAL</li>
              <li className='list-group-item bg-light border-0'>REMOVE</li>
            </ul>
            <ul className='list-group list-group-horizontal'>
              <li className='list-group-item'></li>
              <li className='list-group-item'></li>
              <li className='list-group-item'>VND</li>
              <li className='list-group-item'>
                <div className='d-flex align-items-center me-2'>
                  <AiFillCaretLeft />
                  <span className='d-flex align-items-center ms-2 me-2'>1</span>
                  <AiFillCaretRight />
                </div>
              </li>
              <li className='list-group-item'></li>
              <li className='list-group-item'></li>
            </ul>
            <div className='d-flex justify-content-between align-items-center bg-light mt-5 py-4'>
              <button onClick={handleGoShop} className='border-0 bg-light'>
                <FcLeft />
                <span className='ms-1'> Continue shopping</span>
              </button>
              <button onClick={handleGoCheckout} className='border-0 bg-light'>
                <span className='me-2'>Proceed to checkout</span>
                <FcRight />
              </button>
            </div>
          </div>
          {/* Card related product */}
          <div className='col-lg-4 bg-light p-lg-5 p-md-2'>
            <h4 className='fw-normal fs-5'>RELATED PRODUCT</h4>
            <div className='d-flex justify-content-between'>
              <p className='fw-light fs-6'>SUBTOTAL</p>
              <p className='fw-light fs-6'> VND</p>
            </div>
            <div className='d-flex justify-content-between border-top pt-3 mb-3'>
              <p className='fw-light fs-6'> TOTAL</p>
              <p className='fw-light fs-6'>VND</p>
            </div>
            <div className=''>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control rounded-0 fw-light'
                  placeholder='Enter your cuppon'
                />
              </div>
              <div className='d-grid'>
                <button
                  className='btn btn-primary rounded-0 bg-dark'
                  type='button'
                >
                  <FiGift />
                  <span className='ms-2 text-light'>Apply cuppon</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.ShowDetailRelation}></div>
      </div>
    </div>
  );
};

export default ShoppingCart;
