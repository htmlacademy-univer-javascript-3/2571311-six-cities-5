import { City } from '../../../types/types';
import { TPlaceCardEntity } from '../../placeCard.typings/placeCard.typings';

const getActiveOffers = (
  allPlaces: TPlaceCardEntity[],
  newCity: City
): TPlaceCardEntity[] =>
  allPlaces.filter((offer: TPlaceCardEntity) => offer.city.title === newCity.title);
export default getActiveOffers;
