import { combineReducers } from "redux";
import reducerListImage from "./reducer";

const rootReducer = combineReducers({
  ListImageInfo: reducerListImage,
});

export default rootReducer;
