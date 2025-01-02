export type TPlaceMark = 'Premium';

export type TPlacePriceType = 'night';

export type TPlaceType = 'Apartment' | 'Room' | 'House' | 'Hotel';

export type TPlaceCardEntity = {
  find(arg0: (place: any) => boolean): unknown;
  id: string;
  mark?: string;
  imageSrc: string;
  priceValue: number;
  priceType: string;
  starRating: number;
  name: string;
  type: string;
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
};
