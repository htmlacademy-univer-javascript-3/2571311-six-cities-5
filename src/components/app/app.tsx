import { TPlaceCardEntity } from '../PlaceCard.typings/PlaceCard.typings';
import MainPage from '../../../pages/MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../../../pages/LoginPage/LoginPage';
import FavoritesPage from '../../../pages/FavoritesPage/FavoritesPage';
import AuthChecker from '../AuthChecker/AuthChecker';
import OfferPage from '../../../pages/OfferPage/OfferPage';
import Error404 from '../../../pages/Error404/Error404';

type TAppProps = {
    places: TPlaceCardEntity[];
};


function App({ places }: TAppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage places={places} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/favorites"
          element={
            <AuthChecker element={<FavoritesPage />} isAuthorized={false} />
          }
        />
        <Route path="/offer/:id" element={<OfferPage />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
