import React, { useState } from "react";
import "./styles.css";
import { StarRating } from "./components/StarRating";

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
    <div style={{ 
      padding: 40, 
      maxWidth: 600,
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#333', 
        marginBottom: 50,
        fontSize: '2.5em'
      }}>
        ⭐ Star Rating Component
      </h1>
      
      <div style={{ 
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 12,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        marginBottom: 30
      }}>
        <h2 style={{ 
          color: '#444', 
          marginBottom: 20,
          fontSize: '1.5em'
        }}>
          🌟 Basic Star Rating
        </h2>
        <div style={{ marginBottom: 15 }}>
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
        <p style={{ 
          color: '#666', 
          fontSize: '1.1em',
          margin: 0
        }}>
          Current Rating: <strong>{rating1} stars</strong>
        </p>
      </div>
      
      <div style={{ 
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 12,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ 
          color: '#444', 
          marginBottom: 20,
          fontSize: '1.5em'
        }}>
          🌟 Half Star Rating
        </h2>
        <div style={{ marginBottom: 15 }}>
          <StarRating
            config={{
              totalStars: 5,
              defaultValue: rating2,
              allowHalfRating: true,
            }}
            style={{
              size: 50,
              filledColor: "#ffd700",
              emptyColor: "#e0e0e0",
            }}
            onChange={handleRatingChange2}
          />
        </div>
        <p style={{ 
          color: '#666', 
          fontSize: '1.1em',
          margin: 0
        }}>
          Current Rating: <strong>{rating2} stars</strong>
        </p>
      </div>
    </div>
  );
};

export default App;