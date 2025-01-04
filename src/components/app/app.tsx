import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../privateRoute/privateRoute';
import LoginPage from '../../../pages/loginPage/loginPage';
import OfferPage from '../../../pages/offerPage/offerPage';
import MainPage from '../../../pages/mainPage/mainPage';
import FavoritesPage from '../../../pages/favoritesPage/favoritesPage';
import Error404 from '../../../pages/Error404/Error404';
import useAppInit from '../../utils/useInitApp/useInitApp';
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
          element={<PrivateRoute element={<FavoritesPage places={[]} />} />}
        />
        <Route path={APP_ROUTES.OFFER(':id')} element={<OfferPage />} />
        <Route path="/*" element={<Error404 description="Error" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
