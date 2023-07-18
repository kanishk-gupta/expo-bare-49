import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from "./reducers";
import { authActionTypes } from "./actionTypes";

const store = configureStore({
  reducer: {
    [authActionTypes.SLICE_NAME]: authSlice
  },
});

export default store;