const Item = ({title, image, text}) => {

    return (
        <div className="card" style={{width: '18rem'}}>
        <img src={`./img/${image}`} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">Comprar</a>
        </div>
      </div>
    )

}

export default Item;