import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/asdf">Not Found</Link>
    </nav>
  );
}

export default Navbar;
