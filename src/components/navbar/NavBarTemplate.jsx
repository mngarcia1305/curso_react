import { NavLink } from "react-router-dom";
import CartWidget from "../cart/CartWidget";

const NavBarTemplate = ({ categories }) => {
  const navItems = categories.map((prop, id) => (
    <li key={id}>
      <NavLink to={`/category/${prop.key}`} className="nav-link ">
        {prop.name.toUpperCase()}
      </NavLink>
    </li>
  ));

  return (
    <div className="container-fluid bg-primary">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            <h2>
              <i className="fas fa-paw"></i> Pet
              <span className="fw-bold">Food</span> Online
            </h2>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <NavLink to="/ItemListContainer" className="nav-link ">
                  TODOS
                </NavLink>
              </li>

              {navItems}
            </ul>
            <div>
              <CartWidget />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBarTemplate;
