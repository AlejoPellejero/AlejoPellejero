import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../generalData/asyncProductData';
import ItemList from '../ItemsContainer/ItemList/ItemList';
import './ItemListCont.css';

function ItemListCont(props) {
    const { categoryId } = useParams()

    const [itemState, setItems] = useState();    
    const [load, setLoad] = useState(true)
   
    useEffect(() => {
        getProducts(categoryId)
          .then(resp => {
            setItems(resp)        
            setLoad(false)    
          })
          .catch(error => console.log(error))
    
      }, [categoryId])

    return (
        <>
            <div className='items-container'>
                <h1 className='item-h1'>{props && props.greetings ? props.greetings : "Welcome"}</h1>
            </div>
            <div className='container-items-product'>
                {load ? <h1>Cargando...</h1> : <ItemList products={itemState}/>}
            </div>
        </>
    );
}

export default ItemListCont;
