import styles from './ItemList.module.css';
import { Item } from './Item';

export const ItemList = ({ collection }) => {
  return (
    <div className={styles.items__container}>
      {collection.map((element) => (
        <Item
          key={element.id}
          wish={element.wish}
          artist={element.artist}
          album={element.album}
          year={element.year}
          imgUrl={element.imgUrl}
        />
      ))}
    </div>
  );
};
