import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import { TCity, TPlaceCard } from '../utils/types/types';
import { SortOrder } from '../components/sortingFilter/sortingFilter.typings';
import { API_ROUTES, errorHandler } from '../services';
import { AppThunk, AsyncThunkConfig } from './types';
import filterOffers from '../utils/filterOffers/filterOffers';
import sortOffers from '../utils/sortOffers/sortOffers';

export const Actions = {
  SET_CITY: 'city/set',
  SET_SORT_ORDER: 'sortOrder/set',
  SET_CITY_OFFERS: 'cityOffers/set',
  SET_GLOBAL_OFFERS: 'globalOffers/set',
  APPLY_CITY: 'city/apply',
  APPLY_SORT_ORDER: 'sortOrder/apply',
  UPDATE_CITY_OFFERS: 'cityOffers/update',
  FETCH_GLOBAL_OFFERS: 'globalOffers/fetch',
};

export const setCity = createAction<TCity>(Actions.SET_CITY);

export const setCityOffers = createAction<TPlaceCard[]>(
  Actions.SET_CITY_OFFERS
);

export const setSortOrder = createAction<SortOrder>(Actions.SET_SORT_ORDER);

export const setGlobalOffers = createAction<SortOrder>(
  Actions.SET_GLOBAL_OFFERS
);

export function applyCity(newCity: TCity): AppThunk {
  return function applySortOrderThunk(dispatch, getState) {
    const state = getState();
    let newCityOffers = filterOffers(state.offersSlice.globalOffers, newCity);
    newCityOffers = sortOffers(newCityOffers, state.offersSlice.sortOrder);
    dispatch(setCity(newCity));
    dispatch(setCityOffers(newCityOffers));
  };
}

export function applySortOrder(newSortOrder: SortOrder): AppThunk {
  return function applySortOrderThunk(dispatch, getState) {
    const state = getState();
    const newCityOffers = sortOffers(
      state.offersSlice.cityOffers,
      newSortOrder
    );
    dispatch(setSortOrder(newSortOrder));
    dispatch(setCityOffers(newCityOffers));
  };
}

export function updateCityOffers(): AppThunk {
  return function updateCityOffersThunk(dispatch, getState) {
    const state = getState();
    let newCityOffers = filterOffers(
      state.offersSlice.globalOffers,
      state.offersSlice.city
    );
    newCityOffers = sortOffers(newCityOffers, state.offersSlice.sortOrder);
    dispatch(setCityOffers(newCityOffers));
  };
}

export const getGlobalOffers = createAsyncThunk<
    TPlaceCard[],
    void,
    AsyncThunkConfig
  >(Actions.FETCH_GLOBAL_OFFERS, async (_, thunkApi) => {
    try {
      const response = await thunkApi.extra.api.get<TPlaceCard[]>(
        API_ROUTES.OFFERS.GET_GLOBAL
      );

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(errorHandler(error));
    }
  });
