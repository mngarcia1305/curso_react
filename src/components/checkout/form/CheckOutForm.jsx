
import CheckOutFormResume from "./CheckOutFormResume";
import useForm from "./useForm";
import validateForm from "./validateForm";

const CheckOutForm = ({submitForm}) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validateForm
  );
  

  return (
    <div className="container justify-content-center p-5">
      <div className="row justify-content-md-center">
        <div className="row ">

          <CheckOutFormResume />

          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Datos de compra</h4>
            <form  onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-sm-12">
                  <label className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Ingresá tu nombre"
                    value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>

                <div className="col-12">
                <label className="form-label">
                    Teléfono
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Ingresa tu número de teléfono"
                    value = {values.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <div className="text-danger">{errors.phone}</div>}
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email 
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={values.email}
                    onChange={handleChange}
                  />
                {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="col-12">
                  <label htmlFor="email_repeat" className="form-label">
                    Repite el Email 
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailRepeat"
                    name="emailRepeat"
                    placeholder="you@example.com"
                    value={values.emailRepeat}
                    onChange={handleChange}
                  />
                {errors.emailRepeat && <div className="text-danger">{errors.emailRepeat}</div>}
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
