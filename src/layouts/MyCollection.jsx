import { useState, useEffect } from 'react';
import styles from './MyCollection.module.css';
import { Content } from '../components/Collection/Content';
import { Menu } from '../components/Collection/Menu';
import { ModalContainer } from '../components/Modal/ModalContainer';
import { Modal } from '../components/Modal/Modal';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isLogout } from '../store/authSlice';

const MyCollection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const isLogin = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (isLogin !== 'login') {
      navigate('/login');
    }
  }, [isLogin, navigate]);

  const toggle = () => setModalVisible(!modalVisible);
  const logout = () => {
    dispatch(isLogout());
  };

  return (
    <>
      {isLogin === 'login' && (
        <div className={styles.container}>
          <Menu open={toggle} logout={logout} />
          <Content />
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
