import './App.css';
import React, { Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Page404 } from './layouts/Page404';
import { Loading } from './components/UI/Loading';

//import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, setLoginTime, setToken } from './store/authSlice';

const MainPage = React.lazy(() => import('./layouts/MainPage'));
const MyCollection = React.lazy(() => import('./layouts/MyCollection'));

export function App() {
  // const navigate = useNavigate();
  // navigate('/my-collection');

  // if (!loginSucess) navigate('/login')

  //
  const dispatch = useDispatch();

  useEffect(() => {
    const localUser = localStorage.getItem('user');
    if (!!localUser) {
      const user = JSON.parse(localUser);
      dispatch(setUser(user.userEmail));
      dispatch(setLoginTime(user.loginTime));
      dispatch(setToken(user.idToken));
    }

    const localStore = JSON.parse(localUser);
    const url =
      'https://securetoken.googleapis.com/v1/token?key=AIzaSyAFgPDCGK_qe_vSCjpoyodb_8DQPCrGw5k';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        grantType: 'refreshToken',
        refresh_token: localStore.idToken,
      }),
      headers: { 'Content-type': 'application/x-www-form-urlencoded' },
    })
      .then((response) => response.json())
      .then((data) => {
        // Обработка успешного ответа
        console.log(localStore.refreshToken);
        console.log(data);
      })
      .catch((error) => {
        // Обработка ошибок
        console.log(localStore.refreshToken);
        console.error(error);
      });
  }, []);

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
