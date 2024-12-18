import { Container } from "react-bootstrap";

function AboutPage() {
  return (
    <section className="about-section d-flex align-items-center bg-light">
      <Container className="about-container  text-center  bg-white w-auto p-4 rounded">
        <p className="about-text fs-5">
          All items in this store are fictitious, and any resemblance to real
          items, living or dead, is purely coincidental.
        </p>
        <hr />
        <p className="about-text fs-5">
          Item data courtesy of <a href="https://fakestoreapi.com/">Fake API</a>{" "}
        </p>
        <hr />
        <p className="about-text fs-5">
          Home background image courtesy of{" "}
          <a href="https://virtualbackgrounds.site/background/womens-clothing-store/">
            Virtual Backgrounds
          </a>
        </p>
      </Container>
    </section>
  );
}

export default AboutPage;
