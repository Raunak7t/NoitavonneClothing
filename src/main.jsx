import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Checkout,
  Home,
  LandingPage,
  Layout,
  LogIn,
  ProductDetails,
  SignUp,
} from "./pages/";
import { Provider } from "react-redux";
import { store } from "./store.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<LandingPage />} />
      <Route path="app" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="product-details" element={<ProductDetails />}>
          <Route path=":pid" element={<ProductDetails />} />
        </Route>
        <Route path="checkout" element={<Checkout />}>
          <Route path=":pid" element={<Checkout />} />
        </Route>
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
