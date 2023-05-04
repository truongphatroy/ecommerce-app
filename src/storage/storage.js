/* handling with Local storeage */

// valiable
export const keyOfUserArr = "UserArr";
export const keyOfActiveUser = "ActiveUser";

export const keyOfCartList = "CartList";

// Save to Local Storage
export const saveToStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

// Reading data from Local Storage
export const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// user array
export const userArr = getFromStorage(keyOfUserArr) || [];
// active user array
export const activeInfor = getFromStorage(keyOfActiveUser) || false;

// Delete data
export const deleteDataInStorage = (data) => {
  return localStorage.removeItem(data);
};
