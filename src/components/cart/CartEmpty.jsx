import { NavLink } from "react-router-dom"

const CartEmpty = () => {
    return (
        <div className="justify-content-center">
        <div className="alert alert-info text-center" role="alert"><h5>Tu carrito está Vacío!</h5></div>
        <div className="text-center"><NavLink to="/itemListContainer" className="btn btn-outline-success">Seguir Comprando</NavLink></div>
        </div>
    )
}

export default CartEmpty;
