import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Slicers/user.slicer';
import stockReducer from '../Slicers/shares.slicer';

export default configureStore({
  reducer: {
    user: userReducer,
    sharesData: stockReducer,
  },
});
