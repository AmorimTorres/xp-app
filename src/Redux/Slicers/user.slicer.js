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
      const share = state.shares.find((item) => item.id === payload.id);
      if (share) {
        share.quantity += payload.quantity;
      } else {
        state.shares.push(payload);
      }
    },
    removePurchasedShares: (state, { payload }) => {
      const share = state.shares.find((item) => item.id === payload.id);
      if (share) {
        share.quantity -= payload.quantity;
      } else {
        state.shares.push(payload);
      }
    },
    increaseBalance: (state, { payload }) => {
      state.balance += parseFloat(payload);
    },
    decreaseBalance: (state, { payload }) => {
      state.balance -= payload;
    },
  },
});

export const {
  changeEmail, changePassword, insertPurchasedShares, increaseBalance, decreaseBalance, removePurchasedShares,
} = userSlice.actions;

export default userSlice.reducer;
