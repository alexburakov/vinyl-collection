import styles from './ModalItemsList.module.css';
import { ModalItem } from './ModalItem';

export const ModalItemsList = () => {
  return (
    <div className={styles.modal__items__container}>
      <ModalItem />
      <ModalItem />
      <ModalItem />
      <ModalItem />
      <ModalItem />
      <ModalItem />
      <ModalItem />
      <ModalItem />
      <ModalItem />
      <ModalItem />
      <ModalItem />
      <ModalItem />
    </div>
  );
};
