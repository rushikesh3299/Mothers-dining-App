import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    isLoading: false,
    userData: {}
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    saveUserData: (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload
    }
  },
});

export const { startLoading, stopLoading, saveUserData } = authSlice.actions;
export default authSlice.reducer;
