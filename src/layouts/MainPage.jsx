import styles from './MainPage.module.css';
import logo from '../static/logo.svg';
import { LoginForm } from '../components/LoginForm';

export const MainPage = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main__container}>
        <img className={styles.logo} src={logo} />
        <div className={styles.container__form}>
          <LoginForm />
        </div>
      </main>
      <div className={styles.presentation}>
        <p className={styles.presentation__header}>
          You local vinyl collection
        </p>
      </div>
    </div>
  );
};
