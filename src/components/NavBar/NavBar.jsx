import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarB from 'react-bootstrap/Navbar';
import logoImg from '../../assets/goal.png';
import './navbar.css';
import CardWiget from '../CardWiget/CardWiget';

function NavBar() {
    return (
    <NavbarB expand="lg" className="bg-body-tertiary shadow-lg">
        <Container>
            <NavbarB.Brand href="#" class="fw-bold fs-4 me-5 text-black"> 
                <img src={ logoImg } alt="" class="img-logo"/>Golazo Food
            </NavbarB.Brand>
            <NavbarB.Toggle aria-controls="basic-navbar-nav ms-5" />
            <NavbarB.Collapse id="basic-navbar-nav">
                <Nav className="me-auto gap-2">
                    <Nav.Link href="#home" className="link-boton">Hamburguesas</Nav.Link>
                    <Nav.Link href="#link" className="link-boton">Pizza</Nav.Link>
                    <Nav.Link href="#link" className="link-boton">Postres</Nav.Link>
                    <Nav.Link href="#link" className="link-boton">Alitas</Nav.Link>
                    <Nav.Link href="#link" className="link-boton">Refrescos</Nav.Link>
                </Nav>
            </NavbarB.Collapse>
            <CardWiget cantidad="13"/>
        </Container>
    </NavbarB>
    );
}

export default NavBar;