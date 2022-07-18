import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  shares: [],
  balance: 500000,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeEmail: (state, { payload }) => {
      state.email = payload;
    },
    changePassword: (state, { payload }) => {
      state.password = payload;
    },
    insertPurchasedShares: (state, { payload }) => {
      state.shares = [...state.shares, payload];
    },
    increaseBalance: (state, { payload }) => {
      state.balance += parseFloat(payload);
    },
    decreaseBalance: (state, { payload }) => {
      state.balance -= payload;
    },
  },
});

export const { changeEmail, changePassword, insertPurchasedShares, increaseBalance, decreaseBalance } = userSlice.actions;

export default userSlice.reducer;
