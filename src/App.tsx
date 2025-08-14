import React from "react";
import "./styles.css";
import { StarRating } from "./components/StarRating";

const App: React.FC = () => {
  const handleRatingChange = (rating: number): void => {
    console.log("Rated:", rating);
  };

  return (
    <div style={{ padding: 20 }}>
      <StarRating
        config={{
          totalStars: 5,
          defaultValue: 0,
        }}
        style={{
          size: 40,
          filledColor: "red",
        }}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default App;