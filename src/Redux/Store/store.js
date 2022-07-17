import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Slicers/user.slicer';
import accountReducer from '../Slicers/account.slicer';
import stockReducer from '../Slicers/shares.slicer';

export default configureStore({
  reducer: {
    user: userReducer,
    account: accountReducer,
    stock: stockReducer,
  },
});
