import './App.css';
import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Page404 } from './layouts/Page404';
import { Loading } from './components/UI/Loading';

const MainPage = React.lazy(() => import('./layouts/MainPage'));
const MyCollection = React.lazy(() => import('./layouts/MyCollection'));

export function App() {
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
