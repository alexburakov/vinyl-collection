import './App.css';
import { MainPage } from './layouts/MainPage';
import { MyCollection } from './layouts/MyCollection';
import { Modal } from './components/Modal';

export function App() {
  return (
    <>
      {false && <MainPage />}
      {false && <MyCollection />}
      {!false && <Modal />}
    </>
  );
}
