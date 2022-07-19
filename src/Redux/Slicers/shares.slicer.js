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
      state.shares[payload.id].quantity += parseFloat(payload.value);
    },
    decreaseQuantity: (state, { payload }) => {
      state.shares[payload.id].quantity -= payload.value;
    },
  },
});

export const { increaseQuantity, decreaseQuantity } = shareSlice.actions;

export default shareSlice.reducer;
