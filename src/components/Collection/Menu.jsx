import styles from './Menu.module.css';
import addItem__ico from '../../static/add_item.svg';
import logout__ico from '../../static/logout.svg';

export const Menu = ({
  open,
  logout,
  allItemsCount,
  itemCount,
  wishCount,
  setFilter,
  filterState,
}) => {
  return (
    <div className={styles.menu__container}>
      <button className={styles.menu__block} onClick={() => open()}>
        <img src={addItem__ico}></img>
        <p className={styles.menu__block__subheader}>add album</p>
      </button>
      <div className={styles.menu__filters}>
        <div
          className={`${styles.menu__block} ${
            filterState === 'all' ? styles.menu__filter__active : ''
          }`}
          onClick={() => setFilter('all')}
        >
          <p className={styles.menu__number}>{allItemsCount}</p>
          <p>all</p>
        </div>
        <div
          className={`${styles.menu__block} ${
            filterState === 'collection' ? styles.menu__filter__active : ''
          }`}
          onClick={() => setFilter('collection')}
        >
          <p className={styles.menu__number}>{itemCount}</p>
          <p>collection</p>
        </div>
        <div
          className={`${styles.menu__block} ${
            filterState === 'wish' ? styles.menu__filter__active : ''
          }`}
          onClick={() => setFilter('wish')}
        >
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
