import { NavLink } from 'react-router-dom';
import styles from './Page404.module.css';

export const Page404 = () => {
  return (
    <div className={styles.container__404}>
      <h1>404</h1>
      <p>Page not found</p>
      <NavLink to="/">To the homepage</NavLink>
    </div>
  );
};
