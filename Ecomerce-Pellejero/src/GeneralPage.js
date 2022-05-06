import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListCont from './Components/ItemsContainer/ItemListCont';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import './App.css';

function GeneralPage() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListCont greetings='Welcome to our Shop' />} />
        <Route path="/category/:id" element={<ItemListCont greetings='Welcome to our Shop' />} />
        <Route path="/item/:categoryId" element={<ItemDetailContainer />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default GeneralPage;
