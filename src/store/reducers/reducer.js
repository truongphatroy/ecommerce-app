/* CREATE INITIAL VALUE AND REDUCER */

// For image list (call API)
const initialState_ListImage = { ListImage: null, loading: false, error: null };

export const reducerProductList = (state = initialState_ListImage, action) => {
  switch (action.type) {
    case "FETCH_IMAGE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_IMAGE_SUCCESS":
      return {
        ...state,
        loading: false,
        ListImage: action.payload,
      };
    case "FETCH_IMAGE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// For Popup
const initialState_Popup = { isPopup: false, popupData: null };
export const reducerPopup = (state = initialState_Popup, action) => {
  switch (action.type) {
    case "SHOW_POPUP":
      return {
        ...state,
        isPopup: true,
        popupData: action.payload,
      };
    case "HIDE_POPUP":
      return {
        ...state,
        isPopup: false,
      };
    default:
      return state;
  }
};

// For Show detail of product
const iniitialState_ShowDetail = { category: "", itemId: "" };
export const reducerShowDetail = (state = iniitialState_ShowDetail, action) => {
  switch (action.type) {
    case "SHOW_DETAIL":
      return {
        ...state,
        category: action.payload.category,
        itemId: action.payload.itemId,
      };
    default:
      return state;
  }
};

// For update login status
const initialState_Login = { stateLogin: false };
export const reducerLogin = (state = initialState_Login, action) => {
  console.log(state.stateLogin);
  console.log(action.type);

  switch (action.type) {
    case "ON_LOGIN":
      return {
        ...state,
        stateLogin: true,
      };
    case "ON_LOGOUT":
      return {
        ...state,
        stateLogin: false,
      };
    case "RESTORE":
      return {
        ...state,
        stateLogin: action.payload,
      };
    default:
      return state;
  }
};

// For cart
const iniitialState_Cart = { listCart: [], totalAmount: 0 };
export const reducerCart = (state = iniitialState_Cart, action) => {
  switch (action.type) {
    case "ADD_CART":
      return { ...state, listCart: action.payload };
    case "UPDATE_CART":
      return { ...state, listCart: action.payload };
    case "DELETE_CART":
      return { ...state, listCart: action.payload };
    default:
      return state;
  }
};
