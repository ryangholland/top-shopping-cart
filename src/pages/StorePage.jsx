import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useContext } from "react";
import ItemContext from "../context/ItemContext";
import StorePageItem from "../components/Item/StorePageItem";

function StorePage() {
  const { items, loading, error } = useContext(ItemContext);

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
    <section className="bg-light">
      <Container className="p-4">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {items.map((item) => (
            <Col key={item.id}>
              <StorePageItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default StorePage;
