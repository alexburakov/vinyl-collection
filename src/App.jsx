import './App.css';
import React, { Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Page404 } from './layouts/Page404';
import { Loading } from './components/UI/Loading';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onLoading } from './store/authSlice';

const MainPage = React.lazy(() => import('./layouts/MainPage'));
const MyCollection = React.lazy(() => import('./layouts/MyCollection'));

export function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.status);

  useEffect(() => {
    dispatch(onLoading());
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (isLogin === 'login') {
      navigate('/my-collection');
    }
    return () => {
      isMounted = false;
    };
  }, [isLogin, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route
        path="/login"
        element={
          <Suspense fallback={<Loading />}>
            <MainPage />
          </Suspense>
        }
      />
      <Route
        path="/signUp"
        element={
          <Suspense fallback={<Loading />}>
            <MainPage />
          </Suspense>
        }
      />
      <Route
        path="/my-collection"
        element={
          <Suspense fallback={<Loading />}>
            <MyCollection />
          </Suspense>
        }
      />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
