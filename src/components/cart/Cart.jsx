import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, removeItem, getCartTotal, clear } = useContext(CartContext);

  const total = getCartTotal();

  const itemSubtotal = (price, quantity) => price * quantity;
  

  const cartItems = cart.map((prop) => (
    <CartItem
      image={prop.item.image}
      title={prop.item.title}
      subtotal={itemSubtotal(prop.item.price, prop.quantity)}
      key={prop.item.id}
      id={prop.item.id}
      quantity={prop.quantity}
      remove={removeItem}
    />
  ));

  const ViewCartItems = () => (
    <div>
        <div className="alert alert-primary text-center"><h3>Finalizar Compra</h3></div>
    <div className="container justify-content-center p-5">
    <div className="row justify-content-md-center">
      <div className="col-10">
        <div className="text-end mb-5"><button className='btn btn-secondary' onClick={() => clear()}>Vaciar Carrito</button></div>
        <ul className="list-group">{cartItems}</ul>
        <h4 className="text-end mt-4 fw-bold">Total: ${total}</h4>
        <div className="text-end mt-5">
        <NavLink to="/itemListContainer" className="btn btn-outline-success me-5">Seguir Comprando</NavLink>
        <NavLink to="/checkout" className="btn btn-primary" >Finalizar Compra</NavLink>
        </div>
      </div>
    </div>
  </div>
  </div>
  );

  const ViewCartEmpty = () => (
    <div className="justify-content-center">
    <div className="alert alert-info text-center" role="alert"><h5>Tu carrito está Vacío!</h5></div>
    <div className="text-center"><NavLink to="/itemListContainer" className="btn btn-outline-success">Seguir Comprando</NavLink></div>
    </div>
  )

  const ViewCart = () => (
    cart.length !== 0 ? <ViewCartItems /> : <ViewCartEmpty />
  )

    
  return (
    <>
      <ViewCart />
    </>
  );
};

export default Cart;
