import { useState, useEffect } from 'react';
import styles from './MyCollection.module.css';
import { filterObjectsByValue } from '../helpers/commonHelpers';
import { Content } from '../components/Collection/Content';
import { Menu } from '../components/Collection/Menu';
import { ModalContainer } from '../components/Modal/ModalContainer';
import { Modal } from '../components/Modal/Modal';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isLogout } from '../store/authSlice';
import { loadingCollection } from '../store/collectionSlice';

const MyCollection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const isLogin = useSelector((state) => state.auth.status);
  const currentUser = useSelector((state) => state.auth.user);
  const rawCollection = useSelector((state) => state.collection.collection);
  const [filteredCollection, setFilteredCollection] = useState(rawCollection);
  const [filterState, setFilterState] = useState('all');

  const setFilter = (filterState) => {
    setFilterState(filterState);
    console.log(filterState);
    if (filterState === 'wish') {
      setFilteredCollection(rawCollection.filter((item) => item.wish === true));
    } else if (filterState === 'collection') {
      setFilteredCollection(rawCollection.filter((item) => item.wish !== true));
    } else if (filterState === 'all') {
      setFilteredCollection(rawCollection);
    }
    console.log(filteredCollection);
  };

  const onChangeInput = (value) => {
    //setFilteredCollection(filterObjectsByValue(filteredCollection, value));
    const filteredResult = filterObjectsByValue(rawCollection, value);
    setFilteredCollection(filteredResult);
  };

  useEffect(() => {
    setFilteredCollection(rawCollection);
  }, [rawCollection]);

  //

  useEffect(() => {
    if (isLogin !== 'login') {
      navigate('/login');
    }
  }, [isLogin, navigate]);

  useEffect(() => {
    dispatch(loadingCollection(currentUser));
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
            setFilter={setFilter}
            filterState={filterState}
            allItemsCount={rawCollection.length}
            itemCount={
              rawCollection.filter((item) => item.wish !== true).length
            }
            wishCount={
              rawCollection.filter((item) => item.wish === true).length
            }
          />
          <Content
            collection={filteredCollection}
            collectionLength={rawCollection.length}
            onChangeInput={onChangeInput}
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
