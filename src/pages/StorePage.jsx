import { Container, Row, Col } from "react-bootstrap";
import dummyData from "../assets/dummyData";

import StorePageItem from "../components/Item/StorePageItem";

function StorePage() {
  return (
    <section className="bg-light">
      <Container className="p-4">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {dummyData.map((item) => (
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
