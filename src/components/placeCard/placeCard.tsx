import { Link } from 'react-router-dom';
import { TPlaceCard, TPoint } from '../../utils/types/types';
import { Rating } from '../rating/rating';
import offersToPoints from '../../utils/offersToPoints/offersToPoints';
import classNames from 'classnames';
import BookmarkButton from '../bookmarkButton/bookmarkButton';
import { PlaceClassTypes } from '../../utils/const/const';


interface TPlaceCardProps {
  place: TPlaceCard;
  type: PlaceClassTypes;
  onOfferSelect?: (point: TPoint | undefined) => void;
}

const offerViewConfig = {
  [PlaceClassTypes.Cities]: {
    cardClassName: 'cities__card',
    imageWrapperClassName: 'cities__image-wrapper',
    imageWidth: '260',
    imageHeight: '200',
  },
  [PlaceClassTypes.Favorites]: {
    cardClassName: 'favorites__card',
    imageWrapperClassName: 'favorites__image-wrapper',
    imageWidth: '150',
    imageHeight: '110',
  },
  [PlaceClassTypes.NearPlaces]: {
    cardClassName: 'near-places__card',
    imageWrapperClassName: 'near-places__image-wrapper',
    imageWidth: '260',
    imageHeight: '200',
  },
};

function PlaceCard({ place, type, onOfferSelect }: TPlaceCardProps): JSX.Element {
  const coverImage = place.imageSrc; // Убедитесь, что это строка
  const offerPoint = offersToPoints([place])[0]; // Проверьте правильность этой функции

  const viewConfig = offerViewConfig[type];

  return (
    <article
      className={classNames(viewConfig.cardClassName, 'place-card')}
      onMouseOver={onOfferSelect && (() => onOfferSelect(offerPoint))}
      onMouseLeave={onOfferSelect && (() => onOfferSelect(undefined))}
    >
      {place.isPremium && (
        <div className="place-card__mark">
          <span>{place.isPremium}</span>
        </div>
      )}
      <div
        className={classNames(
          viewConfig.imageWrapperClassName,
          'place-card__image-wrapper'
        )}
      >
        <Link to={`/offer/${place.id}`}>
          <img
            className="place-card__image"
            src={coverImage}
            width={viewConfig.imageWidth}
            height={viewConfig.imageHeight}
            alt={place.name}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">
              &#47;&nbsp;{place.price}
            </span>
          </div>
          <BookmarkButton marked={type === PlaceClassTypes['Favorites']} />
        </div>
        <Rating
          rating={place.rating}
          objectType="place-card"
        />
        <h2 className="place-card__name">
          <Link to={`/offer/${place.id}`}>{place.name}</Link>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;

