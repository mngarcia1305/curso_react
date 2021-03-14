import ItemList from './ItemList.jsx';

const ItemListContainer = ({items}) => {
    return (
        <div className="container mt-5">
           <ItemList items={items}/>
        </div>
    )

}

export default ItemListContainer;