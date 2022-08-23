import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  section: "home",
};

export const footerSection = createSlice({
  name: "footer",
  initialState,
  reducers: {
    setSection: (state, action) => {
      state.section = action.payload;
    },
  },
});

export const { setSection } = footerSection.actions;

export default footerSection.reducer;
