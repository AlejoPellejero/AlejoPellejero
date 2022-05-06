import React, { useState, useEffect } from 'react';
import Item from '../Items/Items'
import './ItemListCont.css';

function ItemListCont(props) {
    const [itemState, setItems] = useState({
        products: []
    });    

    function getItems() {
        const itemsJson = [
            {
                id: 1,
                name: 'Cuadro Cult',
                price: 300,
                stock: 5,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPY--SPjoZHn250iPEuXGywO2S5P57GUOJ0m0fgudVErKabhP2FYh9Uwgf3J0YZ5m2Z8&usqp=CAU'
            },
            {
                id: 2,
                name: 'Horquilla Cult',
                price: 90,
                stock: 5,
                img: 'https://m.media-amazon.com/images/I/51Wc4Ug7KWL._AC_SY450_.jpg'
            },
            {
                id: 3,
                name: 'Plato Cult',
                price: 20,
                stock: 5,
                img: 'https://images-na.ssl-images-amazon.com/images/I/41vEq1XIFfL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg'
            },
            {
                id: 4,
                name: 'Plato Merrit',
                price: 39,
                stock: 7,
                img: 'https://cdn.shopify.com/s/files/1/0200/1122/1092/products/4c895307-8ad1-4822-bda6-ffb2606f44bb.jpg?v=1637631455'
            },
            {
                id: 5,
                name: 'Asiento Cult',
                price: 15,
                stock: 5,
                img: 'https://cdn.shopify.com/s/files/1/0222/8387/8464/products/22eff739-6b40-4bba-97b0-4f2d05b60ce9.jpg?v=1649212726'
            },
            {
                id: 6,
                name: 'Manillar Fly',
                price: 100,
                stock: 5,
                img: 'https://m.media-amazon.com/images/I/61Gp0stGj9L._AC_SY450_.jpg'
            },
            {
                id: 7,
                name: 'Pedales Oddy',
                price: 40,
                stock: 3,
                img: 'https://cdn.shopify.com/s/files/1/0222/8387/8464/products/d34daaef-d254-4794-8748-1331da2b2b79.jpg?v=1649214818'
            },
            {
                id: 8,
                name: 'Pedales Cult',
                price: 50,
                stock: 6,
                img: 'https://cdn.shopify.com/s/files/1/0222/8328/8640/products/fac2f85e-cf0c-4a53-9358-0242a8a2b2e3.jpg?v=1640181016'
            },
            {
                id: 9,
                name: 'Horquilla Cult',
                price: 120,
                stock: 10,
                img: 'https://i0.wp.com/bicicletasortega.es/wp-content/uploads/2019/12/cuadro-bmx-cult-hawk-2020.jpg'
            },
            {
                id: 10,
                name: 'Cuadro WeTheP',
                price: 270,
                stock: 2,
                img: 'https://bike-gourmet.com/wp-content/uploads/2019/06/cuadro-bmx-wethepeople-pathfinder-plata.jpg'
            },
            {
                id: 11,
                name: 'Cuadro WeTheP',
                price: 400,
                stock: 5,
                img: 'https://bike-gourmet.com/wp-content/uploads/2019/06/cuadro-bmx-wethepeople-battleship-plata.jpg'
            },
            {
                id: 12,
                name: 'Cubas Cult',
                price: 32,
                stock: 5,
                img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/065/823/products/czxc1-2c3886a02e1f9ca07315811021993351-1024-1024.jpg'
            },
            {
                id: 13,
                name: 'Cubas Oddy',
                price: 20,
                stock: 5,
                img: 'https://www.ibikes.cl/wp-content/uploads/2018/07/bmx-odsy-rossV2-tire-002.jpg'
            },
            {
                id: 14,
                name: 'Manillar Fit',
                price: 62,
                stock: 8,
                img: 'https://www.360bs.net/wp-content/uploads/2018/05/SaltPlus_bar_HQ_4pc_cp_02-2-600x450.jpg'
            },
            {
                id: 15,
                name: 'Puños Vans',
                price: 12,
                stock: 20,
                img: 'https://happybikeshop.com/wp-content/uploads/2020/02/Cult-Vans-Waffle-Griffe-Ohne-Flansch-1-600x450.jpg'
            }
        ];

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
                setItems({ products: res })
            })
    }, [])


    function items() {
        if (itemState.products.length === 0) {
            return <h1>Cargando...</h1>
        } else {
            return itemState.products.map((data) => (
                <Item key={data.id} data={data} />
            ))
        }
    }


    return (
        <>
            <div className='items-container'>
                <h1 className='item-h1'>{props && props.greetings ? props.greetings : "Welcome"}</h1>
            </div>
            <div className='container-items-product'>
                {items()}
            </div>
        </>
    );
}

export default ItemListCont;
