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
import { Checkout, Home, LandingPage, Layout, ProductDetails } from "./pages/";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<LandingPage />} />
      <Route path="app" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="product-details" element={<ProductDetails />}>
          <Route path=":pid" element={<ProductDetails />} />
        </Route>
        <Route path="checkout" element={<Checkout />} />
        <Route path="" element={<Home />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
