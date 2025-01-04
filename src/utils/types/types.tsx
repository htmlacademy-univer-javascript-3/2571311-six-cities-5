import { TUser } from './user';

export type TRating = 1 | 2 | 3 | 4 | 5;
export type TPlaceType = 'Apartment' | 'Room' | 'Hotel';

export type TCityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export type TReviewFormState = {
  comment: string;
  rating: number;
};

export type TPoint = {
  title: string;
  lat: number;
  lng: number;
};

export type CityName =
  | 'Paris'
  | 'Cologne'
  | 'Brussels'
  | 'Amsterdam'
  | 'Hamburg'
  | 'Dusseldorf';

export type TCity = {
  name: CityName;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};


export type TReviewItem = {
  id: string;
  user: TUser;
  stars: 1 | 2 | 3 | 4 | 5;
  text: string;
  datetime: string;
  readableDate: string;
};

export type TPlaceCardLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TPlaceCard = {
  id: string;
  city: TCity;
  isFavorite: boolean;
  isPremium: false;
  location: TPlaceCardLocation;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: 'string';
};

export type TPlaceCardFull = TPlaceCard & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: TUser;
  images: string[];
  maxAdults: number;
};

export type TReviewEntity = {
  comment: string;
  rating: number;
};

export type TReviewEntityFull = TReviewEntity & {
  id: string;
  date: string;
  user: TUser;
};
