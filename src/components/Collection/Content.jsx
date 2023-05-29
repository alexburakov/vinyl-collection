import styles from './Content.module.css';
import { Input } from '../UI/Input';
import { ItemList } from './ItemList';
export const Content = () => {
  return (
    <div className={styles.content__container}>
      <h1 className={styles.content__header}>
        {`My collection`}
        <span className={styles.header__counter}>{22}</span>
      </h1>
      <div className={styles.input__container}>
        <Input />
      </div>
      <ItemList />
    </div>
  );
};