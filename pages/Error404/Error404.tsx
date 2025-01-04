import { Link } from 'react-router-dom';
import { AppRoute } from '../../src/utils/const/const';
import styles from './styles.module.css';

type TErrorPageProps = {
  description?: string;
};

const Error404 = ({ description }: TErrorPageProps): JSX.Element => (
  <div className={`page ${styles.errorPage}`}>
    <div className={styles.errorBlock}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.errorMessage}>{description}</h2>
    </div>
    <Link to={AppRoute.Main} className={styles.linkMain}>
      Main page
    </Link>
  </div>
);

export default Error404;
