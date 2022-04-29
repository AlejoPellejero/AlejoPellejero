import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListCont from './Components/ItemsContainer/ItemListCont';
import './App.css';

function GeneralPage() {
  return (
    <div className="container-big">
      <NavBar />
      <ItemListCont greetings='Welcome to my personal page' />      
    </div>
  );
}

export default GeneralPage;
