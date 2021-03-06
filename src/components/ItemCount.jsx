import { useState} from "react";


const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial);


    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="input-group mb-3">
              <button
              onClick={() => setCounter((counter) => counter - 1)}
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
                disabled={counter <= 1 }
              > - </button>
              <input
                type="text"
                className="form-control"
                placeholder={counter}
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                disabled={true}
              />
              <button
                onClick={() => setCounter((counter) => counter + 1)}
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
                disabled={counter == stock}
              > + </button>
            </div>
          </div>
        </div>
        <div className="row">
          <button 
          onClick={(e) => onAdd(e, counter)} 
          className="btn btn-block btn-primary"
          disabled={stock==0}>
            {(stock == 0) ? `Sin Stock` : `Agregar al carrito` }
          </button>
        </div>
      </div>
    );

}

export default ItemCount;