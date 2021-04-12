import { createSlice } from '@reduxjs/toolkit';
import { formatData } from './utils';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    setProducts(state, action) {
      state.products = formatData(action.payload)
    },
    addNewItem(state, action) {
      state.products.push(action.payload);
    },
    updateItem(state, action) {
      const product = action.payload;
      const index = state.products.indexOf(...state.products.filter(
        (el) => el.productId === product.productId,
      ));

      state.products[index] = { ...state.products[index], ...product };
    },
    removeItem(state, action) {
      state.products = state.products.filter((el) => el.productId !== action.payload);
    },
  },
});

export default productsSlice.reducer;
export const {
  setProducts, addNewItem, removeItem, updateItem,
} = productsSlice.actions;
