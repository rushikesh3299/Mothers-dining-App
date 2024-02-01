import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    isLoading: false,
  },
  reducers: {
    successAuth: (state) => {
      state.isLoggedIn = true;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { successAuth, startLoading, stopLoading } = authSlice.actions;
export default authSlice.reducer;
