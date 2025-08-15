import React from 'react';
import { StarProps } from '../types';
import styles from './Star.module.css';

export const Star: React.FC<StarProps> = ({
  value,
  isFilled,
  isHalfFilled = false,
  disabled,
  allowHalfRating = false,
  starClassName,
  starStyle,
  onHover,
  onHalfHover,
  onLeave,
  onClick,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(value);
    }
  };

  const handleHalfKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(value - 0.5);
    }
  };

  // Style computation now handled by parent component

  if (allowHalfRating && !disabled) {
    return (
      <span
        className={starClassName}
        style={starStyle}
        onMouseLeave={onLeave}
        role="button"
        tabIndex={-1}
        aria-label={`Rate ${value} star${value !== 1 ? 's' : ''}`}
        aria-pressed={isFilled}
      >
        <span
          className={styles.leftHalf}
          onMouseEnter={() => onHalfHover?.(value)}
          onClick={() => onClick(value - 0.5)}
          onKeyDown={handleHalfKeyDown}
          role="button"
          tabIndex={0}
          aria-label={`Rate ${value - 0.5} stars`}
        />
        <span
          className={styles.rightHalf}
          onMouseEnter={() => onHover(value)}
          onClick={() => onClick(value)}
          onKeyDown={handleKeyDown}
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
      className={starClassName}
      style={starStyle}
      onMouseEnter={() => onHover(value)}
      onMouseLeave={onLeave}
      onClick={() => onClick(value)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-label={`Rate ${value} star${value !== 1 ? 's' : ''}`}
      aria-pressed={isFilled}
    >
      ★
    </span>
  );
};
