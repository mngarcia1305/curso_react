
import CheckOutFormResume from "./CheckOutFormResume";

const CheckOutForm = ({ action }) => {

  return (
    <div className="container justify-content-center p-5">
      <div className="row justify-content-md-center">
        <div className="row ">

          <CheckOutFormResume />

          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Datos de compra</h4>
            <form  onSubmit={action}>
              <div className="row g-3">
                <div className="col-sm-12">
                  <label htmlFor="name" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-12">
                <label htmlFor="phone" className="form-label">
                    Teléfono
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email 
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address htmlFor shipping updates.
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Realizar Pedido
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutForm;
