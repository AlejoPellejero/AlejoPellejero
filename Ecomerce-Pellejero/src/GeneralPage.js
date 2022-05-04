import React from 'react';
import ItemListCont from './Components/ItemsContainer/ItemListCont';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import './App.css';

function GeneralPage() {
  return (
    <div className="container-big">
      <NavBar />
      <ItemListCont greetings='Welcome to our Shop' /> 
      {/*<ItemDetailContainer />*/}
    </div>
  );
}

export default GeneralPage;
