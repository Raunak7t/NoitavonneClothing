import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (user) => {
    const response = await axios.post("http://localhost:5000/users", user);
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (credentials) => {
    const response = await axios.post(
      "http://localhost:5000/login",
      credentials
    );
    return response.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: null,
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.status = "succeeded";
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.status = "succeeded";
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;
