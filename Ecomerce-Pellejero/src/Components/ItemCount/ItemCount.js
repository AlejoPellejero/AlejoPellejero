import React, { useState } from 'react';
import Count from './Count';
import '../Items/Items.css';

export default function ItemCount({stock, initial, onAdd}) {
    const [quantity, setQuantity] = useState({
        value: initial
    });
    
    function checkStock(count, stock){
        if (count <= stock) {
            onAdd(count)
        } else {
            console.log("No hay stock")
        }
    }

    return (
        <>
            <Count initial={initial}/>
            <button className='button-add-to-cart' onClick={() => checkStock(quantity.value, stock)}>Add to cart</button>
        </>
    );
}

