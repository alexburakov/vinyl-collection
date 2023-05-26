import styles from './Item.module.css';

export const Item = () => {
  const url =
    'https://images.unsplash.com/photo-1602848597941-0d3d3a2c1241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80';
  return (
    <div className={styles.item__container}>
      <img className={styles.img} src={url}></img>
      <div className={styles.txt__container}>
        <p className={`${styles.txt} ${styles.txt__gray}`}>{`Artist name`}</p>
        <p className={styles.txt}>
          {`David Bowie The Rise And Fall Of Ziggy Stardust And The Spiders From
          Mars`}
        </p>
        <p className={`${styles.txt} ${styles.txt__gray}`}>{`1998`}</p>
      </div>
    </div>
  );
};
