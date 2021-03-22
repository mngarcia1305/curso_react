import { useState} from "react";


const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial);


    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="input-group mb-3" style={{width: '9rem'}}>
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
                disabled={true}
              />
              <button
                onClick={() => setCounter((counter) => counter + 1)}
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
                disabled={counter === stock}
              > + </button>
            </div>
          </div>
        </div>
      </div>
    );

}

export default ItemCount;