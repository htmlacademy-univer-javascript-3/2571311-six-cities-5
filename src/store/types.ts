import { ThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { store } from '.';
import { APIErrorResponse } from '../services';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ThunkExtraArgs = {
  api: AxiosInstance;
};

export type AsyncThunkConfig<RejectType = APIErrorResponse> = {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: RejectType;
  extra: ThunkExtraArgs;
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  ThunkExtraArgs,
  Action
>;
