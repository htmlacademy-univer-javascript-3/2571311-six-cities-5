import { createSlice } from '@reduxjs/toolkit';
import { fetchFavoriteOffer, setAuthorizationStatus, setUserData } from './action';
import { TPlaceCard } from '../utils/types/types';
import { TUser } from '../utils/types/user';


type UserState = {
  authorizationStatus: boolean;
  userData: TUser | null;
  favoriteOffers: TPlaceCard[];
};

const initialState: UserState = {
  authorizationStatus: false,
  userData: null,
  favoriteOffers: [],
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
      })
      .addCase(fetchFavoriteOffer.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      });
  },
});

export default userSlice.reducer;
