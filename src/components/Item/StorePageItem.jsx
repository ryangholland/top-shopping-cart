import { Card, Button } from "react-bootstrap";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { formatPrice, getQuantity } from "../../utils/utils";
import { Link } from "react-router-dom";

import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Counter from "./Counter";

function StorePageItem({ item }) {
  const { cart, addToCart } = useContext(CartContext);
  const quantity = getQuantity(cart, item.id);

  return (
    <Card className="text-center p-2" style={{ minHeight: "415px" }}>
      <Link to={`/item/${item.id}`}>
        <Card.Img
          variant="top"
          src={item.image}
          style={{
            width: "150px",
            height: "150px",
            objectFit: "contain",
            margin: "0 auto",
          }}
          className="hover-opacity"
        />
      </Link>
      <Card.Body className="d-flex justify-content-center align-items-center">
        <Card.Title
          className="fs-6 fw-bold hover-opacity"
          as={Link}
          to={`/item/${item.id}`}
        >
          {item.title}
        </Card.Title>
      </Card.Body>
      <Card.Footer className="bg-white">
        <Card.Text className="fs-5 mb-0">${formatPrice(item.price)}</Card.Text>
        <Card.Text>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </Card.Text>
        {!quantity ? (
          <Button
            variant="success"
            className="d-flex align-items-center mx-auto"
            onClick={() => addToCart(item)}
          >
            <FaShoppingCart className="me-2" /> Add to Cart
          </Button>
        ) : (
          <Counter item={item} />
        )}
      </Card.Footer>
    </Card>
  );
}

export default StorePageItem;
