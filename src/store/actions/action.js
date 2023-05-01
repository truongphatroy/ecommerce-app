/* ACTION OF REDUX STORE */

// For async action to call API
import axios from "axios";

const urlGetImage =
  "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

export const getData = () => async (dispatch) => {
  dispatch({ type: "FETCH_IMAGE_REQUEST" });
  try {
    const response = await axios.get(urlGetImage);
    // console.log(response);

    dispatch({
      type: "FETCH_IMAGE_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: "FETCH_IMAGE_FAILURE", payload: error.message });
  }
};

// For Show Popup
export const showPopup = (popupData) => {
  return {
    type: "SHOW_POPUP",
    payload: popupData,
  };
};

// For Show Popup
export const hidePopup = () => {
  return {
    type: "HIDE_POPUP",
  };
};

// For Show Detail (related /"shop" and /"detail" page)
export const showDetail = (category, itemId) => {
  return {
    type: "SHOW_DETAIL",
    payload: { category, itemId },
  };
};
