import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeEmail: (state, { payload }) => {
      state.email = payload;
    },
  },
});

export const { changeEmail } = userSlice.actions;

export default userSlice.reducer;
