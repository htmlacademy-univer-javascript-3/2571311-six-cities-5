import { City, TReviewItem, TUserEntity } from '../../types/types';

export type TPlaceMark = 'Premium';

export type TPlacePriceType = 'night';

export type TPlaceType = 'Apartment' | 'Room' | 'House' | 'Hotel';

export type TPlaceFeatures = {
  placeType: TPlaceType;
  bedroomCount?: number;
  maxAdultOccupancy: number;
};

export type TPlaceImage = {
  id: number;
  src: string;
  alt: string;
  isCoverImage?: boolean;
};

export type TPlaceInsideItem = {
  id: number;
  text: string;
};
export type TPlaceDescriptionItem = {
  id: number;
  text: string;
};

export type TPlaceCardEntity = {
  id: string;
  mark?: TPlaceMark;
  images: TPlaceImage[];
  previewImage: string;
  priceValue: number;
  priceType: string;
  starRating: number;
  numericRating:number;
  name: string;
  type: string;
  city:City;
  isFullPage?: boolean;
  description: TPlaceDescriptionItem[];
  features: TPlaceFeatures;
  host: TUserEntity;
  insideList: TPlaceInsideItem[];
  reviews: TReviewItem[];
  latitude: number;
  longitude: number;
};

