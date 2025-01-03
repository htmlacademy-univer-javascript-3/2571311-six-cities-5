import { City } from '../../types/types';

export type TPlaceMark = 'Premium';

export type TPlacePriceType = 'night';

export type TPlaceType = 'Apartment' | 'Room' | 'House' | 'Hotel';

export type TPlaceCardEntity = {
  id: string;
  mark?: string;
  imageSrc: string;
  priceValue: number;
  priceType: string;
  starRating: number;
  name: string;
  type: string;
  city:City;
  isFullPage?: boolean;
  description?: string;
  features?: string[];
  host?: {
    avatar: string;
    name: string;
    isPro: boolean;
    description: string;
  };
  bedrooms?: number;
  maxGuests?: number;
  reviews?: {
    userAvatar: string;
    userName: string;
    rating: number;
    text: string;
    date: string;
  }[];
  latitude: number;
  longitude: number;
};

