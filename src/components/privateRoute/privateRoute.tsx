import { useAppSelector } from '../../store/hooks/hooks';
import { Navigate } from 'react-router-dom';
import { APP_ROUTES } from '../../services/constants';

type TPrivateRouteProps = {
  element: JSX.Element;
};

const PrivateRoute = ({ element }: TPrivateRouteProps): JSX.Element => {
  const authorizationStatus = useAppSelector(
    (state) => state.userSlice.authorizationStatus
  );

  return authorizationStatus ? element : <Navigate to={APP_ROUTES.LOGIN} />;
};

export default PrivateRoute;
