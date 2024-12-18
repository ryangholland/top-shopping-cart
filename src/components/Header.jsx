import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark-subtle">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand as={Link} to="/">
          <img
            src="/logo.png"
            alt="The Item Store"
            width="80"
            height="80"
            className="rounded"
          />
        </Navbar.Brand>

        <Nav className="mx-auto fs-3">
          <Nav.Link as={NavLink} to="/" className="me-lg-5">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/store" className="me-lg-5">
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link as={Link} to="/cart">
            <FaShoppingCart size={36} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
