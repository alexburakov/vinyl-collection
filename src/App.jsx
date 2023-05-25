import './App.css';
import { MainPage } from './layouts/MainPage';
import { MyCollection } from './layouts/MyCollection';

export function App() {
  return (
    <>
      {false && <MainPage />}
      {!false && <MyCollection />}
    </>
  );
}
