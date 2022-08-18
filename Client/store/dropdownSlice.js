import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setOpen } = dropdownSlice.actions;

export default dropdownSlice.reducer;
