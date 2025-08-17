import React from 'react';
import { StarProps } from './types';
import styles from './Star.module.css';

export const Star: React.FC<StarProps> = ({
  value,
  starState,
  enableHalfRating,
  starStyle,
  onHover,
  onLeave,
  onClick,
}) => {
  
  const handleKeyPress = (e: React.KeyboardEvent, ratingValue: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(ratingValue);
    }
  };
  
  const starClasses = starState === 'half'
    ? `${styles.star} ${styles.halfStar}` 
    : styles.star;
    
  if (enableHalfRating) {
    return (
      <span
        className={starClasses}
        style={starStyle}
        onMouseLeave={onLeave}
        role="button"
        tabIndex={-1}
        aria-label={`Rate ${value} star${value !== 1 ? 's' : ''}`}
        aria-pressed={starState === 'full'}
      >
        <span
          className={styles.leftHalf}
          onMouseEnter={() => onHover(value - 0.5)}
          onClick={() => onClick(value - 0.5)}
          onKeyDown={(e) => handleKeyPress(e, value - 0.5)}
          role="button"
          tabIndex={0}
          aria-label={`Rate ${value - 0.5} stars`}
        />
        <span
          className={styles.rightHalf}
          onMouseEnter={() => onHover(value)}
          onClick={() => onClick(value)}
          onKeyDown={(e) => handleKeyPress(e, value)}
          role="button"
          tabIndex={0}
          aria-label={`Rate ${value} star${value !== 1 ? 's' : ''}`}
        />
        ★
      </span>
    );
  }

  return (
    <span
      className={starClasses}
      style={starStyle}
      onMouseEnter={() => onHover(value)}
      onMouseLeave={onLeave}
      onClick={() => onClick(value)}
      onKeyDown={(e) => handleKeyPress(e, value)}
      role="button"
      tabIndex={0}
      aria-label={`Rate ${value} star${value !== 1 ? 's' : ''}`}
      aria-pressed={starState === 'full'}
    >
      ★
    </span>
  );
};
