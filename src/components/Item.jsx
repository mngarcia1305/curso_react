
import {NavLink} from "react-router-dom";

const Item = ({title, image, text, stock, price, id}) => {

    return (
        <div className="card mb-5" style={{width: '18rem'}} >
        <NavLink to={`/item/${id}`}><img src={`/img/${image}`} className="card-img-top" alt=""/></NavLink>
        <div className="card-body">
          <h5 className="text-center card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <h4 className="text-center mb-3 fw-bold">${price}</h4>
          <div className="text-center mt-3">
          <NavLink to={`/item/${id}`} className="btn btn-block btn-primary px-5 ">COMPRAR</NavLink>
          </div>
        </div>
        
      </div>
    )

}

export default Item;