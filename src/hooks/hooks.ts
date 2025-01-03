import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../types/types';
import { createAction } from '@reduxjs/toolkit';
import { TPlaceCardEntity } from '../components/placeCard.typings/placeCard.typings';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const Actions = {
  SET_ACTIVE_OFFER: 'offer/hover'
};

export const setOfferActive = createAction<TPlaceCardEntity | null>(
  Actions.SET_ACTIVE_OFFER
);
