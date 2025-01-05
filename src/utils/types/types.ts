import { TUser } from './user';

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

export type TReview = {
  comment: string;
  rating: number;
};

export type TReviewFull = TReview & {
  id: string;
  date: string;
  user: TUser;
};

export type TReviewItem = {
  id: string;
  user: TUser;
  stars: 1 | 2 | 3 | 4 | 5;
  text: string;
  datetime: string;
  readableDate: string;
};

export type TPoint = {
  title: string;
  lat: number;
  lng: number;
};

export type TCityName =
  | 'Paris'
  | 'Cologne'
  | 'Brussels'
  | 'Amsterdam'
  | 'Hamburg'
  | 'Dusseldorf';

export type TCity = {
  name: TCityName;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};
