import React, { useState } from "react";
import "./styles.css";
import { StarRating } from "./components";

const App: React.FC = () => {
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(2.5);

  const handleRatingChange1 = (rating: number): void => {
    setRating1(rating);
  };

  const handleRatingChange2 = (rating: number): void => {
    setRating2(rating);
  };

  return (
    <div className="demo-container">
      <h1 className="demo-title">
        ⭐ Star Rating Component
      </h1>
      
      <div className="demo-card">
        <h2 className="demo-section-title">
          🌟 Basic Star Rating
        </h2>
        <div className="demo-rating-container">
          <StarRating
            config={{
              totalStars: 5,
              defaultValue: rating1,
            }}
            style={{
              size: 50,
              filledColor: "#ffd700",
              emptyColor: "#e0e0e0",
            }}
            onChange={handleRatingChange1}
          />
        </div>
        <p className="demo-rating-text">
          Current Rating: <strong>{rating1} stars</strong>
        </p>
      </div>
      
      <div className="demo-card">
        <h2 className="demo-section-title">
          🌟 Half Star Rating
        </h2>
        <div className="demo-rating-container">
          <StarRating
            config={{
              totalStars: 5,
              defaultValue: rating2,
              enableHalfRating: true,
            }}
            style={{
              size: 50,
              filledColor: "#ffd700",
              emptyColor: "#e0e0e0",
            }}
            onChange={handleRatingChange2}
          />
        </div>
        <p className="demo-rating-text">
          Current Rating: <strong>{rating2} stars</strong>
        </p>
      </div>
    </div>
  );
};

export default App;