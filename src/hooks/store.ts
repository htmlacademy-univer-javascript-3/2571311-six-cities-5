import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../components/slices/userSlice';
import commentsReducer from '../components/slices/commentSlices';

const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
    user: userReducer
  },
});

export default store;
