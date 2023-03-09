import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/users',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().auth;

      headers.set('authorization', `Bearer ${token}`);
      return headers;
    },
  }),

  tagTypes: ['User'],

  endpoints: builder => ({
    //useLoginMutation
    login: builder.mutation({
      query: payload => ({
        url: '/login',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useLoginMutation } = userApi;
