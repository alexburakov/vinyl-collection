import styles from './MainPage.module.css';

export const MainPage = ({ children }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <main className={styles.main__container}>{children}</main>
        <div className={styles.presentation}>
          <p className={styles.presentation__header}>
            You local vinyl collection
          </p>
        </div>
      </div>
    </>
  );
};
