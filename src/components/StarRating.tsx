import React from 'react';
import { StarRatingProps } from '../types';
import { DEFAULT_CONFIG } from '../constants';
import { useStarRating } from '../hooks/useStarRating';
import { Star } from './Star';
import styles from './Star.module.css';

export const StarRating: React.FC<StarRatingProps> = ({
  config = {},
  style = {},
  onChange,
}) => {
  const {
    totalStars = DEFAULT_CONFIG.TOTAL_STARS,
    defaultValue = DEFAULT_CONFIG.DEFAULT_VALUE,
    disabled = DEFAULT_CONFIG.DISABLED,
    allowHalfRating = DEFAULT_CONFIG.ALLOW_HALF_RATING,
  } = config;

  const {
    size = DEFAULT_CONFIG.SIZE,
    filledColor = DEFAULT_CONFIG.FILLED_COLOR,
    emptyColor = DEFAULT_CONFIG.EMPTY_COLOR,
  } = style;

  const {
    handleClick,
    handleMouseEnter,
    handleHalfMouseEnter,
    handleMouseLeave,
    isStarFilled,
    isStarHalfFilled,
  } = useStarRating({ defaultValue, disabled, allowHalfRating, onChange });

  const getStarColor = (isFilled: boolean, isHalfFilled: boolean) => {
    if (isFilled) return filledColor;
    if (isHalfFilled) return emptyColor;
    return emptyColor;
  };

  const getStarClassName = (isHalfFilled: boolean) => {
    return `${styles.star} ${disabled ? styles.disabled : ''} ${isHalfFilled ? styles.halfStar : ''} ${allowHalfRating && !disabled ? styles.halfClickable : ''}`;
  };

  const getStarStyle = (isFilled: boolean, isHalfFilled: boolean) => ({
    '--star-color': getStarColor(isFilled, isHalfFilled),
    '--star-size': `${size}px`,
    '--filled-color': filledColor,
  } as React.CSSProperties);

  return (
    <div className="container" role="radiogroup" aria-label="Star rating">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        const isFilled = isStarFilled(starValue);
        const isHalfFilled = isStarHalfFilled(starValue);
        
        return (
          <Star
            key={starValue}
            value={starValue}
            isFilled={isFilled}
            isHalfFilled={isHalfFilled}
            disabled={disabled}
            allowHalfRating={allowHalfRating}
            starClassName={getStarClassName(isHalfFilled)}
            starStyle={getStarStyle(isFilled, isHalfFilled)}
            onHover={handleMouseEnter}
            onHalfHover={handleHalfMouseEnter}
            onLeave={handleMouseLeave}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
};
