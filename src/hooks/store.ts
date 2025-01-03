import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import userReducer from '../components/slices/userSlice'; 

const rootReducer = combineReducers({
  user: userReducer, 
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);

export default store;