import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentDetails: {
    name: "",
    imgPath: "",
    amount: 0,
    paymentDate: "",
    status: "",
  },
};

export const PaymentSection = createSlice({
  name: "paymentDetails",
  initialState,
  reducers: {
    setPaymentDetails: (state, action) => {
      state.paymentDetails = { ...(state.paymentDetails, action.payload) };
    },
  },
});

export const { setPaymentDetails } = PaymentSection.actions;

export default PaymentSection.reducer;
