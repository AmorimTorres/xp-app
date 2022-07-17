import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 500000,
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    increaseBalance: (state, { payload }) => {
      state.balance += payload;
    },
    decreaseBalance: (state, { payload }) => {
      state.balance -= payload;
    },
  },
});

export const { increaseBalance, decreaseBalance } = accountSlice.actions;

export default accountSlice.reducer;
