import { setCity, setOffers } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { CITIES } from '../../utils/const/const';
import {offersSample} from '../../mocks/offersSample';

export const CitiesList = () => {
  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {
        Object.entries(CITIES).map(([cityName, city]) => (
          <li key={cityName} className="locations__item">
            <a className={`locations__item-link tabs__item ${(cityName === currentCity.name) ? 'tabs__item--active' : null}`}
              href="#"
              onClick={() => {
                dispatch(setCity({city: city}));
                dispatch(setOffers({offers: offersSample.filter((offer) => offer.city.name === cityName)}));
              }}
            >
              <span>{cityName}</span>
            </a>
          </li>
        ))
      }
    </ul>
  );
};
