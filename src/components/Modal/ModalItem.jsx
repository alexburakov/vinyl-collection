import styles from './ModalItem.module.css';
import { Button } from '../../components/UI/Button';
import img_blank from '../../static/img_fallback_img.jpg';
import { useState } from 'react';
export const ModalItem = ({ itemData, myChose }) => {
  const wish = true;
  const have = false;
  const [blockButton, setBlockButton] = useState(false);

  const [imageSrc, setImageSrc] = useState(itemData.cover_image);

  const handleError = () => {
    setImageSrc(img_blank);
  };

  return (
    <div className={styles.modal__item__container}>
      <img
        className={styles.item__img}
        src={imageSrc}
        onError={handleError}
      ></img>
      <div className={styles.container}>
        <p className={styles.txt__album}>{itemData.title}</p>

        <p className={styles.txt}>{itemData.year}</p>
      </div>
      {!itemData.have && !blockButton ? (
        <div className={styles.btn__container}>
          <Button
            onClick={() => {
              setBlockButton(true);
              myChose(itemData, have);
            }}
          >
            Have
          </Button>
          <Button
            onClick={() => {
              setBlockButton(true);
              myChose(itemData, wish);
            }}
          >
            Wish
          </Button>
        </div>
      ) : (
        <>
          <div className={styles.btn__container}>
            <span className={styles.in__collection}>В коллекции</span>
          </div>
        </>
      )}
    </div>
  );
};
