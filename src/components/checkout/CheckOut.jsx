import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { GetFirestore } from "../../firebase/Firebase";
import firebase from "firebase/app";
import CheckOutForm from "./CheckOutForm";
import CheckOutResume from "./CheckOutResume";
import LoadingSpinner from "../loading/LoadingSpinner";

const CheckOut = () => {
  const { cart, getCartTotal, clear } = useContext(CartContext);
  const [order, setOrder] = useState();
  const [loading, setLoading] = useState(false);

  
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const buyer = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value
    };

    const products = cart.map(prop => {
      const item = {
        id: prop.item.id,
        title: prop.item.title,
        price: prop.item.price,
        quantity: prop.quantity
      };
      return item;
    });

    createOrder(buyer, products);
  };

  function createOrder(buyer, products) {
    const db = GetFirestore();
    const newOrder = {
      buyer: buyer,
      products: products,
      createOn: firebase.firestore.Timestamp.fromDate(new Date()),
      total: getCartTotal()
    };

    const orders = db.collection("orders");

    orders.add(newOrder).then(resp => {
      
      setOrder({id:resp.id, newOrder});
      
    })
    .then(() => clear())
    .then(()=>setLoading(false))
  }


  const CheckOutView = () =>
    order ? (
      <CheckOutResume order={order} />
    ) : (
      <CheckOutForm action={handleSubmit} />
    );


  return (
    <div>
      {loading ? <LoadingSpinner /> : <CheckOutView />}
    </div>
  );
};

export default CheckOut;
