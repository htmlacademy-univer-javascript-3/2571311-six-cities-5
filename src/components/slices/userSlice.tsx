import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  authorizationStatus: boolean;
  userData: {
    name: string;
    email: string;
  } | null;
}

const initialState: UserState = {
  authorizationStatus: false,
  userData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ name: string; email: string }>) => {
      state.authorizationStatus = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.authorizationStatus = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
