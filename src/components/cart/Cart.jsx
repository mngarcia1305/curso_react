import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartEmpty from "./CartEmpty";
import CartItemsContainer from "./CartItemsContainer";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      {cart.length !== 0 ? <CartItemsContainer /> : <CartEmpty />}
    </>
  );
};

export default Cart;
