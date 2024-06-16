import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ category = "", page = 1, limit = 8 }) => {
    const response = await axios.get(
      `http://localhost:5000/products?${
        category ? `category=${category}&` : ""
      }_page=${page}&_per_page=${limit}`
    );
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: null,
    page: 1,
    hasNextPage: true,
  },
  reducers: {
    resetProducts(state) {
      state.items = [];
      state.status = null;
      state.page = 1;
      state.hasNextPage = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload.data];
        state.status = "succeeded";
        state.page++;
        state.hasNextPage = action.payload.pages >= state.page;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { resetProducts } = productSlice.actions;

export default productSlice.reducer;
