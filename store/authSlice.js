import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    successAuth: (state) => {
      console.log("state from redux B", state.isLoggedIn);
      state.isLoggedIn = true;
      console.log("state from redux A", state.isLoggedIn);
    },
  },
});

export const { successAuth } = authSlice.actions;
export default authSlice.reducer;
