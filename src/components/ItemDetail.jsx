import { NavLink } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useState } from "react";

const ItemDetail = ({ item }) => {
  const { title, image, text, stock, price, id, category, description } = item;
  const [qty, setQty] = useState(0);
  const [action, setAction] = useState("select");

  const itemCounter = () => (
    <ItemCount initial={qty} stock={stock} onAdd={addProduct} />
  );
  const buyButton = () => (
    <div>
    <NavLink to="/cart" className="btn btn-block btn-success">
      {`Finalizar Compra (${qty}) items`}
    </NavLink>
    <button className="btn btn-danger text-left ms-5 btn-sm" onClick={() => resetProduct()}>Cambiar cantidad</button>
    </div>
  );
  const Count = action === "buy" ? buyButton : itemCounter;

  const addProduct = (counter) => {
    setQty(counter);
    setAction("buy");
  };
  const resetProduct = () => {
    setAction("select");
  };

  return (
    <div className="card mb-3" style={{ width: "70%" }}>
      <div className="row g-0">
        <div className="col-4">
          <img src={`/img/${image}`} className="card-img-top" alt="" />
        </div>
        <div className="col-8">
          <div className="card-body">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item " aria-current="page">
                  <NavLink to={`/ItemDetailContainer/`} className="">
                    Productos
                  </NavLink>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  <NavLink to={`/ItemDetailContainer/${category}`} className="">
                    {category}
                  </NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {title}
                </li>
              </ol>
            </nav>
            <h2 className="card-title">{title}</h2>
            <h3>${price}</h3>
            <h4 className="card-text border-bottom pb-3">{text}</h4>
            <p className="card-text mb-5">Descripción: {description}</p>
            <Count />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
