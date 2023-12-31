import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap';
import { FaShippingFast, FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <NavbarBrand href="/">
                    <img src={logo} alt="ProShop" />
                    ProShop</NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href='/cart'><FaShoppingCart /> Cart</Nav.Link>
                        <Nav.Link href='/login'><FaUser /> Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header