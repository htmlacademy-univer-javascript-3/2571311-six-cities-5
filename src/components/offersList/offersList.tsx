import { PlaceClassTypes } from '../../utils/const/const';
import { TPlaceCard } from '../../utils/types/types';
import { PlaceCard } from '../placeCard/placeCard';


interface TOfferListProps {
  offers: TPlaceCard[];
  onListItemHover: (listItemName: number | null) => void;
  listType: PlaceClassTypes;
}

export const OffersList: React.FC<TOfferListProps> = ({offers, onListItemHover, listType }): JSX.Element => (
  <div className={
    `${listType === PlaceClassTypes.Cities ? 'cities__places-list' : 'near-places__list'} places__list
    ${listType === PlaceClassTypes.Cities ? 'tabs__content' : null}`
  }
  >
    {offers.map((place) => (
      <PlaceCard
        key={place.id}
        place={place}
        placeCardType={listType}
        onMouseOver={() => onListItemHover(place.id)}
        onMouseLeave={() => onListItemHover(null)}
      />))}
  </div>
);
