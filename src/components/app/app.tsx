import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { favorites } from '../../mocks/favorites';
import { AppRoute } from '../../utils/const/const';
import { PrivateRoute } from '../privateRoute/privateRoute';
import { LoginPage } from '../../../pages/loginPage/loginPage';
import { OfferPage } from '../../../pages/offerPage/offerPage';
import { MainPage } from '../../../pages/mainPage/mainPage';
import { FavoritesPage } from '../../../pages/favoritesPage/favoritesPage';
import { Error404 } from '../../../pages/Error404/Error404';


export const App = () => {
  const isAuthenticated = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <FavoritesPage places={favorites} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Offer} element={<OfferPage />} />
        <Route path={'*'} element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
