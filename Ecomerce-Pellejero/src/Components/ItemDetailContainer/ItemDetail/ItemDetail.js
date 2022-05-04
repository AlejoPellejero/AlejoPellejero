import './ItemDetail.css';

export default function ItemDetail({data}) {


    return (
        <div className='item-detail'>
            <div className='first-detail'>
                <img src='https://actionbmxshop.net/7515-large_default/cuadro-angie-hawk.jpg'/>
                <div className='container-right'>
                    <h1 className='title'>Cuadro Cult</h1>
                    <h2 className='price'>$300</h2>
                    <h3 className='color'>Color: Blue</h3>
                    <h3 className='quantity'>Cantidad: 1 unidad</h3>
                    <button className='button-buy'>Comprar ahora</button>
                </div>
            </div>
            <div className='bottom-detail'>
                <h2 className='title-desc'>Descripcion</h2>
                <h3 className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
            </div>
        </div>
    );
}

