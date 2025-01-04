import { useMemo, useState } from 'react';
import Map from '../../src/components/map/map.tsx';
import { TPlaceCard, TPoint } from '../../src/utils/types/types';
import { useAppSelector } from '../../src/store/hooks/hooks';
import { OffersList } from '../../src/components/offersList/offersList';
import { CitiesList } from '../../src/components/citiesList/citiesList.tsx';
import { SortOrder } from '../../src/components/sortingFilter/sortingFilter.typings.ts';
import offersToPoints from '../../src/utils/offersToPoints/offersToPoints.tsx';
import SortingFilter from '../../src/components/sortingFilter/sortingFilter.tsx';
import { PlaceClassTypes } from '../../src/utils/const/const.tsx';


export const MainPage = () => {
  const [selectedPlace, setSelectedPlace] = useState<TPlaceCard | undefined>(undefined);

  const currentCity = useAppSelector((state) => state.city);
  const currentOffers = useAppSelector((state) => state.offers);

  const offersPoints = useMemo(() => offersToPoints(currentOffers), [currentOffers]);
  const [activePoint, setActivePoint] = useState<TPoint | undefined>(undefined);
  
  const handleOfferSelect = (point: TPoint | undefined) => {
    setActivePoint(point);
  };

  const handleListItemHover = (placeItemId: number | null) => {
    const currentPlace = currentOffers?.find((place) => place.id === placeItemId);
    setSelectedPlace(currentPlace);
  };

  const [filter, setFilter] = useState<SortOrder>(SortOrder.POPULAR);
  const handleFilterChange = (newFilter: SortOrder) => {
    setFilter(newFilter);
  };

  const sortedOffers = useMemo(() => {
    switch (filter) {
      case SortOrder.TOP_RATED:
        return currentOffers.sort((a, b) => b.rating - a.rating);
      case SortOrder.HIGH_TO_LOW:
        return currentOffers.sort((a, b) => b.price - a.price);
      case SortOrder.LOW_TO_HIGH:
        return currentOffers.sort((a, b) => a.price - b.price);
      default:
        return currentOffers;
    }
  }, [currentOffers, filter]);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers?.length} places to stay in {currentCity.name}</b>
              <SortingFilter
                currentFilter={filter}
                onFilterChange={handleFilterChange}
              />
              <OffersList offers={sortedOffers} type={PlaceClassTypes.Cities} onOfferSelect={handleOfferSelect} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={currentCity} places={currentOffers} selectedPlace={selectedPlace} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
