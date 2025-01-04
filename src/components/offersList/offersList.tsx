import classNames from 'classnames';
import { TPlaceCard } from '../../utils/types/types';
import PlaceCard from '../placeCard/placeCard';


type TOffersListProps = {
  offers: TPlaceCard[];
  type: 'Main' | 'Nearby';
};

const OffersList = ({ offers, type }: TOffersListProps): JSX.Element => {
  let containerClassName: string;

  switch (type) {
    case 'Main':
      containerClassName = 'cities__places-list tabs__content';
      break;
    case 'Nearby':
      containerClassName = 'near-places__list';
      break;
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      <div className={classNames(containerClassName, 'places__list')}>
        {offers.map((offer) => (
          <PlaceCard place={offer} key={offer.id} type={type} />
        ))}
      </div>
    </div>
  );
};

export default OffersList;

