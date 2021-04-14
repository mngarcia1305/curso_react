const CheckOutResume = ({order}) => {
  const { id, newOrder } = order;
  
  return (
    <div>
      <div className="alert alert-primary text-center">
        <h3>Gracias por tu compra!</h3>
      </div>
      <div className="container justify-content-center p-5">
        <div className="row justify-content-md-center">
          <div className="col-8">
            
            <h2>{newOrder.buyer.name}  Gracias por su compra.</h2>
            <h3>Su Nº de orden es: {id}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutResume;
