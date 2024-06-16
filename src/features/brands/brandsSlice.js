import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBrands = createAsyncThunk("brands/fetchBrands", async () => {
  const response = await axios.get("http://localhost:5000/brands");
  return response.data;
});

const brandsSlice = createSlice({
  name: "brands",
  initialState: {
    items: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchBrands.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default brandsSlice.reducer;
