import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <ButtonGroup size="md">
      {/* Decrease Button */}
      <Button
        variant="outline-secondary"
        onClick={handleDecrement}
        disabled={count <= 1}
      >
        -
      </Button>

      {/* Display Current Count */}
      <Button variant="outline-dark" className="fw-bold" disabled>
        {count}
      </Button>

      {/* Increase Button */}
      <Button variant="outline-secondary" onClick={handleIncrement}>
        +
      </Button>
    </ButtonGroup>
  );
};

export default Counter;
