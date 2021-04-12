import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsSlice from './productsSlice';

const rootReducer = combineReducers({
  products: productsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
