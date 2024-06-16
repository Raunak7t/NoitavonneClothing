import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchColors = createAsyncThunk("colors/fetchColors", async () => {
  const response = await axios.get("http://localhost:5000/colors");
  return response.data;
});

const colorsSlice = createSlice({
  name: "colors",
  initialState: {
    items: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchColors.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchColors.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchColors.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default colorsSlice.reducer;
