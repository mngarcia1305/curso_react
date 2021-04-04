import React, { useState } from "react";
import CartContext from "./CartContext";
const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);
  // console.log(cart);

  const addItem = (item, quantity) => {
    setCart([...cart, { item, quantity }]);
  };

  const removeItem = (itemId) => {
    const filteredCart = cart.filter(function (o) {
      return o.item.id !== itemId;
    });

    setCart(filteredCart);
  };

  const clear = () => {
    setCart(defaultValue);
  };

  const isInCart = (itemId) => cart.some(e => e.item.id === itemId);


  const modifyItem = (itemId) => {
    console.log(itemId)
  }

  const getCartTotal = () => {
    let total = 0;
    cart.forEach(d => total += parseInt(d.item.price) * parseInt(d.quantity));
    return total;
  }


  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, getCartTotal, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};


export default CartProvider;
