import ReactDom from 'react-dom';
import styles from './ModalContainer.module.css';

export const ModalContainer = ({ show, close, children }) => {
  return ReactDom.createPortal(
    <>
      {show ? (
        <div className={styles.modalContainer} onClick={() => close()}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      ) : (
        ''
      )}
    </>,
    document.getElementById('modal')
  );
};
