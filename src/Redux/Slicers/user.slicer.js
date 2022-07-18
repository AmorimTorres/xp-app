import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  shares: [],
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
  },
});

export const { changeEmail, changePassword, insertPurchasedShares } = userSlice.actions;

export default userSlice.reducer;
