import React, { useState } from "react";
import CartContext from "./CartContext";
const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);

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

  const isInCart = (itemId) => cart.some(o => o.item.id === itemId);


const getTotalItems = () => {
  let total = 0;
  cart.forEach(o => total += o.quantity);
  return total;
}

  const getCartTotal = () => {
    let total = 0;
    cart.forEach(o => total += parseInt(o.item.price) * parseInt(o.quantity));
    return total;
  }
  
  const getCartItems = cart.map(data => {
    const item = {
      id: data.item.id,
      title: data.item.title,
      price: data.item.price,
      quantity: data.quantity
    };
    return item;
  });

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, getCartTotal, isInCart, getTotalItems, getCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};


export default CartProvider;
