/* Combine reducer function to the rootReducer */

import { combineReducers } from "redux";
import { reducerProductList, reducerPopup, reducerShowDetail } from "./reducer";

const rootReducer = combineReducers({
  ProductList: reducerProductList, // For image list (call API)
  Popup: reducerPopup, // For Popup
  ShowDetail: reducerShowDetail, // For Show detail of product
});

export default rootReducer;
