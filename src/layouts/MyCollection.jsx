import styles from './MyCollection.module.css';
import { Content } from '../components/Content';
import { Menu } from '../components/Menu';

export const MyCollection = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <Content />
    </div>
  );
};
