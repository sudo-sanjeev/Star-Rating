import React, { useState } from "react";

export const StarRating = ({ totalStars = 5, onChange }) => {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(null);

  const handleClick = (rating) => {
    setSelected(rating);
    if (onChange) onChange?.(rating);
  };

  const isStarFilled = (value) => {
    if (hovered !== null) return value <= hovered;
    return value <= selected;
  };

  const renderStar = (index) => {
    const starValue = index + 1;
    const isFilled = isStarFilled(starValue);

    return (
      <span
        key={starValue}
        style={{
          cursor: "pointer",
          color: isFilled ? "gold" : "lightgray",
        }}
        onMouseEnter={() => setHovered(starValue)}
        onMouseLeave={() => setHovered(null)}
        onClick={() => handleClick(starValue)}
        role="button"
        aria-label={`Rate ${starValue} stars`}
      >
        ★
      </span>
    );
  };

  return (
    <div style={{ display: "flex", gap: "8px", fontSize: "32px" }}>
      {Array.from({ length: totalStars }, (_, i) => renderStar(i))}
    </div>
  );
};
