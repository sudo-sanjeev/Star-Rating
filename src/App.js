import "./styles.css";
import { StarRating } from "./StarRating";

export default function App() {
  const handleRatingChange = (rating) => {
    console.log("Rated:", rating);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Rate your experience:</h2>
      <StarRating totalStars={10} onChange={handleRatingChange} />
    </div>
  );
}
