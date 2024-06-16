import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import categoryReducer from "./features/categories/categorySlice";
import colorsReducer from "./features/colors/colorsSlice";
import brandsReducer from "./features/brands/brandsSlice";
import userReducer from "./features/users/userSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    colors: colorsReducer,
    brands: brandsReducer,
    users: userReducer,
  },
});
