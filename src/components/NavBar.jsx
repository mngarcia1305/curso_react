import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom";
import './NavBar.css';


  function NavBar() {
    return (

      <div className="container-fluid bg-primary">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
      <NavLink to="/" className='navbar-brand'><i className="fas fa-paw"></i> Pet<span className='fw-bold'>Food</span> Online</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink to="/ItemListContainer" className='nav-link'>Productos</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/category/perros" className='nav-link'>Perros</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/category/gatos" className='nav-link'>Gatos</NavLink>
            </li>
              {/* <li>
            <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
            <button className="btn btn-outline-light" type="submit">Buscar</button>
              </form>
            </li> */}
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