import styles from './MainPage.module.css';
import logo__ico from '../static/logo.svg';
import { LoginForm } from '../components/LoginForm';

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main__container}>
        <img className={styles.logo} src={logo__ico} />
        <LoginForm />
      </main>
      <div className={styles.presentation}>
        <p className={styles.presentation__header}>
          You local vinyl collection
        </p>
      </div>
    </div>
  );
};

export default MainPage;
