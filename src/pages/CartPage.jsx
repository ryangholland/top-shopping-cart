import { Container, Row, Col, Button } from "react-bootstrap";

import CartPageItem from "../components/Item/CartPageItem";

import { useContext } from "react";
import { calculateSubtotal, getTotalItems } from "../utils/utils";
import CartContext from "../context/CartContext";

function CartPage() {
  const { cart } = useContext(CartContext);

  return (
    <section className="bg-light cart-page-section p-4">
      <Container>
        <Row>
          <h1>Shopping Cart</h1>
          <hr />
        </Row>

        <Row className="justify-content-center">
          {cart.length > 0 ? (
            cart.map((item) => (
              <Col xs={10} key={item.id}>
                <CartPageItem item={item} />
              </Col>
            ))
          ) : (
            <p className="text-center">Your cart is empty!</p>
          )}
        </Row>

        <Row>
          <hr className="mt-1" />
          <Col xs={11} className="text-end">
            <h3>
              Subtotal ({getTotalItems(cart)} items): ${calculateSubtotal(cart)}
            </h3>
            <Button variant="success" className="mt-1" disabled={cart.length <= 0}>
              Proceed to Checkout
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CartPage;
