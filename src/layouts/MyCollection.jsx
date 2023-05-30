import { useState, useEffect } from 'react';
import styles from './MyCollection.module.css';
import { Content } from '../components/Collection/Content';
import { Menu } from '../components/Collection/Menu';
import { ModalContainer } from '../components/Modal/ModalContainer';
import { Modal } from '../components/Modal/Modal';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isLogout } from '../store/authSlice';
import { onLoading } from '../store/collectionSlice';

const MyCollection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const isLogin = useSelector((state) => state.auth.status);
  const myCollection = useSelector((state) => state.collection.collection);

  useEffect(() => {
    if (isLogin !== 'login') {
      navigate('/login');
    }
  }, [isLogin, navigate]);

  useEffect(() => {
    dispatch(onLoading());
  }, []);

  const toggle = () => setModalVisible(!modalVisible);
  const logout = () => {
    dispatch(isLogout());
  };

  return (
    <>
      {isLogin === 'login' && (
        <div className={styles.container}>
          <Menu
            open={toggle}
            logout={logout}
            itemCount={myCollection.length}
            wishCount={myCollection.filter((item) => item.wish === true).length}
          />
          <Content
            collection={myCollection}
            collectionLength={myCollection.length}
          />
          {modalVisible && (
            <ModalContainer show={modalVisible} close={toggle}>
              <Modal close={toggle} />
            </ModalContainer>
          )}
        </div>
      )}
    </>
  );
};

export default MyCollection;
