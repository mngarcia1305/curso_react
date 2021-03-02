import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink
  } from 'mdb-react-ui-kit';

function NavBar() {
    return (
        <MDBNavbar expand='lg' light bgColor='light'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='#'>Tienda de algo</MDBNavbarBrand>
            
            <div className='collapse navbar-collapse' id='navbarNav'>
              <MDBNavbarNav>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' href='#'>
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='#'>Productos</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='#'>Login</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='#'>Registro</MDBNavbarLink>
                </MDBNavbarItem>
                
              </MDBNavbarNav>
            </div>
          </MDBContainer>
        </MDBNavbar>
      );
}

export default NavBar;