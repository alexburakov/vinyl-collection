import styles from './Modal.module.css';
import qr from '../../static/qr.svg';
import { useState } from 'react';
import { Input } from '../UI/Input';
import { ModalItemsList } from './ModalItemsList';
import { Button } from '../UI/Button';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { firebaseConfig } from '../../helpers/configData';

export const Modal = ({ close }) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const [dataRes, setData] = useState([]);

  async function fetchArtistAlbums(query) {
    try {
      const page = 1;
      const url = `https://api.discogs.com/database/search?q=${query}&key=${
        import.meta.env.VITE_API_DISCOGS_KEY
      }=${page}&per_page=50&format=vinyl`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      setData(data.results);
    } catch (error) {
      console.error(error);
    }
  }

  const searchAlbums = () => {
    fetchArtistAlbums('звери');
  };

  const addInCollection = async (choiseAlbum, wish) => {
    const user = 'user1@mail.ru';

    const [artist, album] = choiseAlbum.title
      .split('-')
      .map((item) => item.trim());
    const year = choiseAlbum.year;
    const id = choiseAlbum.id;
    const imgUrl = choiseAlbum.cover_image;

    const docRef = await addDoc(collection(db, user), {
      wish: wish,
      artist: artist,
      album: album,
      year: year,
      imgUrl: choiseAlbum.cover_image,
    });

    console.log(artist);
    console.log(album);
    console.log(year);
    console.log(id);
    console.log(imgUrl);
    console.log(wish);
    console.log('Document written with ID: ', docRef.id);
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
