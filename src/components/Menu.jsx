import styles from './Menu.module.css';
import addItem__ico from '../static/add_item.svg';
import logout__ico from '../static/logout.svg';
export const Menu = () => {
  return (
    <div className={styles.menu__container}>
      <div className={styles.add_item}>
        <img src={addItem__ico}></img>
        <p>add album</p>
      </div>
      <div className={styles.menu__filters}>
        <div className={styles.filter__all}>
          <p>0</p>
          <p>all</p>
        </div>
        <div className={styles.filter__collection}>
          <p>0</p>
          <p>collection</p>
        </div>
        <div className={styles.filter__wishlist}>
          <p>0</p>
          <p>wishlist</p>
        </div>
      </div>
      <div className={styles.logout}>
        <img src={logout__ico}></img>
        <p>logout</p>
      </div>
    </div>
  );
};
