import { createSlice } from '@reduxjs/toolkit';
import sharesData from '../../stockData.json';

const initialState = {
  shares: sharesData,
};

export const shareSlice = createSlice({
  name: 'shares',
  initialState,
  reducers: {
    increaseQuantity: (state, { payload }) => {
      state.quantity += parseFloat(payload);
    },
    decreaseQuantity: (state, { payload }) => {
      state.quantity -= payload;
    },
  },
});

export const { increaseQuantity, decreaseQuantity } = shareSlice.actions;

export default shareSlice.reducer;
