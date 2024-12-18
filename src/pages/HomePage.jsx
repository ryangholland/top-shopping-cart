import { Container, Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="home-section d-flex align-items-center">
      <Container className="home-container text-white text-center ">
        <Stack>
          <h1 className="pt-4">
            Welcome to <strong>Tiem</strong>!
          </h1>
          <h2>The Item Store</h2>
          <p className="pt-4">Shop for the best items!</p>
          <Button variant="light" className="mx-auto" as={Link} to="/store">
            Shop now
          </Button>
        </Stack>
      </Container>
    </section>
  );
}

export default HomePage;
