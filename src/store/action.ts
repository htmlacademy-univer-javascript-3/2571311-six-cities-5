import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import { API_ROUTES, APIErrorResponse, errorHandler } from '../services';
import { AppThunk, AsyncThunkConfig } from './types';
import filterOffers from '../utils/filterOffers/filterOffers';
import sortOffers from '../utils/sort-offers/sort-offers';
import { TAuthInfo, TUser } from '../utils/types/user';
import { clearToken, getToken, setToken } from '../utils/user/user';
import { TCity, TPlaceCard, TPlaceCardFull, TReviewFull, TReview } from '../utils/types/types';
import { SortOrder } from '../components/sorting-filter/sorting-filter.typings';

export const Actions = {
  SET_CITY: 'city/set',
  SET_SORT_ORDER: 'sortOrder/set',
  SET_CITY_OFFERS: 'cityOffers/set',
  SET_GLOBAL_OFFERS: 'globalOffers/set',
  APPLY_CITY: 'city/apply',
  APPLY_SORT_ORDER: 'sortOrder/apply',
  UPDATE_CITY_OFFERS: 'cityOffers/update',
  FETCH_GLOBAL_OFFERS: 'globalOffers/fetch',
  SET_ACTIVE_OFFER: 'offer/hover',

  SET_AUTHORIZATION_STATUS: 'authorizationStatus/set',
  SET_USER_DATA: 'userData/set',
  VALIDATE_USER: 'user/validate',
  LOGIN: 'user/login',
  LOGOUT: 'user/logout',
  FETCH_FAVORITES_OFFERS: '/favotire',
  SET_FAVORITE_STATUS: '/favotire/set',

  SET_OFFER: 'offer/set',
  SET_COMMENTS: 'comments/set',
  SET_NEARBY_OFFERS: 'nerbyOffers/set',
  SET_OFFER_LOADING: 'offerLoading/set',
  SET_OFFER_ERROR: 'offerRrror/set',
  SET_COMMENT_ERROR: 'commentError/set',
  FETCH_OFFER: 'offer/fetch',
  POST_COMMENT: 'comment/post',
};

export const setCity = createAction<TCity>(Actions.SET_CITY);

export const setCityOffers = createAction<TPlaceCard[]>(
  Actions.SET_CITY_OFFERS
);

export const setSortOrder = createAction<SortOrder>(Actions.SET_SORT_ORDER);

export const setOfferActive = createAction<TPlaceCard | null>(
  Actions.SET_ACTIVE_OFFER
);

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

export const setAuthorizationStatus = createAction<boolean>(
  Actions.SET_AUTHORIZATION_STATUS
);

export const setUserData = createAction<TUser | null>(
  Actions.SET_USER_DATA
);

export const validateUser = createAsyncThunk<void, void, AsyncThunkConfig>(
  Actions.VALIDATE_USER,
  async (_, thunkApi) => {
    try {
      const token = getToken();

      if (token) {
        const response = await thunkApi.extra.api.get<TUser>(
          API_ROUTES.USER.VALIDATE
        );
        thunkApi.dispatch(setAuthorizationStatus(true));
        thunkApi.dispatch(setUserData(response.data));
      }
    } catch (error) {
      clearToken();
      thunkApi.dispatch(setAuthorizationStatus(false));
      thunkApi.dispatch(setUserData(null));
    }
  }
);

export const login = createAsyncThunk<void, TAuthInfo, AsyncThunkConfig>(
  Actions.LOGIN,
  async (credentials, thunkApi) => {
    try {
      const response = await thunkApi.extra.api.post<TUser>(
        API_ROUTES.USER.LOGIN,
        { ...credentials }
      );
      setToken(response.data.token);
      thunkApi.dispatch(setAuthorizationStatus(true));
      thunkApi.dispatch(setUserData(response.data));
    } catch (error) {
      thunkApi.dispatch(setAuthorizationStatus(false));
      thunkApi.dispatch(setUserData(null));
    }
  }
);

export const logout = createAsyncThunk<void, void, AsyncThunkConfig>(
  Actions.LOGOUT,
  async (_, thunkApi) => {
    await thunkApi.extra.api.delete(API_ROUTES.USER.LOGOUT);
    clearToken();
    thunkApi.dispatch(setAuthorizationStatus(false));
    thunkApi.dispatch(setUserData(null));
  }
);

export const setOffer = createAction<TPlaceCardFull>(Actions.SET_OFFER);

export const setComments = createAction<TReviewFull[]>(
  Actions.SET_COMMENTS
);

export const setNearbyOffers = createAction<TPlaceCard[]>(
  Actions.SET_NEARBY_OFFERS
);

export const setOfferLoading = createAction<boolean>(Actions.SET_OFFER_LOADING);

export const setOfferError = createAction<APIErrorResponse | null>(
  Actions.SET_OFFER_ERROR
);

export const setCommentError = createAction<APIErrorResponse | null>(
  Actions.SET_COMMENT_ERROR
);

export const fetchOffer = createAsyncThunk<void, string, AsyncThunkConfig>(
  Actions.FETCH_OFFER,
  async (offerId: string, thunkApi) => {
    try {
      thunkApi.dispatch(setOfferLoading(true));

      const { data: offer } = await thunkApi.extra.api.get<TPlaceCardFull>(
        API_ROUTES.OFFERS.GET_EXACT(offerId)
      );
      const { data: comments } = await thunkApi.extra.api.get<
        TReviewFull[]
      >(API_ROUTES.COMMENTS.GET(offerId));
      const { data: nearbyOffers } = await thunkApi.extra.api.get<
        TPlaceCard[]
      >(API_ROUTES.OFFERS.GET_NEARBY(offerId));

      thunkApi.dispatch(setOffer(offer));
      thunkApi.dispatch(setComments(comments.toReversed().slice(0, 10)));
      thunkApi.dispatch(setNearbyOffers(nearbyOffers));

      thunkApi.dispatch(setOfferLoading(false));
    } catch (error) {
      thunkApi.dispatch(setOfferError(errorHandler(error)));
    }
  }
);

export const fetchFavoriteOffer = createAsyncThunk<
  TPlaceCard[],
  void,
  AsyncThunkConfig
>(Actions.FETCH_FAVORITES_OFFERS, async (_, thunkApi) => {
  try {
    const response = await thunkApi.extra.api.get<TPlaceCard[]>(
      API_ROUTES.FAVORITE.GET
    );

    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(errorHandler(error));
  }
});

export const setFavoriteStatus = createAsyncThunk<
  void,
  { offerId: string; status: number; isMainPage: boolean },
  AsyncThunkConfig
>(Actions.SET_FAVORITE_STATUS, async (payload, thunkApi) => {
  try {
    await thunkApi.extra.api.post<TReviewFull>(
      `${API_ROUTES.FAVORITE.GET}/${payload.offerId}/${payload.status}`
    );

    if (!payload.isMainPage) {
      thunkApi.dispatch(fetchOffer(payload.offerId));
    } else {
      thunkApi.dispatch(getGlobalOffers());
    }
    thunkApi.dispatch(fetchFavoriteOffer());
  } catch (error) {
    thunkApi.dispatch(setCommentError(errorHandler(error)));
  }
});

export const postComment = createAsyncThunk<
  void,
  { offerId: string; comment: TReview },
  AsyncThunkConfig
>(Actions.POST_COMMENT, async (payload, thunkApi) => {
  try {
    const state = thunkApi.getState();
    const { data: comment } = await thunkApi.extra.api.post<TReviewFull>(
      API_ROUTES.COMMENTS.POST(payload.offerId),
      payload.comment
    );

    thunkApi.dispatch(setComments([comment, ...state.offerSlice.comments]));
  } catch (error) {
    thunkApi.dispatch(setCommentError(errorHandler(error)));
  }
});
