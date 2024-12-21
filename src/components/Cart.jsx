import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaShoppingCart } from "react-icons/fa";
import CartItem from "./Item/CartItem";

import { calculateSubtotal } from "../utils/utils";

import CartContext from "../context/CartContext";

function CartButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { cart } = useContext(CartContext);

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
          <h3 className="fw-bold">${calculateSubtotal(cart)}</h3>
          <Button variant="success" as={Link} to="/cart" onClick={handleClose}>
            Go to Cart
          </Button>
        </Offcanvas.Title>
        <hr className="mt-4 mb-2" />
        <Offcanvas.Body>
          {cart.length > 0 ? (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <p className="text-center">Your cart is empty!</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartButton;
