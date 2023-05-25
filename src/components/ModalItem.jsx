import styles from './ModalItem.module.css';
import { Button } from '../components/UI/Button';
export const ModalItem = () => {
  const url =
    'https://images.unsplash.com/photo-1602848597941-0d3d3a2c1241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80';
  return (
    <div className={styles.modal__item__container}>
      <img className={styles.item__img} src={url}></img>
      <div className={styles.container}>
        <p className={styles.txt}>{`Artist name`}</p>
        <p className={styles.txt}>{`1998`}</p>
      </div>
      <p className={styles.txt__album}>
        {`David Bowie The Rise And Fall Of Ziggy Stardust And The Spiders From
          Mars`}
      </p>
      <div className={styles.btn__container}>
        <Button>HAVE</Button>
        <Button>Wish</Button>
      </div>
    </div>
  );
};
