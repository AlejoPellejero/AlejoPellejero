import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './Items.css';

export default function Item() {
    const [items, setItems] = useState({
        products: {}
    });

    function getItems() {
        const itemsJson = [
            {
                id: 1,
                name: 'Cuadro',
                brand: 'Cult',
                price: 300,
                count: 5,
                group: '',
                show: true,
                mandatory: false
            },
            {
                id: 2,
                name: 'Horquilla',
                brand: 'Cult',
                price: 90,
                count: 5,
                group: '',
                show: true,
                mandatory: false
            },
            {
                id: 3,
                name: 'Plato',
                brand: 'Cult',
                price: 20,
                count: 5,
                group: '',
                show: true,
                mandatory: false
            },
            {
                id: 4,
                name: 'Plato',
                brand: 'Merrit',
                price: 39,
                count: 5,
                group: '',
                show: true,
                mandatory: false
            },
            {
                id: 5,
                name: 'Asiento',
                brand: 'Cult',
                price: 15,
                count: 5,
                group: '',
                show: true,
                mandatory: false
            },
            {
                id: 6,
                name: 'Manillar',
                brand: 'Fly',
                price: 100,
                count: 5,
                group: '',
                show: true,
                mandatory: false
            },
            {
                id: 7,
                name: 'Pedales',
                brand: 'Oddy',
                price: 40,
                count: 5,
                group: '',
                show: true,
                mandatory: false
            },
            {
                id: 8,
                name: 'Pedales',
                brand: 'Cult',
                price: 50,
                count: 5,
                group: '',
                show: true,
                mandatory: false
            },
            {
                id: 9,
                name: 'Horquilla',
                brand: 'Cult',
                price: 120,
                count: 5,
                group: '',
                show: true,
                mandatory: false
            },
            {
                id: 10,
                name: 'Cuadro',
                brand: 'WeTheP',
                price: 270,
                count: 5,
                group: '',
                show: true,
                mandatory: false
            },
            {
                id: 11,
                name: 'Cuadro',
                brand: 'WeTheP',
                price: 400,
                count: 5,
                group: '',
                show: true,
                mandatory: false
            },
            {
                id: 12,
                name: 'Cubas',
                brand: 'Cult',
                price: 32,
                count: 5,
                group: '',
                show: true,
                mandatory: false
            },
            {
                id: 13,
                name: 'Cubas',
                brand: 'Oddy',
                price: 20,
                count: 5,
                group: '',
                show: true,
                mandatory: false
            },
            {
                id: 14,
                name: 'Manillar',
                brand: 'Fit',
                price: 62,
                count: 5,
                group: '',
                show: true,
                mandatory: false
            },
            {
                id: 15,
                name: 'Puños',
                brand: 'Vans',
                price: 12,
                count: 5,
                group: '',
                show: true,
                mandatory: false
            },
        ]
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(itemsJson);
            }, 2000)
        });
        console.log(itemsJson)
        return myPromise
    }

    useEffect(() => {
        getItems()
            .then(res => {
                setItems({ ...items, products: res })
            })
    }, [])

    const handleOnAdd = (cant) => {
        console.log("Agregaste al carrito : ", cant)
    }

    return (
        <div className='first-big-item'>
            <div className='image-item'>
                <img src='https://bike-gourmet.com/wp-content/uploads/2019/06/cuadro-bmx-wethepeople-pathfinder-plata.jpg' alt="imagen del producto" />
            </div>
            <h2 className='item-name'>product name</h2>
            <h3 className='item-price'>$200</h3>
            <ItemCount stock={5} initial={1} onAdd={handleOnAdd} />
        </div>
    );
}

