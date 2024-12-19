import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaShoppingCart } from "react-icons/fa";
import CartItem from "./CartItem";

function CartButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        <FaShoppingCart size={36} />
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="bg-light"
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Title className="text-center w-100">
          <h5>Subtotal:</h5>
          <h3 className="fw-bold">$999.99</h3>
          <Button variant="success">Go to Cart</Button>
        </Offcanvas.Title>
        <hr className="mt-4 mb-2" />
        <Offcanvas.Body>
          <CartItem />
          <CartItem />
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartButton;
