import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { User } from "../../storage/User";
import { restoreUserCart, signin } from "../../store/actions/action";
import {
  saveToStorage,
  keyOfActiveUser,
  getFromStorage,
} from "../../storage/storage";
import classes from "./Signin.module.scss";
import bannerImage from "../../image/banner1.jpg";

const Signin = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  // const LoginStatus = useSelector((state) => state.Login.loginStatus);
  const LoginStatus = useSelector((state) => state);

  // Validate input function
  function validate(newUser) {
    let isValidate = true;
    let error = "";

    // email was input or not
    if (newUser?.email?.trim().length === 0) {
      error += "Email was not entered! ";
      isValidate = false;
    }

    // passwork was input or not
    if (newUser?.password?.trim().length === 0) {
      error += "Password was not entered! ";
      isValidate = false;
    }

    setErrorMessage(error);
    return isValidate;
  }

  // handling action when submit
  const handleSignin = () => {
    const newUser = {
      email: emailRef?.current?.value,
      password: passwordRef?.current?.value,
    };

    // validate input
    const isValidate = validate(newUser);

    // if input is OK
    if (isValidate) {
      let isSignin = false;
      const EnteredUser = new User(
        emailRef.current?.value,
        passwordRef.current?.value,
        isSignin
      );
      //
      console.log(EnteredUser?.signin());
      // if found the EnteredUser in userArr
      // user test@gmail.com
      // pass 123456789
      if (EnteredUser?.signin().isSignin) {
        dispatch(signin(EnteredUser?.signin()?.activeUser));

        const keyOfexistingLocalCart = `CartList__${
          signin(EnteredUser?.signin()).payload.activeUser.email
        }`;

        const existingLocalCart = getFromStorage(keyOfexistingLocalCart);
        console.log("cart on local now", existingLocalCart);

        // Restore cart in local storage
        if (existingLocalCart) {
          dispatch(restoreUserCart(existingLocalCart));
          console.log("OK");
        } else {
          console.log("ng");
        }
        alert("Sign in Successful!");
        navigate("/"); // go to home
      } else {
        setErrorMessage("The entered user is invalid! Please try other.");
      }
    }
  };
  console.log(LoginStatus);

  return (
    <div
      className={classes.banner}
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className={classes.loginCard}>
        <div className='card border-0'>
          <form className='mx-md-4 mx-sm-1 fw-light'>
            <h1 className='text-center fw-light text-secondary mb-4'>
              Sign In
            </h1>
            <input
              ref={emailRef}
              type='text'
              className={`mb-0 fw-light fs-5 pt-3 pb-3 ${classes.inputForm1}`}
              placeholder='Email'
            />
            <input
              ref={passwordRef}
              type='text'
              className={`mb-0 fw-light fs-5 pt-3 pb-3  ${classes.inputForm2}`}
              placeholder='Password'
            />

            <div className='mb-4'></div>
            <div className='d-grid'>
              <button
                onClick={handleSignin}
                className='btn btn-dark text-light py-3 rounded-0 text-uppercase fw-light'
                type='button'
              >
                Sign in
              </button>
              <p className='text-danger fs-6 pt-2'>
                {errorMessage !== "" && errorMessage}
              </p>
              <p className='text-center my-5'>
                Create an account?{" "}
                <Link className={classes.Link} to='/signup'>
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
