import './ItemListCont.css';

function ItemListCont(props) {
    return (
        <div className='items-container'>
            <h1 className='item-h1'>{props && props.greetings ? props.greetings : "Welcome"}</h1>
        </div>
    );
}

export default ItemListCont;
