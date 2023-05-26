import styles from './Menu.module.css';
import addItem__ico from '../static/add_item.svg';
import logout__ico from '../static/logout.svg';
export const Menu = ({ open }) => {
  return (
    <div className={styles.menu__container}>
      <div className={styles.menu__block} onClick={() => open()}>
        <img src={addItem__ico}></img>
        <p className={styles.menu__block__subheader}>add album</p>
      </div>
      <div className={styles.menu__filters}>
        <div className={styles.menu__block}>
          <p className={styles.menu__number}>{10}</p>
          <p>all</p>
        </div>
        <div className={`${styles.menu__block} ${styles.menu__filter__active}`}>
          <p className={styles.menu__number}>{12}</p>
          <p>collection</p>
        </div>
        <div className={styles.menu__block}>
          <p className={styles.menu__number}>{0}</p>
          <p>wishlist</p>
        </div>
      </div>
      <div className={styles.menu__block}>
        <img src={logout__ico}></img>
        <p className={styles.menu__block__subheader}>logout</p>
      </div>
    </div>
  );
};
