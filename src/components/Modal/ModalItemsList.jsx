import styles from './ModalItemsList.module.css';
import { ModalItem } from './ModalItem';

export const ModalItemsList = ({ resultSearch, myChose }) => {
  return (
    <div className={styles.modal__items__container}>
      <ul className={styles.modal__ul}>
        {resultSearch && resultSearch.length > 0 ? (
          resultSearch.map((itemData) => (
            <li key={itemData.id}>
              <ModalItem itemData={itemData} myChose={myChose} />
            </li>
          ))
        ) : (
          <p className={styles.zero__state__text}>Нет данных для отображения</p>
        )}
      </ul>
    </div>
  );
};
