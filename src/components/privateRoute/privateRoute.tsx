import { AppRoute } from '../../utils/const/const';
import { useAppSelector } from '../../store/hooks/hooks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
      navigate(AppRoute.Login);
    }
  }, [navigate, authorizationStatus]);

  return element;
};

export default PrivateRoute;
