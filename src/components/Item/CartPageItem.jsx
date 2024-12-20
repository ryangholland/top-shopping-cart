import { Row, Col, Card } from "react-bootstrap";
import { formatPrice } from "../../utils/utils";

function CartPageItem({ item }) {
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
            <Card.Text className="fw-bold">${formatPrice(item.price)}</Card.Text>
          </Card.Body>
        </Col>
        <Col>
          <Card.Body className="pb-1 text-start">
            <Card.Text>{item.title}</Card.Text>
          </Card.Body>
        </Col>
        <Col className=" text-center">
          <Card.Body className="d-flex flex-column justify-content-center align-items-center">
            <p>- 1 +</p>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default CartPageItem;
