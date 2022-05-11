import Count from '../../ItemCount/Count';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './ItemDetail.css';

export default function ItemDetail({ initialCount, detail }) {
    const [count, setCount] = useState({
        value: initialCount
    });

    function getValueAndSet(value) {
        if (value) {
            setCount(value)
        } else {
            console.log("Error, ther is not values")
        }
    }

    return (
        <div className='item-detail'>
            <div className='first-detail'>
                <img src={detail.img} alt="imagen del producto" />
                <div className='container-right'>
                    <h1 className='title'>{detail.name}</h1>
                    <h2 className='text-price'>Price: <span className='price'>${detail.price}</span></h2>
                    <h3 className='color'>Color:
                        <select className='select-type' name="select">
                            <option className='option' value="black" selected>Black</option>
                            <option className='option' value="blue">Blue</option>
                            <option className='option' value="yellow">Yellow</option>
                        </select>
                    </h3>
                    <h3 className='quantity'>Cantidad:
                        <select className='select-type' name="select">
                            <option className='option' value="1" selected>1 unidad</option>
                            <option className='option' value="2">2 unidades</option>
                            <option className='option' value="3">3 unidades</option>
                            <option className='option' value="4">4 unidades</option>
                            <option className='option' value="5">5 unidades</option>
                        </select>
                    </h3>
                    <Count stock={detail.stock} initial={1} onSet={(value) => getValueAndSet(value)} />
                    <button className='button-buy'>Agregar al carrito</button>
                    <Link className='button-add' to={`/cart/${detail.id}`}>
                        <h1 className='end-buy-text'>Finalizar Compra</h1>
                    </Link>
                </div>
            </div>
            <div className='bottom-detail'>
                <h2 className='title-desc'>Descripcion</h2>
                <h3 className='description'>{detail.description}</h3>
            </div>
        </div>
    );
}

