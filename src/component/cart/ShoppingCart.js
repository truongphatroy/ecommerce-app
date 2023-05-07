import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { FcLeft, FcRight } from "react-icons/fc";
import { FiGift } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

import { addCart, deletteCart } from "../../store/actions/action";

import classes from "./ShoppingCart.module.scss";
import { saveToStorage, keyOfCartList } from "../../storage/storage";

const ShoppingCart = () => {
  const [show, setShow] = useState(false);
  const handleSignIn = () => {
    navigate("/signin");
    setShow(false);
  };
  const handleCheckout = () => {
    navigate("/checkout");
    setShow(false);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    console.log("aaaa", activeUserInfor.stateLogin);
    if (activeUserInfor.stateLogin) {
      navigate("/checkout");
    } else {
      // alert("do you want register a user before checkout");
      setShow(true);
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoShop = () => {
    navigate("/shop");
  };
  const handleGoCheckout = () => {
    console.log(activeUserInfor);
    console.log("thong tin chekc state", statecheck);

    if (activeUserInfor.statusLogin) {
      navigate("/checkout");
    } else {
      alert("do you want register a user before checkout");
    }
  };
  const statecheck = useSelector((state) => state);
  console.log("thong tin chekc state", statecheck);
  const activeUserInfor = useSelector((state) => state.Login);
  console.log("thong tin chekc user state", activeUserInfor);

  const cartList = useSelector((state) => state?.Cart);
  console.log("thong tin cart", cartList);
  const cartItems = cartList?.items;
  console.log(cartItems);

  const cartTotalAmount = useSelector((state) => state?.Cart?.totalAmount);
  console.log(cartTotalAmount);
  const handleDecrease = (cartItem) => {
    if (cartItem?.amount > 1) {
      console.log(cartItem);
      let updatedItem = {
        ...cartItem,
        amount: -1,
        productTotalAmount: 0,
      };
      console.log(updatedItem);

      dispatch(addCart(updatedItem));
    }
  };

  const handleIncrease = (cartItem) => {
    if (cartItem?.amount < 20) {
      let updatedItem = {
        ...cartItem,
        amount: 1,
        productTotalAmount: 0,
      };
      dispatch(addCart(updatedItem));
    }
  };

  const handleDeleteProduct = (cartItem, indexItem) => {
    console.log("index", cartItems, cartItem, indexItem);
    let newCartItem = cartItems?.splice(indexItem, 1);
    console.log(newCartItem);
    dispatch(deletteCart(cartItem));
  };

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
                {cartItems?.map((cartItem, indexItem) => (
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
                    <td
                      className='text-center align-middle text-secondary fw-light'
                      style={{ width: "120px" }}
                    >
                      {parseInt(cartItem?.price).toLocaleString("vi-VN")} VND
                    </td>
                    <td className='text-center align-middle'>
                      <div className='d-flex align-items-center me-2'>
                        <AiFillCaretLeft
                          className={classes.btnStyle}
                          onClick={() => handleDecrease(cartItem)}
                        />
                        <span
                          className='ms-2 me-2 mx-auto'
                          style={{ width: "30px" }}
                        >
                          {cartItem?.amount}
                        </span>
                        <AiFillCaretRight
                          className={classes.btnStyle}
                          onClick={() => handleIncrease(cartItem)}
                        />
                      </div>
                    </td>
                    <td
                      className='text-center align-middle text-secondary fw-light '
                      style={{ width: "120px" }}
                    >
                      {parseInt(cartItem?.productTotalAmount).toLocaleString(
                        "vi-VN"
                      )}{" "}
                      VND
                    </td>
                    <td className='text-center align-middle'>
                      <div className='text-center align-middle'>
                        <RiDeleteBin6Line
                          className={classes.btnStyle}
                          onClick={() =>
                            handleDeleteProduct(cartItem, indexItem)
                          }
                        />
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

              {/* Go to Checkout page or sign in */}
              <Button
                variant='primary'
                className='border-0 bg-light text-dark'
                onClick={handleShow}
              >
                <span className='me-2'>Proceed to checkout</span>
                <FcRight />
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Check information User</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to Checkout without Login?</Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={handleSignIn}>
                    Sign In
                  </Button>
                  <Button variant='primary' onClick={handleCheckout}>
                    Checkout
                  </Button>
                </Modal.Footer>
              </Modal>
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
