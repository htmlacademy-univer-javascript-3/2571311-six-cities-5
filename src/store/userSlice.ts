import { createSlice } from '@reduxjs/toolkit';
import { setAuthorizationStatus, setUserData } from './action';
import { TUser } from '../utils/types/user';

type UserState = {
    authorizationStatus: boolean;
    userData: TUser | null;
  };

const initialState: UserState = {
  authorizationStatus: false,
  userData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setAuthorizationStatus, (state, action) => {
        state.authorizationStatus = action.payload;
      })
      .addCase(setUserData, (state, action) => {
        state.userData = action.payload;
      });
  },
});

export default userSlice.reducer;
