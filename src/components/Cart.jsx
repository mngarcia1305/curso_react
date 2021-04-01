import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, removeItem, getCartTotal } = useContext(CartContext);
  
  const total = getCartTotal();

  const itemSubtotal = (price, quantity) => price * quantity;

  const cartItems = cart.map((prop, id) => (
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

  return (
    <>
      <div className="container  justify-content-center mt-5">
        <ul className="list-group">{cartItems}</ul>
        <p>Total: {total}</p>
      </div>
    </>
  );
};

export default Cart;
