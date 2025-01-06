import { SortOrder } from '../../components/sorting-filter/sorting-filter.typings';
import { TPlaceCard } from '../types/types';

function sortOffers(offers: TPlaceCard[], sortOrder: SortOrder) {
  switch (sortOrder) {
    case SortOrder.TopRated:
      return offers.toSorted((a, b) => b.rating - a.rating);
    case SortOrder.HighToLow:
      return offers.toSorted((a, b) => b.price - a.price);
    case SortOrder.LowToHigh:
      return offers.toSorted((a, b) => a.price - b.price);
    default:
      return offers;
  }
}

export default sortOffers;
