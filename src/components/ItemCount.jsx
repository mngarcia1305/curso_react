import { useState} from "react";


const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial);

    const addCounter = () => {
      setCounter((counter) => counter + 1);
    }
    const substractCounter = () => {
      setCounter((counter) => counter - 1);
    }
     const StockAdvice = () => (
      stock===counter ? <p className="text-danger fs-6">Máximo stock disponible</p> : <p className="text-danger fs-6">Solo tenemos {stock-counter} en stock!</p>
     )

    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="input-group mb-3" style={{width: '9rem'}}>
              <button
              onClick={substractCounter}
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
                disabled={counter <= 0 }
              > - </button>
              <input
                type="text"
                className="form-control"
                placeholder={counter}
                disabled={true}
              />
              <button
                onClick={addCounter}
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
                disabled={counter === stock}
              > + </button>
            </div>
          </div>
          <div className="col">
            <button className="btn btn-primary text-left" 
            onClick={() => onAdd(counter)}
            disabled={counter===0}> Añadir al Carrito</button></div>
        </div>
        <div><StockAdvice /></div>
      </div>
    );

}

export default ItemCount;