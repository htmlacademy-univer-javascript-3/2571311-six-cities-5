import store from "../hooks/store";

export type City = {
    title: string;
    lat: number;
    lng: number;
    zoom: number;
  };

export type CityName =
  | 'Paris'
  | 'Cologne'
  | 'Brussels'
  | 'Amsterdam'
  | 'Hamburg'
  | 'Dusseldorf';

export type Point = {
    title: string;
    lat: number;
    lng: number;
}

export type TReviewItem = {
    id: string;
    user: TUserEntity;
    stars: 1 | 2 | 3 | 4 | 5;
    text: string;
    datetime: string;
    readableDate: string;
  };

  export type TUserStatus = 'Pro';

  export type TUserEntity = {
    avatarImageSrc: string;
    name: string;
    status?: TUserStatus;
  };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;