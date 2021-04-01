import React from 'react'

const CartItem = ({image, title, subtotal, id, quantity, remove}) => {
 

    return (
      <>
            <li className="list-group-item " >
              <div className="row">
                <div className="col-md-2"><img src={`/img/${image}`} className="card-img-top " style={{width: '5rem'}} alt=""/></div>
                <div className="col-md-5"><h5>{title}</h5><button className="btn btn-outline-danger btn-sm" onClick ={ () => remove(id)}>Eliminar</button></div>
                <div className="col-md-1">{quantity}</div>
                <div className="col-md-4">{subtotal}</div>
              </div>
            </li>
      </>
    )
}

export default CartItem;
