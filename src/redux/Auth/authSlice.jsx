import { createSlice } from '@reduxjs/toolkit';

import { userApi } from './authApi';

const initialState = {
  user: {
    email: '',
    name: '',
    subscription: '',
  },
  token: '',
};

export const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //Login
    builder.addMatcher(
      userApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      }
    );

    //Register
    builder.addMatcher(
      userApi.endpoints.register.matchFulfilled,
      (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      }
    );

    //currentUser Success
    builder.addMatcher(
      userApi.endpoints.currentUser.matchFulfilled,
      (state, action) => {
        state.user = action.payload.user;
      }
    );

    //currentUser Error
    builder.addMatcher(
      userApi.endpoints.currentUser.matchRejected,
      (state, { payload }) => {
        if (!payload) {
          return;
        }
        if (payload.status === 500) {
          state.token = '';
        }
      }
    );
  },
});

export default userSlice.reducer;
