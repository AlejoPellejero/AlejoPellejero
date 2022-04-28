import React, { useState } from 'react';
import '../Items/Items.css';

export default function ItemCount({stock, initial, onAdd}) {
    const [quantity, setQuantity] = useState({
        value: initial
    });

    function moreOrLessFunct(innerText, count) {
        if (innerText === "+") {
            setQuantity({
                value: count + 1
            })
        } else {
            if (count >= 1) {
                setQuantity({
                    value: count - 1
                })
            } else {
                setQuantity({
                    value: count
                })
            }
        }
    }

    function checkStock(count, stock){
        if (count <= stock) {
            onAdd(count)
        } else {
            console.log("No hay stock")
        }
    }

    return (
        <>
            <div className='container-contador'>
                <span className='general-span span-less' onClick={(e) => moreOrLessFunct(e.target.innerText, quantity.value)}>-</span>
                <input value={quantity.value} className='input-count' name="count" readOnly />
                <span className='general-span span-plus' onClick={(e) => moreOrLessFunct(e.target.innerText, quantity.value)}>+</span>
            </div>
            <button className='button-add-to-cart' onClick={() => checkStock(quantity.value, stock)}>Add to cart</button>
        </>
    );
}

