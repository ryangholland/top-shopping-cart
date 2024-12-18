import { useParams } from "react-router-dom";

function ItemPage() {
  const { id } = useParams();

  return <h1>Page for Item #{id}</h1>;
}

export default ItemPage;
