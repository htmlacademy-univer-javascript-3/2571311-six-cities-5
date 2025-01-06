import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import Error404 from '../../pages/Error404/Error404';
import useAppInit from '../../utils/use-init-app/use-init-app';
import { APP_ROUTES } from '../../services/constants';

function App(): JSX.Element {
  useAppInit();
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.MAIN} element={<MainPage />} />
        <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
        <Route
          path={APP_ROUTES.FAVORITES}
          element={<PrivateRoute element={<FavoritesPage />} />}
        />
        <Route path={APP_ROUTES.OFFER(':id')} element={<OfferPage />} />
        <Route path="/*" element={<Error404 description="Error" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
