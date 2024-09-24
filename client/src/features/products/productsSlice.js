import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  priceFilter: {
    minPrice: 0,
    maxPrice: 1300
  },
  status: 'idle',
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    },
    setPriceFilter(state, action) {
      state.priceFilter = action.payload
    },
  },
});

export const { setProducts, setPriceFilter } = productsSlice.actions;

export default productsSlice.reducer;