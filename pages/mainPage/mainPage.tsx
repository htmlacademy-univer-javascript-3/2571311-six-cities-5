import { useEffect, useMemo, useState } from 'react';
import Map from '../../src/components/map/map.tsx';
import { useAppDispatch, useAppSelector } from '../../src/store/hooks/hooks';
import { OffersList } from '../../src/components/offersList/offersList';
import { SortOrder } from '../../src/components/sortingFilter/sortingFilter.typings.ts';
import SortingFilter from '../../src/components/sortingFilter/sortingFilter.tsx';
import { PlaceClassTypes } from '../../src/utils/const/const.tsx';
import offersToPoints from '../../src/utils/offersToPoints/offersToPoints.tsx';
import { updateCityOffers } from '../../src/store/action.ts';
import Spinner from '../../src/components/spinner/spinner.tsx';
import { LocationsTabs } from '../../src/components/LocationsTab/locationsTab.tsx';
import { TPoint } from '../../src/utils/types/types.tsx';


export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { loading, city, cityOffers } = useAppSelector((state) => state.offersSlice);

  useEffect(() => {
    if (!loading && city) {
      dispatch(updateCityOffers());
    }
  }, [dispatch, loading, city]);

  const [filter, setFilter] = useState<SortOrder>(SortOrder.POPULAR);

  const handleFilterChange = (newFilter: SortOrder) => {
    setFilter(newFilter);
  };

  // Преобразуем cityOffers в точки
  const points = useMemo(() => offersToPoints(cityOffers), [cityOffers]);

  const [selectedPoint, setActivePoint] = useState<TPoint | undefined>(undefined);

  const handleOfferSelect = (point: TPoint | undefined) => {
    setActivePoint(point);
  };

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
        <LocationsTabs />
        {loading ? (
          <Spinner variant="block" />
        ) : (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{cityOffers.length} places to stay in {city.name}</b>
                <SortingFilter
                  currentFilter={filter}
                  onFilterChange={handleFilterChange}
                />
                <OffersList
                  offers={cityOffers}
                  type={PlaceClassTypes['Cities']}
                  onOfferSelect={handleOfferSelect}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={city} places={points} selectedPoint={selectedPoint} />
                </section>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};