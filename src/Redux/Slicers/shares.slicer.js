import { createSlice } from '@reduxjs/toolkit';
import stockDb from '../../stockData.json';

const initialState = {
  shares: stockDb,
};

export const shareSlice = createSlice({
  name: 'shares',
  initialState,
  reducers: {
    increaseMarketShareQtt: (state, { payload }) => {
      state.shares[payload.id].quantity += parseFloat(payload.value);
    },
    decreaseMarketShareQtt: (state, { payload }) => {
      state.shares[payload.id].quantity -= payload.value;
    },
  },
});

export const { increaseMarketShareQtt, decreaseMarketShareQtt } = shareSlice.actions;

export default shareSlice.reducer;
