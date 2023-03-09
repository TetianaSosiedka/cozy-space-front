import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import userReducer from './Auth/authSlice';
import { userApi } from './Auth/authApi';

import {
  persistStore,
  //persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
//import storage from 'redux-persist/lib/storage';

// const persistUserConfig = {
//   key: 'user',
//   version: 1,
//   storage,
// };

// const persistedUserReducer = persistReducer(persistUserConfig, userReducer);

export const store = configureStore({
  reducer: {
    auth: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
