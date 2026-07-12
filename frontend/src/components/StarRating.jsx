import { FaStar } from "react-icons/fa";

function StarRating({ note }) {
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i <= Math.round(note) ? "#f5c518" : "#d3d3d3"}
        />
      );
    }

    return stars;
  };

  return (
    <div className="artisan-rating">
      <span>{note}/5</span>
      <span className="stars">{renderStars()}</span>
    </div>
  );
}

export default StarRating;