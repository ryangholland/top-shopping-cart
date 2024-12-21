import { Card, Button, Row, Col } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { truncateString, formatPrice } from "../../utils/utils";
import Counter from "./Counter";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

function CartItem({ item }) {
  const { removeAllFromCart } = useContext(CartContext);

  return (
    <Card className="p-2 mb-2">
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <Card.Img
            variant="top"
            src={item.image}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "contain",
            }}
          ></Card.Img>
          <Card.Body className="pb-1">
            <Card.Text className="fw-bold">
              ${formatPrice(item.price)}
            </Card.Text>
          </Card.Body>
        </Col>
        <Col xs={7} className=" text-center">
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="fs-6">
              {truncateString(item.title)}
            </Card.Title>
            <Counter item={item} />
            <Button
              variant="danger"
              className="d-flex align-items-center mt-2"
              onClick={() => removeAllFromCart(item.id)}
            >
              <FaTrash className="me-2" /> Delete
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default CartItem;
