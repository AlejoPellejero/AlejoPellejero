import Item from '../../Items/Items'

function ItemList({ products }) {

    return (
        <>
            {products.map((data) => (
                <Item key={data.id} data={data} />
            ))}
        </>
    );
}

export default ItemList;
