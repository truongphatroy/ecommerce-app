/* Combine reducer function to the rootReducer */

import { combineReducers } from "redux";
import {
  reducerProductList,
  reducerPopup,
  reducerShowActiveUser,
  reducerShowDetail,
  reducerLogin,
  reducerCart,
} from "./reducer";

const rootReducer = combineReducers({
  ProductList: reducerProductList, // For image list (call API)
  Popup: reducerPopup, // For Popup
  ActiveUserInfo: reducerShowActiveUser, // For show detail active user
  ShowDetail: reducerShowDetail, // For Show detail of product
  Login: reducerLogin, // For login status
  Cart: reducerCart, // for Cart
});

export default rootReducer;
