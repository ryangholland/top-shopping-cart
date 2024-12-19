import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import CartButton from "./CartButton";

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
            className="rounded d-none d-sm-block"
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
          <CartButton />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
