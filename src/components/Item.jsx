import ItemCount from "./ItemCount"

const Item = ({title, image, text, stock, price}) => {
  const initial = (stock === 0)? 0 : 1;
  
  const addProduct = (e, counter) => {
    e.preventDefault();
    alert(`Agregaste ${counter} productos`);
  };


    return (
        <div className="card" style={{width: '18rem'}}>
        <img src={`./img/${image}`} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <h4 className="text-center">${price}</h4>
          <ItemCount initial={initial} stock={stock} onAdd={addProduct}/>
        </div>
      </div>
    )

}

export default Item;