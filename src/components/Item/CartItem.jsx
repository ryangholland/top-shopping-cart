import { Card, Button, Row, Col } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

import dummyData from "../../assets/dummyData";
import { truncateString } from "../../utils/utils";
import Counter from "./Counter";

function CartItem() {
  const dummyItem = dummyData[0];

  return (
    <Card className="p-2 mb-2">
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <Card.Img
            variant="top"
            src={dummyItem.image}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "contain",
            }}
          ></Card.Img>
          <Card.Body className="pb-1">
            <Card.Text className="fw-bold">${dummyItem.price}</Card.Text>
          </Card.Body>
        </Col>
        <Col xs={7} className=" text-center">
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="fs-6">
              {truncateString(dummyItem.title)}
            </Card.Title>
            <Counter />
            <Button variant="danger" className="d-flex align-items-center mt-2">
              <FaTrash className="me-2" /> Delete
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default CartItem;
