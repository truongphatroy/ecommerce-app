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
  console.log(action);

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
