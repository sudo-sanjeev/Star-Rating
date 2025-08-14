import React from 'react';
import { StarProps } from '../types';
import styles from './Star.module.css';

export const Star: React.FC<StarProps> = ({
  value,
  isFilled,
  size,
  filledColor,
  emptyColor,
  disabled,
  onHover,
  onLeave,
  onClick,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(value);
    }
  };

  const starClassName = `${styles.star} ${disabled ? styles.disabled : ''}`;
  
  const starStyle = {
    '--star-color': isFilled ? filledColor : emptyColor,
    '--star-size': `${size}px`,
  } as React.CSSProperties;

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
