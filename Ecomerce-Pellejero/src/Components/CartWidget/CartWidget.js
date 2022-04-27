import './CartWidget.css';
import carrito from '../../Images/carrito-compras.png'

function CartWidget() {
    return (
        <div className='container-cart-widget'>
            <div className='image-carrito'>
                <img src={carrito} alt='carrito de compras'/>
            </div>
            <h2 className='number-count'>0</h2>
        </div>
    );
}

export default CartWidget;
