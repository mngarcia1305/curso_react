import { NavLink } from "react-router-dom";


const ItemError = () => {
  return (
    <div>
      <div className="justify-content-center">
        <div className="alert alert-info text-center" role="alert">
          <h5>El producto no existe</h5>
        </div>
        <div className="text-center">
          <NavLink to="/itemListContainer" className="btn btn-outline-success">
            Seguir Comprando
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ItemError;
