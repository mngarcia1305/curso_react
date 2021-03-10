import Item from './Item.jsx';

const ItemListContainer = (props) => {
    const listItems = props.products.map((prop, id) =>
    <div className='col' key = {prop.id}>
    <Item
    image={prop.image}
    title={prop.title}
    text={prop.text}
    stock={prop.stock} />
    </div>
);
    return (
        <div className="container mt-5">
           <div className='row'>
            {listItems}
            </div>
        </div>
    )

}

export default ItemListContainer;