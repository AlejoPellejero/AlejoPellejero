import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListCont from './Components/ItemsContainer/ItemListCont';
import Item from './Components/Items/Items';
import './App.css';

function GeneralPage() {
  return (
    <div className="container-big">
      <NavBar />
      <ItemListCont greetings='Welcome to my personal page' />
      <div className='container-items-product'>
        <Item />
      </div>
    </div>
  );
}

export default GeneralPage;
