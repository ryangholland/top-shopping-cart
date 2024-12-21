import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { formatPrice, getQuantity } from "../utils/utils";
import ItemContext from "../context/ItemContext";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { Container, Row, Col, Image, Button, Spinner } from "react-bootstrap";

import CartContext from "../context/CartContext";
import Counter from "../components/Item/Counter";

function ItemPage() {
  const { cart, addToCart } = useContext(CartContext);
  const { items, loading, error } = useContext(ItemContext);
  const { id } = useParams();
  const item = items[id - 1];
  const quantity = getQuantity(cart, Number(id));

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
    <section className="item-page-section d-flex flex-column justify-content-center  bg-light">
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
              {!quantity ? (
                <Button
                  variant="success"
                  className="w-100"
                  onClick={() => addToCart(item)}
                >
                  <FaShoppingCart
                    className="me-2"
                    onClick={() => addToCart(item)}
                  />
                  Add to Cart
                </Button>
              ) : (
                <>
                
                <h5>Quantity:</h5>
                <Counter item={item} />
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="ps-4 my-3">
        <Button variant="secondary" as={Link} to={"/store"}>
          <FaArrowLeft /> Back to Store
        </Button>
      </Container>
    </section>
  );
}

export default ItemPage;
