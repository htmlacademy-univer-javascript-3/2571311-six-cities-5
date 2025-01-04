import { useEffect, useMemo, useState } from 'react';
import Map from '../../src/components/map/map.tsx';
import { useAppDispatch, useAppSelector } from '../../src/store/hooks/hooks';
import  OffersList  from '../../src/components/offersList/offersList';
import { SortOrder } from '../../src/components/sortingFilter/sortingFilter.typings.ts';
import SortingFilter from '../../src/components/sortingFilter/sortingFilter.tsx';
import offersToPoints from '../../src/utils/offersToPoints/offersToPoints.tsx';
import { updateCityOffers } from '../../src/store/action.ts';
import Spinner from '../../src/components/spinner/spinner.tsx';
import { LocationsTabs } from '../../src/components/LocationsTab/locationsTab.tsx';
import Header from '../../src/components/header/header.tsx';


const MainPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.offersSlice.loading);
  const city = useAppSelector((state) => state.offersSlice.city);
  const cityOffers = useAppSelector((state) => state.offersSlice.cityOffers);

  useEffect(() => {
    if (!loading) {
      dispatch(updateCityOffers());
    }
  }, [dispatch, loading, city]);

  const [filter, setFilter] = useState<SortOrder>(SortOrder.POPULAR);
  const handleFilterChange = (newFilter: SortOrder) => {
    setFilter(newFilter);
  };

  const mapPoints = useMemo(() => offersToPoints(cityOffers), [cityOffers]);

  return (
    <div className="page page--gray page--main">
      <Header />
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
                <b className="places__found">
                  {cityOffers.length} places to stay in {city.name}
                </b>
                <SortingFilter
                  currentFilter={filter}
                  onFilterChange={handleFilterChange}
                />
                <OffersList offers={cityOffers} type="Main" />
              </section>
              <div className="cities__right-section">
                <section
                  className="cities__map map"
                  style={{ background: 'none' }}
                >
                  {' '}
                  <Map city={city} points={mapPoints} />
                </section>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MainPage;