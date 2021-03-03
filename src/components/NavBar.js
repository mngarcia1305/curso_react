import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarLink,
    MDBIcon
  } from 'mdb-react-ui-kit';

function NavBar() {
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Tienda de Algo</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <MDBNavbarLink active href='#'>Productos</MDBNavbarLink>
            <MDBNavbarLink href='#'>Envíos</MDBNavbarLink>
            <MDBNavbarLink href='#'>Ingresar</MDBNavbarLink>
            <MDBNavbarLink href='#'>Registrate</MDBNavbarLink>
          </div>
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavBar;