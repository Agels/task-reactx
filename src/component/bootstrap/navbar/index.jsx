import { Navbar, Container, Nav } from "react-bootstrap";
import "../bootstrap.css";

const Navbarx = () => {
  return (
    <Navbar className="navbar-expand-lg fixed-top">
      <Container>
        <Navbar.Brand className="logo fs-1" href="#">
          agilra
        </Navbar.Brand>
        <Navbar.Collapse
          className="collapse navbar-collapse fs-5 fw-bold"
          id="navbarNav"
        >
          <Nav className="ms-auto">
            <Nav.Link href="#Home" className="px-3">
              Home
            </Nav.Link>
            <Nav.Link href="#About" className="px-3">
              About
            </Nav.Link>
            <Nav.Link href="#Contact" className="px-3">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarx;
