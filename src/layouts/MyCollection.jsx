import { useState } from 'react';
import styles from './MyCollection.module.css';
import { Content } from '../components/Collection/Content';
import { Menu } from '../components/Collection/Menu';
import { ModalContainer } from '../components/Modal/ModalContainer';
import { Modal } from '../components/Modal/Modal';

const MyCollection = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggle = () => setModalVisible(!modalVisible);

  return (
    <div className={styles.container}>
      <Menu open={toggle} />
      <Content />
      {modalVisible && (
        <ModalContainer show={modalVisible} close={toggle}>
          <Modal close={toggle} />
        </ModalContainer>
      )}
    </div>
  );
};

export default MyCollection;
