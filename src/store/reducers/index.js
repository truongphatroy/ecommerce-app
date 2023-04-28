/* Combine reducer function to the rootReducer */

import { combineReducers } from "redux";
import { reducerListImage, reducerPopup } from "./reducer";

const rootReducer = combineReducers({
  ListImageInfo: reducerListImage,
  Popup: reducerPopup,
});

export default rootReducer;
