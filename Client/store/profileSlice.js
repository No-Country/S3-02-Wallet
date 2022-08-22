import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const showProfile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setShowProfile: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setShowProfile } = showProfile.actions;

export default showProfile.reducer;
