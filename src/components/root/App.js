import React, { useState } from 'react';
import News from '../News/News';
import { NewsContextProvider } from '../NewsContext/NewsContext';
import './App.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';



function App() {
  const [modalActive, setModalActive] = useState(true)
  return (
    <>
      <Button className='open-btn' onClick={() => setModalActive(true)}>Поиск</Button>

      <NewsContextProvider>
        <News />
      </NewsContextProvider>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>Поиск новости</p>
      </Modal>


    </>
  );
}

export default App;
