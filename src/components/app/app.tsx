import { TPlaceCardEntity } from '../placeCard.typings/placeCard.typings';
import MainPage from '../../../pages/mainPage/mainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../../../pages/loginPage/loginPage';
import FavoritesPage from '../../../pages/favoritesPage/favoritesPage';
import AuthChecker from '../AuthChecker/AuthChecker';
import OfferPage from '../../../pages/offerPage/offerPage';
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
            <AuthChecker element={<FavoritesPage places={places} />} isAuthorized={false} />
          }
        />
        <Route path="/offer/:id" element={<OfferPage />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
