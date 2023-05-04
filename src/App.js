import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./page/HomePage";
import ShopPage from "./page/ShopPage";
import DetailPage from "./page/DetailPage";
import CartPage from "./page/CartPage";
import CheckoutPage from "./page/CheckoutPage";
import SignInPage from "./page/SignInPage";
import SignUpPage from "./page/SignUpPage";
import RootLayout from "./page/RootLayout";
import { restoreActiveStatus, restoreUserCart } from "./store/actions/action";
import { activeInfor, getFromStorage } from "./storage/storage";

// create a custom route
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "detail/:productId", element: <DetailPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
    ],
  },
  { path: "signin", element: <SignInPage /> },
  { path: "signup", element: <SignUpPage /> },
]);

function App() {
  const dispatch = useDispatch();
  // update active status every time start
  useEffect(() => {
    if (activeInfor) {
      // restore active user
      dispatch(restoreActiveStatus(activeInfor));

      // Restore cart in local storage
      const keyOfexistingLocalCart = `CartList__${activeInfor.email}`;

      const existingLocalCart = getFromStorage(keyOfexistingLocalCart);

      if (existingLocalCart) {
        dispatch(restoreUserCart(existingLocalCart));
      }
    } else {
      // Restore non-active user's cart in local storage
      const keyOfexistingLocalCart = `CartList__undefined`;

      const existingLocalCart = getFromStorage(keyOfexistingLocalCart);

      if (existingLocalCart) {
        dispatch(restoreUserCart(existingLocalCart));
      }
    }
  }, [activeInfor]);

  return <RouterProvider router={router} />;
}

export default App;
