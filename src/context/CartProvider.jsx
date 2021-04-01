import React, { useState } from "react";
import CartContext from "./CartContext";
const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);
  const [total, setTotal] = useState(0)
  console.log(cart);

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
    // Aca limpiamos nuestro contexto tendriamos que volver a setear el valor por defecto.
    console.log("Se limpio el carrito. Ahora no hay productos.");
  };

  const isInCart = (itemId) => {
    //Aca podríamos hacer un find en array, si lo encuentra se retorna true sino false
    console.log("Estamos buscando el producto");
  };


  const modifyItem = (itemId) => {
    console.log(itemId)
  }

  const getCartTotal = () => {
    let total=0;
    cart.forEach(d => total += parseInt(d.item.price) * parseInt(d.quantity));
    return total;
  }

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, getCartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};


export default CartProvider;
