import { useAppSelector } from '../../store/hooks/hooks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../services/constants';

type TPrivateRouteProps = {
  element: JSX.Element;
};

const PrivateRoute = ({ element }: TPrivateRouteProps): JSX.Element => {
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(
    (state) => state.userSlice.authorizationStatus
  );

  useEffect(() => {
    if (!authorizationStatus) {
      navigate(APP_ROUTES.LOGIN);
    }
  }, [navigate, authorizationStatus]);

  return element;
};

export default PrivateRoute;
