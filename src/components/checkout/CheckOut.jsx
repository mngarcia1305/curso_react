import React, { useContext} from "react";
import CartContext from "../../context/CartContext";
import { GetFirestore } from "../../firebase/Firebase";
import firebase from "firebase/app";

const CheckOut = () => {

  const { cart, getCartTotal} = useContext(CartContext);
//   const [buyer, setBuyer] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const buyer = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value
        }
        
        const products = cart.map((prop) => {
            const item = {
                id:prop.item.id,
                title: prop.item.title,
                price: prop.item.price,
                quantity: prop.quantity
            }
            return item;
        })

        createOrder(buyer, products)
    }

    function createOrder(buyer, products) {
        const db = GetFirestore();
        const newOrder = {
          buyer: buyer,
          products: products,
          createOn: firebase.firestore.Timestamp.fromDate(new Date()),
          total: getCartTotal(),
        };
    
        const orders = db.collection("orders");
        
        orders.add(newOrder).then((resp) => {
          console.log(resp);
          console.log(resp.id);
        });
      }

  return (
    <div>
      <div className="alert alert-primary text-center">
        <h3>Finalizar Compra</h3>
      </div>
      <div className="container justify-content-center p-5">
        <div className="row justify-content-md-center">
          <div className="col-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Teléfono
                </label>
                <input type="text" className="form-control" id="phone" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <button type="submit" className="btn btn-primary">
                Confirmar Compra
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
