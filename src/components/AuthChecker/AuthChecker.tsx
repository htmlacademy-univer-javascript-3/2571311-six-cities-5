import { LoginPage } from '../../../pages/loginPage/loginPage';

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
