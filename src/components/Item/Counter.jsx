import { Button, ButtonGroup } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { getQuantity } from "../../utils/utils";

const Counter = ({ item }) => {
  const { cart, addToCart, removeOneFromCart } = useContext(CartContext);
  const quantity = getQuantity(cart, item.id);

  return (
    <ButtonGroup size="md">
      {/* Decrease Button */}
      <Button
        variant="outline-secondary"
        onClick={() => removeOneFromCart(item.id)}
      >
        -
      </Button>

      {/* Display Current Count */}
      <Button variant="outline-dark" className="fw-bold" disabled>
        {quantity}
      </Button>

      {/* Increase Button */}
      <Button variant="outline-secondary" onClick={() => addToCart(item)} >
        +
      </Button>
    </ButtonGroup>
  );
};

export default Counter;
