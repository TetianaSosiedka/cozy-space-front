import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://cozy-space-back.onrender.com/api/products',
  }),

  tagTypes: ['Products'],

  endpoints: build => ({
    //useGetProductsQuery
    getProducts: build.query({
      query: page => ({
        url: `/?page=${page}`,
      }),
      providesTags: ['Products'],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
