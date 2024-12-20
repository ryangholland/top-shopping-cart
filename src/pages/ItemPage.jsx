import { useParams } from "react-router-dom";
import { useContext } from "react";
import { formatPrice } from "../utils/utils";
import ItemContext from "../context/ItemContext";
import { FaShoppingCart } from "react-icons/fa";
import { Container, Row, Col, Image, Button, Spinner } from "react-bootstrap";

function ItemPage() {
  const { items, loading, error } = useContext(ItemContext);
  const { id } = useParams();
  const item = items[id];

  if (loading) {
    return (
      <Container className="d-flex justify-content-center pt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) return <p>Error: {error}</p>;

  return (
    <section className="item-page-section d-flex align-items-center bg-light">
      <Container className="item-page-container  text-center bg-white w-auto p-4 rounded">
        <Row xs={1} sm={1} md={2} className="g-4">
          <Col className="d-flex justify-content-center align-items-center">
            <Image
              src={item.image}
              alt={item.title}
              fluid
              className="d-none d-md-block"
              style={{ height: "50vh", width: "auto" }}
            />
            {/* For extra-small screens */}
            <Image
              src={item.image}
              alt={item.title}
              className="d-block d-md-none"
              style={{ height: "30vh", width: "auto" }}
            />
          </Col>
          <Col className="text-start d-flex flex-column justify-content-between">
            <div>
              <h1>{item.title}</h1>
              <h2>${formatPrice(item.price)}</h2>
              <hr />
              <p>{item.description}</p>
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
