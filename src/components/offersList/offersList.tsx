import classNames from 'classnames';
import { TPlaceCard, TPoint } from '../../utils/types/types';
import PlaceCard from '../placeCard/placeCard';
import { PlaceClassTypes } from '../../utils/const/const';


interface TOfferListProps {
  offers: TPlaceCard[];
  type: PlaceClassTypes;
  onOfferSelect?: (point: TPoint | undefined) => void;
}

export const OffersList: React.FC<TOfferListProps> = ({ offers, type, onOfferSelect }): JSX.Element => {
  let containerClassName: string;

  switch (type) {
    case PlaceClassTypes['Cities']:
      containerClassName = 'cities__places-list tabs__content';
      break;
    case PlaceClassTypes['NearPlaces']:
      containerClassName = 'near-places__list';
      break;
    default:
      containerClassName = '';
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      <div className={classNames(containerClassName, 'places__list')}>
        {offers.map((offer) => (
          <PlaceCard
            place={offer}
            key={offer.id}
            onOfferSelect={onOfferSelect}
            type={type}
          />
        ))}
      </div>
    </div>
  );
};

