import { createSlice } from '@reduxjs/toolkit';
import { SortOrder } from '../components/sortingFilter/sortingFilter.typings';
import { TCity, TPlaceCard } from '../utils/types/types';
import { setCityOffers, setCity, setSortOrder, getGlobalOffers } from './action';
import { CITIES } from '../utils/const/const';

type OffersState = {
    globalOffers: TPlaceCard[];
    loading: boolean;
    error: string | null;
    cityOffers: TPlaceCard[];
    city: TCity;
    sortOrder: SortOrder;
  };

const initialState: OffersState = {
  globalOffers: [],
  loading: true,
  error: null,
  cityOffers: [],
  city: CITIES.Paris,
  sortOrder: SortOrder.POPULAR,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setCityOffers, (state, action) => {
        state.cityOffers = action.payload;
      })
      .addCase(setCity, (state, action) => {
        state.city = action.payload;
      })
      .addCase(setSortOrder, (state, action) => {
        state.sortOrder = action.payload;
      })
      .addCase(getGlobalOffers.fulfilled, (state, action) => {
        state.globalOffers = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getGlobalOffers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGlobalOffers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default offersSlice.reducer;
