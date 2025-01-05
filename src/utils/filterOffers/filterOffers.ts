import { TPlaceCard, TCity } from '../types/types';


function filterOffers(offers: TPlaceCard[], city: TCity) {
  return offers.filter((offer) => offer.city.name === city.name);
}

export default filterOffers;
