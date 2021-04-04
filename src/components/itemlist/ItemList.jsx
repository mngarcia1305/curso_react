import Item from './Item.jsx';

const ItemList = ({ items, sort }) => {
    const listItems = items.map((prop, id) =>
        <div className='col' key={prop.id}>
            <Item
                image={prop.image}
                title={prop.title}
                text={prop.text}
                stock={prop.stock}
                price={prop.price}
                id={prop.id} />
        </div>
    );

    return (
        <>
            <div className="row justify-content-right mb-4">
                <div className="col-3">
                    <select className="form-select" onChange={(e) => sort(e.target.value)}>
                        <option defaultValue="default">Ordenar</option>
                        <option value="asc">Menor precio</option>
                        <option value="desc">Mayor precio</option>
                    </select>
                </div>
            </div>
            <div className='row'>
                {listItems}
            </div>
        </>
    )

}

export default ItemList;