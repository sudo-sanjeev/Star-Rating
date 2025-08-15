import React from "react";
import "./styles.css";
import { StarRating } from "./components/StarRating";

const App: React.FC = () => {
  const handleRatingChange = (rating: number): void => {
    console.log("Rated:", rating);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Regular Star Rating</h2>
      <StarRating
        config={{
          totalStars: 5,
          defaultValue: 0,
        }}
        style={{
          size: 40,
          filledColor: "gold",
        }}
        onChange={handleRatingChange}
      />
      
      <h2>Half Star Rating Enabled</h2>
      <StarRating
        config={{
          totalStars: 5,
          defaultValue: 2.5,
          allowHalfRating: true,
        }}
        style={{
          size: 40,
          filledColor: "gold",
          emptyColor: "lightgray",
        }}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default App;