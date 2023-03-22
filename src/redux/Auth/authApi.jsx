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

    //useRegisterMutation
    register: builder.mutation({
      query: payload => ({
        url: '/signup',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),

    //useCurrentUserQuery
    currentUser: builder.query({
      query: () => ({
        url: '/current',
      }),
      providesTags: ['User'],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useCurrentUserQuery } =
  userApi;
