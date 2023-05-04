import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { FcLeft, FcRight } from "react-icons/fc";
import { FiGift } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import classes from "./ShoppingCart.module.scss";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const handleGoShop = () => {
    navigate("/shop");
  };
  const handleGoCheckout = () => {
    navigate("/checkout");
  };
  const statecheck = useSelector((state) => state);
  console.log("thong tin chekc state", statecheck);
  const cartList = useSelector((state) => state?.Cart);
  console.log("thong tin cart", cartList);
  const cartItems = cartList?.items;
  console.log(cartItems);

  const cartTotalAmount = useSelector((state) => state?.Cart?.totalAmount);
  console.log(cartTotalAmount);

  return (
    <div>
      <h4 className='mt-5 mb-3'>SHOPPING CART</h4>
      <div className={classes.shopCart}>
        {/* detail table */}
        <div className='row'>
          <div className='col-lg-8 '>
            {/* <table className='table table-borderless'> */}
            <table className='table table-border'>
              <thead className=''>
                <tr className='bg-light'>
                  <th scope='col' className='text-center fw-bold'>
                    IMAGE
                  </th>
                  <th scope='col' className='text-center fw-bold'>
                    PRODUCT
                  </th>
                  <th scope='col' className='text-center fw-bold'>
                    PRICE
                  </th>
                  <th scope='col' className='text-center fw-bold'>
                    QUANTITY
                  </th>
                  <th scope='col' className='text-center fw-bold'>
                    TOTAL
                  </th>
                  <th scope='col' className='text-center fw-bold'>
                    REMOVE
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems?.map((cartItem) => (
                  <tr
                    key={cartItem?.product}
                    className='text-center align-middle'
                  >
                    <th scope='row'>
                      {" "}
                      <img
                        className={classes.banner}
                        style={{
                          backgroundImage: `url(${cartItem?.img})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          width: "4rem",
                          height: "5rem",
                        }}
                      />
                    </th>
                    <td className='text-center align-middle'>
                      {cartItem?.product}
                    </td>
                    <td className='text-center align-middle text-secondary fw-light'>
                      {parseInt(cartItem?.price).toLocaleString("vi-VN")} VND
                    </td>
                    <td className='text-center align-middle'>
                      <div className='d-flex align-items-center me-2'>
                        <AiFillCaretLeft />
                        <span className='d-flex align-items-center ms-2 me-2'>
                          {cartItem?.amount}
                        </span>
                        <AiFillCaretRight />
                      </div>
                    </td>
                    <td className='text-center align-middle text-secondary fw-light'>
                      {parseInt(cartItem?.productTotalAmount).toLocaleString(
                        "vi-VN"
                      )}{" "}
                      VND
                    </td>
                    <td className='text-center align-middle'>
                      <div className='text-center align-middle'>
                        <RiDeleteBin6Line />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

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
              <p className='fw-lighter fs-6'>SUBTOTAL</p>
              <p className='fw-lighter fs-8'>
                {parseInt(cartTotalAmount).toLocaleString("vi-VN")} VND
              </p>
            </div>
            <div className='d-flex justify-content-between border-top pt-3 mb-3'>
              <p className='fw-normal fs-6'> TOTAL</p>
              <p className='fw-normal fs-6'>
                {parseInt(cartTotalAmount).toLocaleString("vi-VN")} VND
              </p>
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
