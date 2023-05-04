/* CREATE INITIAL VALUE AND REDUCER */
import {
  saveToStorage,
  keyOfCartList,
  keyOfActiveUser,
  deleteDataInStorage,
  activeInfor,
} from "../../storage/storage";

import { restoreActiveStatus } from "../actions/action";

// For image list (call API)
const initialState_ListImage = { ListImage: null, loading: false, error: null };

export const reducerProductList = (state = initialState_ListImage, action) => {
  console.log(111);

  switch (action.type) {
    case "FETCH_IMAGE_REQUEST":
      console.log(33);

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

// For Popup show Detail items
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

// For show detail of Active user
const initialState_ActiveUser = {
  isShowActiveUser: false,
  activeUserProfile: null,
};
export const reducerShowActiveUser = (
  state = initialState_ActiveUser,
  action
) => {
  switch (action.type) {
    case "SHOW__ACTIVE_USER":
      return {
        ...state,
        isShowActiveUser: true,
        activeUserProfile: action.payload,
      };
    case "HIDE__ACTIVE_USER":
      return {
        ...state,
        isShowActiveUser: false,
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
const initialState_Login = { stateLogin: false, activeUser: {} };
export const reducerLogin = (state = initialState_Login, action) => {
  switch (action.type) {
    case "ON_LOGIN":
      // update active user (only email and fullName) into Local Storage
      let activeUser = {
        email: action.payload.email,
        fullName: action.payload.fullName,
      };
      saveToStorage(keyOfActiveUser, activeUser);
      return {
        ...state,
        stateLogin: true,
        activeUser: activeUser,
      };
    case "ON_LOGOUT":
      // delete active data in Local storage
      deleteDataInStorage(keyOfActiveUser);
      return {
        ...state,
        stateLogin: false,
        activeUser: {},
      };
    case "RESTORE":
      return {
        ...state,
        stateLogin: true,
        activeUser: action.payload,
      };
    default:
      return state;
  }
};

// For cart
const iniitialState_Cart = { items: [], totalAmount: 0 };
export const reducerCart = (state = iniitialState_Cart, action) => {
  switch (action.type) {
    case "ADD_CART": {
      console.log(action.type);
      console.log(action);
      console.log(action?.item);
      console.log(typeof action?.item);
      console.log(action?.item?.price);
      console.log(typeof action?.item?.price);
      console.log(state?.totalAmount);
      console.log(typeof state?.totalAmount);
      console.log(state);

      const updatedTotalAmount =
        state?.totalAmount + action?.item?.price * action?.item?.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item?.id === action?.item?.id
      );

      const existingCartItem = state?.items[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem?.amount + action?.item?.amount,
          productTotalAmount:
            action?.item?.price *
            (existingCartItem?.amount + action?.item?.amount),
        };
        updatedItems = [...state?.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state?.items?.concat(action?.item);
        console.log(updatedItems);
      }

      // save to local storage
      saveToStorage(keyOfCartList + `__${action?.item?.oderUser}`, {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      });
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case "RESTORE_CART": {
      console.log(state);
      console.log(action);
      console.log(action?.item);
      console.log(action?.item.items);
      console.log(action?.totalAmount);
      return {
        items: action?.item.items,
        totalAmount: action?.item?.totalAmount,
      };
    }

    case "DELETE_CART": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    default:
      return state;
  }
};
