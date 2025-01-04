import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { api } from '../services';
import offersSlice from './offersSlice';

const rootReducer = combineReducers({
  offersSlice,
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
