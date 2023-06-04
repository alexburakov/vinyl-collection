import styles from './Modal.module.css';
import qr from '../../static/qr.svg';
import { useState } from 'react';
import { Input } from '../UI/Input';
import { ModalItemsList } from './ModalItemsList';
import { Button } from '../UI/Button';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { firebaseConfig } from '../../helpers/configData';
import { useDispatch, useSelector } from 'react-redux';
import { loadingCollection } from '../../store/collectionSlice';
import { useForm } from 'react-hook-form';

export const Modal = ({ close }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const [dataRes, setData] = useState([]);
  const [allPages, setAllPages] = useState({});

  const fetchArtistAlbums = async (query) => {
    try {
      const url = `https://api.discogs.com/database/search?q=${query}&key=${
        import.meta.env.VITE_API_DISCOGS_KEY
      }=1&per_page=100&format=vinyl`;
      const response = await fetch(url);
      const data = await response.json();
      const dataPage = data.results;
      console.log(data);
      setData(dataPage);
      setAllPages(data.pagination);
    } catch (error) {
      console.error(error);
    }
  };

  const searchAlbums = async (data) => {
    fetchArtistAlbums(data.query.toLowerCase());
  };

  const addInCollection = async (choiseAlbum, wish) => {
    const [artist, album] = choiseAlbum.title
      .split('-')
      .map((item) => item.trim());
    const year = choiseAlbum.year;
    const id = choiseAlbum.id;
    const imgUrl = choiseAlbum.cover_image;

    const docRef = await addDoc(collection(db, currentUser), {
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
    dispatch(loadingCollection(currentUser));
  };

  return (
    <div className={styles.modal__container}>
      <h2 className={styles.modal__header}>Add album</h2>
      <button className={styles.modal__close__btn} onClick={() => close()}>
        ✕
      </button>
      <div className={styles.input__container}>
        <Input
          placeholder={'Album, Artist, Barcode, more...'}
          register={register('query', { required: true })}
          onChange={() => {}}
        />
        <div className={styles.input__button}>
          <Button onClick={handleSubmit(searchAlbums)}>Search</Button>
        </div>
        <button className={styles.modal__qr__btn}>
          <img src={qr}></img>
        </button>
      </div>
      <p>
        allPages: {allPages.pages}
        Page: {allPages.page}
      </p>
      <ModalItemsList resultSearch={dataRes} myChose={addInCollection} />
    </div>
  );
};
