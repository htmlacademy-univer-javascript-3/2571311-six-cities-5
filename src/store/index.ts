import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { api } from '../services';
import offersSlice from './offersSlice';
import offerSlice from './offerSlice';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  offersSlice,
  userSlice,
  offerSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { api },
      },
    }),
});
