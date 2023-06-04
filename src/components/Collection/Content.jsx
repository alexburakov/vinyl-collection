import styles from './Content.module.css';
import { Input } from '../UI/Input';
import { ItemList } from './ItemList';
export const Content = ({ collection, collectionLength, onChangeInput }) => {
  return (
    <div className={styles.content__container}>
      <h1 className={styles.content__header}>
        {`My collection`}
        <span className={styles.header__counter}>{collectionLength}</span>
      </h1>
      <div className={styles.input__container}>
        <Input onChangeInput={onChangeInput} />
      </div>
      {collectionLength && collectionLength === 0 ? (
        <p className={styles.empty__message}>
          Your collection is empty, it's time to add your first album!
        </p>
      ) : (
        ''
      )}
      <ItemList collection={collection} collectionLength={collectionLength} />
    </div>
  );
};
