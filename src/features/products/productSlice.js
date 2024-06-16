import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ category, page, sortBy, order, color, brand, size }) => {
    let query = `?_page=${page}&_per_page=8`;
    if (category && category !== "All") query += `&category=${category}`;
    if (color && color !== "All") query += `&color=${color}`;
    if (brand && brand !== "All") query += `&brand=${brand}`;
    if (size && size !== "All") query += `&size=${size}`;
    if (sortBy) query += `&_sort=${sortBy}&_order=${order}`;

    const response = await axios.get(`http://localhost:5000/products${query}`);
    return response.data;
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (pid) => {
    const response = await axios.get(
      `http://localhost:5000/products/?id=${pid}`
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
    productDetails: null,
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
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.productDetails = action.payload[0];

        state.status = "succeeded";
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { resetProducts } = productSlice.actions;

export default productSlice.reducer;

export const selectProductDetails = (state) => state.products.productDetails;
