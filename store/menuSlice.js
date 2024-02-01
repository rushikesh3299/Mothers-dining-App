import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuItems: [],
  },
  reducers: {
    setMenuItems: (state, action) => {
      state.menuItems = action.payload;
    },
  },
});

export const { setMenuItems } = menuSlice.actions;
export default menuSlice.reducer;
