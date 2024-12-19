import { Container, Row, Col, Button } from "react-bootstrap";
import dummyData from "../assets/dummyData";

import CartPageItem from "../components/CartPageItem";

function CartPage() {
  const dummyItem = dummyData[0];

  return (
    <section className="bg-light cart-page-section p-4">
      <Container>
        <Row>
          <h1>Shopping Cart</h1>
          <hr />
        </Row>

        <Row className="justify-content-center">
          <Col xs={10}>
            <CartPageItem item={dummyItem} />
          </Col>

          <Col xs={10}>
            <CartPageItem item={dummyItem} />
          </Col>

          <Col xs={10}>
            <CartPageItem item={dummyItem} />
          </Col>
        </Row>

        <Row>
          <hr className="mt-1" />
          <Col xs={11} className="text-end">
            <h3 >Subtotal (3 items): $69.97</h3>
            <Button variant="success" className="mt-1">Proceed to Checkout</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CartPage;
