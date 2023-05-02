/* Combine reducer function to the rootReducer */

import { combineReducers } from "redux";
import {
  reducerProductList,
  reducerPopup,
  reducerShowDetail,
  reducerLogin,
  reducerCart,
} from "./reducer";

const rootReducer = combineReducers({
  ProductList: reducerProductList, // For image list (call API)
  Popup: reducerPopup, // For Popup
  ShowDetail: reducerShowDetail, // For Show detail of product
  Login: reducerLogin, // For login status
  Cart: reducerCart, // for Cart
});

export default rootReducer;
