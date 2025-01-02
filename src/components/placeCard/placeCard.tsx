import { MouseEventHandler } from 'react';
import { TPlaceCardEntity } from '../placeCard.typings/placeCard.typings';
import { Link } from 'react-router-dom';


type TPlaceCardProps = {
  place: TPlaceCardEntity;
  onMouseOver?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  type: 'Main' | 'Favorites';
};

function PlaceCard({
  place,
  onMouseOver,
  onMouseLeave,
  type,
}: TPlaceCardProps): JSX.Element {
  const imageSrc = place.imageSrc;
  const mark = place.mark;
  const priceValue = place.priceValue;
  const priceType = place.priceType;
  const starRating = place.starRating;
  const name = place.name;
  return (
    <article className="cities__card place-card" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {mark ? (
        <div className="place-card__mark">
          <span>{mark}</span>
        </div>
      ) : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${place.id}`}>
          <img
            className="place-card__image"
            src={imageSrc}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{priceValue}</b>
            <span className="place-card__price-text">
              &#47;&nbsp;{priceType}
            </span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${starRating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
