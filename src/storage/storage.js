/* handling with Local storeage */

// valiable
export const keyOfUserArr = "keyOfUserArr";
export const keyOfActiveUser = "keyOfActiveUser";

// Save to Local Storage
export const saveToStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

// Reading data from Local Storage
const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// user array
export const userArr = getFromStorage(keyOfUserArr) || [];
// active array
// export const loginStatus = getFromStorage(keyOfActiveUser) || {};
export const activeInfor = getFromStorage(keyOfActiveUser) || {};

// Delete data
export const deleteDataInStorage = (data) => {
  return localStorage.removeItem(data);
};
