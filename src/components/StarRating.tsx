import React from 'react';
import { StarRatingProps } from '../types';
import { DEFAULT_CONFIG } from '../constants';
import { useStarRating } from '../hooks/useStarRating';
import { Star } from './Star';

export const StarRating: React.FC<StarRatingProps> = ({
  config = {},
  style = {},
  onChange,
}) => {
  const {
    totalStars = DEFAULT_CONFIG.TOTAL_STARS,
    defaultValue = DEFAULT_CONFIG.DEFAULT_VALUE,
    disabled = DEFAULT_CONFIG.DISABLED,
  } = config;

  const {
    size = DEFAULT_CONFIG.SIZE,
    filledColor = DEFAULT_CONFIG.FILLED_COLOR,
    emptyColor = DEFAULT_CONFIG.EMPTY_COLOR,
  } = style;

  const {
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    isStarFilled,
  } = useStarRating({ defaultValue, disabled, onChange });

  return (
    <div className="container" role="radiogroup" aria-label="Star rating">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={starValue}
            value={starValue}
            isFilled={isStarFilled(starValue)}
            size={size}
            filledColor={filledColor}
            emptyColor={emptyColor}
            disabled={disabled}
            onHover={handleMouseEnter}
            onLeave={handleMouseLeave}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
};
