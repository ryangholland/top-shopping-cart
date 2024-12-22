import { FaStar, FaRegStar } from "react-icons/fa";

function ItemRating({ rating }) {
  const stars = [];
  const roundedRating = Math.ceil(rating);

  for (let i = 0; i < roundedRating; i++) {
    stars.push("filled");
  }

  while (stars.length < 5) {
    stars.push("empty");
  }

  return (
    <>
      {stars.map((star, index) =>
        star == "filled" ? <FaStar key={index} /> : <FaRegStar key={index} />
      )}
    </>
  );
}

export default ItemRating;
