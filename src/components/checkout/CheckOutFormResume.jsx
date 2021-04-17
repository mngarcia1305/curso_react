import React, { useContext } from "react";
import CartContext from "../../context/CartContext";

function CheckOutFormResume() {

    const { cart, getCartTotal, getTotalItems } = useContext(CartContext);

    const cartItems = cart.map((prop, id) => (
        <li className="list-group-item d-flex justify-content-between lh-sm" key={id}>
        <div>
          <h6 className="my-0">{prop.item.title}</h6>
          <small className="text-muted">{prop.quantity} unidades</small>
        </div>
        <span className="text-muted">$ {prop.item.price*prop.quantity}</span>
      </li>
    ));

    return (
        <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Resumen</span>
              <span className="badge bg-primary rounded-pill">{getTotalItems()}</span>
            </h4>
            <ul className="list-group mb-3">
              {cartItems}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total </span>
                <strong>$ {getCartTotal()}</strong>
              </li>
            </ul>
          </div>
    )
}

export default CheckOutFormResume
