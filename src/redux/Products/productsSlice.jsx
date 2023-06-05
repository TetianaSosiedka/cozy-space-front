import { createSlice } from '@reduxjs/toolkit';

import { productsApi } from './productsApi';

const initialState = {
  currentPage: null,
  lastPage: null,
  products: [],
  isSuccess: false,
};

export const productsSlice = createSlice({
  name: 'productsReducer',
  initialState,
  reducers: {},

  extraReducers: builder => {
    //GetProducts
    builder.addMatcher(
      productsApi.endpoints.getProducts.matchFulfilled,
      (state, action) => {
        state.lastPage = action.payload.last_page;
        state.currentPage = action.payload.current_page;
        state.products.push(...action.payload.data);
        if (state.lastPage === state.currentPage) {
          state.isSuccess = true;
        }
      }
    );

    //currentUser Error
    builder.addMatcher(
      productsApi.endpoints.getProducts.matchRejected,
      (state, { payload }) => {
        if (!payload) {
          return;
        }
        if (payload.status === 500) {
          console.error();
        }
      }
    );
  },
});

export default productsSlice.reducer;
