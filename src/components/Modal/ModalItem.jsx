import styles from './ModalItem.module.css';
import { Button } from '../../components/UI/Button';
export const ModalItem = ({ itemData, myChose }) => {
  return (
    <div className={styles.modal__item__container}>
      <img className={styles.item__img} src={itemData.cover_image}></img>
      <div className={styles.container}>
        <p className={styles.txt__album}>{itemData.title}</p>

        <p className={styles.txt}>{itemData.year}</p>
      </div>
      <div className={styles.btn__container}>
        <Button
          onClick={() => {
            myChose(itemData);
          }}
        >
          Have
        </Button>
        <Button
          onClick={() => {
            myChose(itemData);
          }}
        >
          Wish
        </Button>
      </div>
    </div>
  );
};
{
  /* <li key={album.id}>
  <img style={{ width: '100px' }} src={`${album.thumb}`} alt="" />
  <a href={`https://www.discogs.com${album.uri}`}>{album.title}</a>
  {album.year}
  <button
    onClick={() => {
      myChose(album);
    }}
  >
    Click
  </button>
</li>; */
}
