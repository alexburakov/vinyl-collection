import { useState } from 'react';
import styles from './MyCollection.module.css';
import { Content } from '../components/Content';
import { Menu } from '../components/Menu';
import { ModalContainer } from '../components/ModalContainer';
import { Modal } from '../components/Modal';

export const MyCollection = () => {
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
