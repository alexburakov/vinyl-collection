import styles from './Modal.module.css';
import { Input } from './UI/Input';
import { ModalItemsList } from './ModalItemsList';
import qr from '../static/qr.svg';

export const Modal = () => {
  return (
    <div className={styles.modal__container}>
      <h2 className={styles.modal__header}>Add album</h2>
      <button className={styles.modal__close__btn}>✕</button>
      <div className={styles.input__container}>
        <Input />
        <button className={styles.modal__qr__btn}>
          <img src={qr}></img>
        </button>
      </div>
      <ModalItemsList />
    </div>
  );
};
