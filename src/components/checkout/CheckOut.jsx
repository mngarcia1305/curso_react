import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { GetFirestore } from "../../firebase/Firebase";
import firebase from "firebase/app";
import CheckOutResume from "./resume/CheckOutResume";
import LoadingSpinner from "../loading/LoadingSpinner";
import CheckOutForm from "./form/CheckOutForm";

const CheckOut = () => {
  const { getCartItems, getCartTotal, clear } = useContext(CartContext);
  const [order, setOrder] = useState();
  const [loading, setLoading] = useState(false);

  const submitForm = (values) => {
    setLoading(true);
    const { emailRepeat, ...buyer } = values;

    createOrder(buyer, getCartItems);
  };

  function createOrder(buyer, cartItems) {
    const db = GetFirestore();

    const newOrder = {
      buyer: buyer,
      products: cartItems,
      createOn: firebase.firestore.Timestamp.fromDate(new Date()),
      total: getCartTotal(),
    };

    const orders = db.collection("orders");

    orders
      .add(newOrder)
      .then((resp) => {
        setOrder({ id: resp.id, newOrder });
      })
      .then(() => clear())
      .then(() => setLoading(false));
  }

  const CheckOutView = () =>
    order ? (
      <CheckOutResume order={order} />
    ) : (
      <CheckOutForm submitForm={submitForm} />
    );

  return <div>{loading ? <LoadingSpinner /> : <CheckOutView />}</div>;
};

export default CheckOut;
