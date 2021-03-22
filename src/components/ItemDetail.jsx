import { NavLink } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const { title, image, text, stock, price, id, category, description } = item;
  const initial = stock === 0 ? 0 : 1;

  const addProduct = (e, counter) => {
    e.preventDefault();
    alert(`Agregaste ${counter} productos`);
  };

  return (
    <div className="card mb-3" style={{width: '70%'}} >
      <div className="row g-0">
        <div className="col-4">
          <img src={`/img/${image}`} className="card-img-top" alt="" />
        </div>
        <div className="col-8">
          <div className="card-body">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item " aria-current="page">
                <NavLink to={`/ItemDetailContainer`} className="">
                  Productos
                </NavLink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {category}
              </li>
            </ol>
          </nav>
            <h2 className="card-title">{title}</h2>
            <h3>${price}</h3>
            <h4 className="card-text border-bottom pb-3">{text}</h4>
            <p className="card-text mb-5">Descripción: {description}</p>
            <ItemCount initial={initial} stock={stock} onAdd={addProduct} />
            <button 
            className="btn btn-block btn-success"
            disabled={stock===0}>
              {(stock === 0) ? 'Sin Stock' : 'Agregar al carrito'} </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
