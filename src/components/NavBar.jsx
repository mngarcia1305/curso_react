import CartWidget from "./CartWidget";


  function NavBar() {
    return (

      <div className="container-fluid bg-dark ">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">PetFood Online</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-success" href="#" tabIndex="-1" aria-disabled="true">Ingresar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">Registrarse</a>
            </li>
              <li>
            <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
            <button className="btn btn-outline-light" type="submit">Buscar</button>
              </form>
            </li>
          </ul>
          <div >
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
    </div>

    );
}

export default NavBar;