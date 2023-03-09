import { createSlice } from '@reduxjs/toolkit';

import { userApi } from './authApi';

const initialState = {
  name: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //Login
    builder.addMatcher(
      userApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { user } = payload;

        state.name = user.name;
        state.email = user.email;
      }
    );
  },
});

export default userSlice.reducer;
