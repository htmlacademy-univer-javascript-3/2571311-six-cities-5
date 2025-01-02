import { useParams } from "react-router-dom";
import Error404 from "../Error404/Error404";
import { useMemo } from "react";
import { offers } from "../../src/mocks/offers";
import Review from "../../src/components/review/review";

const OfferPage = (): JSX.Element => {
  const { id } = useParams();

  const place = useMemo(
    () => offers.find(({ id: offerId }) => offerId === id),
    [id]
  );

  if (!place) {
    return <Error404 />;
  }

  return (
  <div className="page">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="main.html">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a
                  className="header__nav-link header__nav-link--profile"
                  href="#"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">
                    {place.host?.name || 'User'}  {/* Используем имя хозяина из пропсов */}
                  </span>
                  <span className="header__favorite-count">{place.reviews?.length || 0}</span>
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  <span className="header__signout">Sign out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {Array.isArray(place.imageSrc) ? (
              place.imageSrc.map((image, index) => (
                <div className="offer__image-wrapper" key={index}>
                  <img
                    className="offer__image"
                    src={image}
                    alt={`Image ${index + 1}`}
                  />
                </div>
              ))
            ) : (
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src={place.imageSrc}
                  alt="Place image"
                />
              </div>
            )}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {place.mark === 'Premium' && (
              <div className="offer__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{place.name}</h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: `${place.starRating * 20}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{place.starRating}</span>
            </div>
            <ul className="offer__features">
              {place.features?.map((feature, index) => (
                <li className="offer__feature" key={index}>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{place.priceValue}</b>
              <span className="offer__price-text">/{place.priceType}</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {place.features?.map((item, index) => (
                  <li className="offer__inside-item" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="offer__avatar user__avatar"
                    src={place.host?.avatar || "default-avatar.png"}
                    width="74"
                    height="74"
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">{place.host?.name}</span>
                <span className="offer__user-status">
                  {place.host?.isPro ? 'Pro' : 'Amateur'}
                </span>
              </div>
              <div className="offer__description">
                <p className="offer__text">{place.host?.description}</p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">
                Reviews &middot; <span className="reviews__amount">{place.reviews?.length}</span>
              </h2>
              <ul className="reviews__list">
                {place.reviews?.map((review, index) => (
                  <li className="reviews__item" key={index}>
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img
                          className="reviews__avatar user__avatar"
                          src={review.userAvatar}
                          width="54"
                          height="54"
                          alt="Reviews avatar"
                        />
                      </div>
                      <span className="reviews__user-name">{review.userName}</span>
                    </div>
                    <div className="reviews__info">
                      <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                          <span style={{ width: `${review.rating * 20}%` }}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p className="reviews__text">{review.text}</p>
                      <time className="reviews__time" dateTime={review.date}>
                        {review.date}
                      </time>
                    </div>
                  </li>
                ))}
              </ul>
              <Review />
            </section>
          </div>
        </div>
        <section className="offer__map map"></section>
      </section>
      <div className="container">
        <article className="near-places__card place-card">
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
            <div className="near-places__image-wrapper place-card__image-wrapper">
              <a href="#">
                <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Place image"></img>
              </a>
            </div>
            <div className="place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">&euro;180</b>
                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button className="place-card__bookmark-button button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use href="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{ width: '100%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <a href="#">Nice, cozy, warm big bed apartment</a>
              </h2>
              <p className="place-card__type">Apartment</p>
            </div>
          </article>
      </div>
    </main>
  </div>
);
};

export default OfferPage;

