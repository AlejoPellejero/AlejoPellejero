import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import './Items.css';

export default function Item({ data }) {
    const handleOnAdd = (cant) => {
        console.log("Agregaste al carrito : ", cant)
    }

    return (
        <div className='first-big-item'>
            <div className='image-item'>
                <Link to={`/item/${data.id}`}>
                    <img src={data.img} alt="imagen del producto" />
                </Link>
            </div>
            <h2 className='item-name'>{data.name}</h2>
            <h3 className='item-price'>${data.price}</h3>
            <ItemCount stock={data.stock} initial={1} onAdd={handleOnAdd} />
        </div>
    );
}

