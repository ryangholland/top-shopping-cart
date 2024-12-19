import { useParams } from "react-router-dom";
import dummyData from "../assets/dummyData";

import { FaShoppingCart } from "react-icons/fa";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

function ItemPage() {
  const { id } = useParams();
  const dummyItem = dummyData[id];

  return (
    <section className="item-page-section d-flex align-items-center bg-light">
      <Container className="item-page-container  text-center bg-white w-auto p-4 rounded">
        <Row xs={1} sm={1} md={2} className="g-4">
          <Col className="d-flex justify-content-center align-items-center">
            <Image
              src={dummyItem.image}
              alt={dummyItem.title}
              fluid
              className="d-none d-md-block"
              style={{ height: "50vh", width: "auto" }}
            />
            {/* For extra-small screens */}
            <Image
              src={dummyItem.image}
              alt={dummyItem.title}
              className="d-block d-md-none"
              style={{ height: "30vh", width: "auto" }}
            />
          </Col>
          <Col className="text-start d-flex flex-column justify-content-between">
            <div>
              <h1>{dummyItem.title}</h1>
              <h2>${dummyItem.price}</h2>
              <hr />
              <p>{dummyItem.description}</p>
            </div>
            <div>
              <h5>Quantity:</h5>

              <p>- 1 +</p>
              <Button variant="success" className="w-100">
                <FaShoppingCart className="me-2" />
                Add to Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ItemPage;
