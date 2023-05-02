import React from "react";
import { useNavigate } from "react-router-dom";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { FcLeft, FcRight } from "react-icons/fc";
import { FiGift } from "react-icons/fi";
import classes from "./CheckoutCart.module.scss";

const CheckoutCart = () => {
  const navigate = useNavigate();
  const handleGoShop = () => {
    navigate("/shop");
  };
  const handleGoCheckout = () => {
    navigate("/");
  };
  return (
    <div>
      <h4 className='mt-5'>BILLING DETAILS</h4>
      <div className={classes.shopCart}>
        {/* detail table */}
        <div className='row'>
          <div className='col-lg-8 '>
            <form className='row g-3 text-secondary'>
              <div className='col-12'>
                <label for='inputAddress' className='form-label'>
                  FULL NAME:
                </label>
                <input
                  style={{ fontStyle: "normal" }}
                  type='text'
                  className='form-control fw-light'
                  placeholder='Enter Your Full Name Here!'
                />
              </div>
              <div className='col-12'>
                <label for='inputAddress2' className='form-label'>
                  EMAIL:
                </label>
                <input
                  style={{ fontStyle: "normal" }}
                  type='text'
                  className='form-control fw-light'
                  placeholder='Enter Your Email Here!'
                />
              </div>

              <div className='col-12'>
                <label for='inputAddress2' className='form-label'>
                  PHONE NUMBER:
                </label>
                <input
                  style={{ fontStyle: "normal" }}
                  type='text'
                  className='form-control fw-light '
                  placeholder='Enter Your Phone Number Here!'
                />
              </div>
              <div className='col-12'>
                <label for='inputAddress2' className='form-label'>
                  ADDRESS:
                </label>
                <input
                  style={{ fontStyle: "normal" }}
                  type='text'
                  className='form-control fw-light'
                  placeholder='Enter Your Address Here!'
                />
              </div>
              <div className='col-12'>
                <button
                  type='button'
                  className='btn btn-dark rounded-0 text-light'
                >
                  Place order
                </button>
              </div>
            </form>
          </div>
          {/* Card related product */}
          <div className='col-lg-4 bg-light p-lg-4 p-md-2'>
            <h4 className='fw-normal fs-5 mt-4'>YOUR ORDER</h4>
            <div className='d-flex justify-content-between'>
              <p className='fw-light fs-6 fw-normal'>Apple iPhone 11</p>
              <p className='fw-light fs-6'> VND</p>
            </div>
            <div className='d-flex justify-content-between border-top pt-2 mb-2'>
              <p className='fw-light fs-6 fw-normal'>Apple iPhone 11</p>
              <p className='fw-light fs-6'> VND</p>
            </div>
            <div className='d-flex justify-content-between border-top pt-2 mt-4'>
              <p className='fw-light fs-6 fw-normal '> TOTAL</p>
              <p className='fw-light fs-6'>VND</p>
            </div>
          </div>
        </div>
        <div className={classes.ShowDetailRelation}></div>
      </div>
    </div>
  );
};

export default CheckoutCart;
