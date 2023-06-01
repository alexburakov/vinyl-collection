import styles from './Modal.module.css';
import qr from '../../static/qr.svg';
import { useState } from 'react';
import { Input } from '../UI/Input';
import { ModalItemsList } from './ModalItemsList';
import { Button } from '../UI/Button';

export const Modal = ({ close }) => {
  const [dataRes, setData] = useState([]);

  async function fetchArtistAlbums(query) {
    try {
      const page = 1;
      const url = `https://api.discogs.com/database/search?q=${query}&key=${
        import.meta.env.VITE_API_DISCOGS_KEY
      }=${page}&per_page=20&format=vinyl`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      setData(data.results);
    } catch (error) {
      console.error(error);
    }
  }

  const searchAlbums = () => {
    fetchArtistAlbums('With The Lights Out');
  };

  const addInCollection = (e) => {
    alert(e);
    console.log(e);
  };

  return (
    <div className={styles.modal__container}>
      <h2 className={styles.modal__header}>Add album</h2>
      <button className={styles.modal__close__btn} onClick={() => close()}>
        ✕
      </button>
      <div className={styles.input__container}>
        <Input />
        <div className={styles.input__button}>
          <Button onClick={searchAlbums}>Search</Button>
        </div>
        <button className={styles.modal__qr__btn}>
          <img src={qr}></img>
        </button>
      </div>
      <ModalItemsList resultSearch={dataRes} myChose={addInCollection} />
    </div>
  );
};
