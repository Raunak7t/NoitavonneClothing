import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import categoryReducer from "./features/categories/categorySlice";
import userReducer from "./features/users/userSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    users: userReducer,
  },
});
