import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Slicers/user.slicer';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
