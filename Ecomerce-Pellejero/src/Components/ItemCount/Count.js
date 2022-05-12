import React, { useState } from 'react';
import '../Items/Items.css';

export default function Count({stock, initial, addToCart, onSet}) {
    const [quantity, setQuantity] = useState({
        value: initial
    });

    function moreOrLessFunct(innerText, count) {
        if (innerText === "+" && stock >= count) {
            setQuantity({value: count + 1})        
        } else {
            if (count >= 1 && stock <= count) {
                setQuantity({value: count - 1})                
            } else {
                setQuantity({value: count})         
            }
        }
    }    

    return (
        <>        
        <div className='container-contador'>
            <span className='general-span span-less' onClick={(e) => moreOrLessFunct(e.target.innerText, quantity.value)}>-</span>
            <input value={quantity.value} className='input-count' name="count" readOnly />
            <span className='general-span span-plus' onClick={(e) => moreOrLessFunct(e.target.innerText, quantity.value)}>+</span>
        </div>
        {addToCart ? <button className='button-buy' onClick={() => onSet(quantity.value)}>Agregar al carrito</button> : null}
        </>
    );
}

