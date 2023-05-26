import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Page404 } from './layouts/Page404';

const MainPage = React.lazy(() => import('./layouts/MainPage'));
const MyCollection = React.lazy(() => import('./layouts/MyCollection'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route
        path="/login"
        element={
          <React.Suspense fallback={<p>Loading...</p>}>
            <MainPage />
          </React.Suspense>
        }
      />
      <Route
        path="/my-collection"
        element={
          <React.Suspense fallback={<p>Loading...</p>}>
            <MyCollection />
          </React.Suspense>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
