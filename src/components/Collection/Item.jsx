import styles from './Item.module.css';

export const Item = ({ artist, album, year, imgUrl, wish }) => {
  return (
    <div className={styles.item__container}>
      <img
        className={`${styles.img} ${wish ? styles.wish : ''}`}
        src={imgUrl}
      ></img>
      <div className={styles.txt__container}>
        <p className={`${styles.txt} ${styles.txt__gray}`}>{artist}</p>
        <p className={styles.txt}>{album}</p>
        <p className={`${styles.txt} ${styles.txt__gray}`}>{year}</p>
      </div>
    </div>
  );
};
