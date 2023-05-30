import styles from './Menu.module.css';
import addItem__ico from '../../static/add_item.svg';
import logout__ico from '../../static/logout.svg';

export const Menu = ({ open, logout, itemCount, wishCount }) => {
  return (
    <div className={styles.menu__container}>
      <a className={styles.menu__block} onClick={() => open()}>
        <img src={addItem__ico}></img>
        <p className={styles.menu__block__subheader}>add album</p>
      </a>
      <div className={styles.menu__filters}>
        <div className={styles.menu__block}>
          <p className={styles.menu__number}>{itemCount}</p>
          <p>all</p>
        </div>
        <div className={`${styles.menu__block} ${styles.menu__filter__active}`}>
          <p className={styles.menu__number}>{itemCount}</p>
          <p>collection</p>
        </div>
        <div className={styles.menu__block}>
          <p className={styles.menu__number}>{wishCount}</p>
          <p>wishlist</p>
        </div>
      </div>
      <a className={styles.menu__block} onClick={() => logout()}>
        <img src={logout__ico}></img>
        <p className={styles.menu__block__subheader}>logout</p>
      </a>
    </div>
  );
};
