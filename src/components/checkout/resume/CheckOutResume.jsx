import CartContext from "../../../context/CartContext";

const CheckOutResume = ({order}) => {
  const { id, newOrder:{buyer, products, createOn, total} } = order;

  const itemsRow = products.map((d, id) => 
    <tr key={id}>
    <td width="80%" > <span className="font-weight-bold">{d.title}</span>
        <div className="product-qty"> <span className="d-block">Cantidad:{d.quantity}</span> </div>
    </td>
    <td width="20%">
        <div className="text-end"> <span className="font-weight-bold">${d.price*d.quantity}</span> </div>
    </td>
</tr>
  )
  
  
  return (
    <div className="container mt-5 mb-5">
    <div className="row d-flex justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="invoice p-5">
                    <h5>Gracias por tu compra!</h5> <span className="font-weight-bold d-block mt-4">Hola, {buyer.name}</span> <span>Tu orden fue procesada y te la estaremos enviando pronto.</span>
                    <div className="payment border-top mt-3 mb-3 border-bottom table-responsive">
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                <td>
                                        <div className="py-2"> <span className="d-block text-muted">Fecha de compra</span> <span>{createOn.toDate().toLocaleDateString('es-AR')}</span> </div>
                                    </td>
                                <td>
                                        <div className="py-2"> <span className="d-block text-muted">Numero de orden</span> <span>{id}</span> </div>
                                    </td>
                                    
                                    
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="product border-bottom table-responsive">
                        <table className="table table-borderless">
                            <tbody>
                                
                                 {itemsRow} 
                            </tbody>
                        </table>
                    </div>
                    <div className="row d-flex justify-content-end">
                        <div className="col-md-5">
                            <table className="table table-borderless">
                                <tbody className="totals">
                                    <tr>
                                        <td width="80%">
                                            <div > <span className="text-muted">Subtotal</span> </div>
                                        </td>
                                        <td width="20%">
                                            <div className="text-end"> <span>${total}</span> </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="80%">
                                            <div > <span className="text-muted">Costo de envío</span> </div>
                                        </td>
                                        <td width="20%">
                                            <div className="text-end"> <span>Gratis</span> </div>
                                        </td>
                                    </tr>
            
                                    <tr className="border-top border-bottom">
                                        <td width="80%">
                                            <div > <span className="font-weight-bold">Total</span> </div>
                                        </td>
                                        <td width="20%">
                                            <div className="text-end"> <span className="font-weight-bold">${total}</span> </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p>Te enviamos un mail con la información de tu pedido!</p>
                    <p className="font-weight-bold mb-0">Gracias por confiar en</p> <span>PetFood Online!</span>
                </div>
            </div>
        </div>
    </div>
  </div>
  );
};

export default CheckOutResume;
