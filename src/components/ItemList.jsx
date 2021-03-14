import Item from './Item.jsx';

const ItemList = ({items}) => {
    // console.log(items);
    const listItems = items.map((prop, id) =>
    <div className='col' key = {prop.id}>
    <Item
    image={prop.image}
    title={prop.title}
    text={prop.text}
    stock={prop.stock}
    price={prop.price} />
    </div>
);

    return (
        
           <div className='row'>
            {listItems}
            </div>
        
    )

}

export default ItemList;