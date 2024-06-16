import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import categoryReducer from "./features/categories/categorySlice";
import colorsReducer from "./features/colors/colorsSlice";
import brandsReducer from "./features/brands/brandsSlice";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    colors: colorsReducer,
    brands: brandsReducer,
    auth: authReducer,
  },
});
