import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../generalData/asyncProductData';
import ItemDetail from '../ItemDetailContainer/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

function ItemDetailContainer(props) {
    const { productId } = useParams();   

    const [detailState, setDetail] = useState();
    const [load, setLoad] = useState(true)

    useEffect(() => {
        getProductById(productId)
            .then(res => {
                setDetail(res)      
                setLoad(false)          
            })
            .catch(error => console.log(error))
    }, [productId])


    return (
        <div className='item-detail-container'>
            {load ? <h1>Cargando...</h1> : <ItemDetail initialCount={0} detail={detailState} />}
        </div>
    );
}

export default ItemDetailContainer;
