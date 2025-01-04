import { TCity, TPlaceCard } from '../types/types';


const getActiveOffers = (
  allPlaces: TPlaceCard[],
  newCity: TCity
): TPlaceCard[] =>
  allPlaces.filter((offer: TPlaceCard) => offer.city.name === newCity.name);
export default getActiveOffers;
