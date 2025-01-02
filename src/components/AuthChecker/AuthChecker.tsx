import LoginPage from '../../../pages/LoginPage/LoginPage';

type AuthCheckerProps = {
    element: JSX.Element;
  isAuthorized: boolean;
};

const AuthChecker = ({
  element,
  isAuthorized,
}: AuthCheckerProps): JSX.Element =>
  isAuthorized ? element : <LoginPage />;

export default AuthChecker;
