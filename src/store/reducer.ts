import { createReducer } from '@reduxjs/toolkit';
import { offersSample } from '../mocks/offersSample';
import { setCity, setOffers } from './action';
import { CITIES } from '../utils/const/const';

const initialState = {
  city: CITIES.Paris,
  offers: offersSample.filter((o) => o.city.name === 'Paris'),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      const {city} = action.payload;
      state.city = city;
    })
    .addCase(setOffers, (state, action) => {
      const {offers} = action.payload;

      state.offers = offers;
    });
});

export {reducer};
