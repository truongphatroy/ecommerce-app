import { BrowserRouter, routes, route } from "react-router-dom";

import HomePage from "./page/HomePage";
import ShopPage from "./page/ShopPage";

function App() {
  return (
    <BrowserRouter>
      <routes>
        <route path='/' element={<HomePage />} />
        <route path='/detail' element={<ShopPage />} />
      </routes>
    </BrowserRouter>
  );
}

export default App;
