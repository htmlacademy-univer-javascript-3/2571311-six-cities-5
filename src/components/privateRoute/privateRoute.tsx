import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../utils/const/const';

interface IPrivateRouteProps {
    isAuthenticated: boolean;
    children: JSX.Element;
  }

export const PrivateRoute: React.FC<IPrivateRouteProps> = ({isAuthenticated, children}) => (
  isAuthenticated ? children : <Navigate to={AppRoute.Login}/>
);
