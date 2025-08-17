import React from 'react';
import { StarRatingProps } from './types';
import { DEFAULT_CONFIG } from '../../constants';
import { useStarRating } from '../../hooks/useStarRating';
import { Star } from '../Star';
import { getStarStyle } from './utils/starUtils';

export const StarRating: React.FC<StarRatingProps> = ({
  config = {},
  style = {},
  onChange,
}) => {
  const {
    totalStars = DEFAULT_CONFIG.TOTAL_STARS,
    defaultValue = DEFAULT_CONFIG.DEFAULT_VALUE,
    enableHalfRating = DEFAULT_CONFIG.ENABLE_HALF_RATING,
  } = config;

  const {
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    getStarState,
  } = useStarRating({ defaultValue, onChange });

  return (
    <div className="container" role="radiogroup" aria-label="Star rating">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        const starState = getStarState(starValue);
        const starStyle = getStarStyle(starState, style);

        return (
          <Star
            key={starValue}
            value={starValue}
            starState={starState}
            enableHalfRating={enableHalfRating}
            starStyle={starStyle}
            onHover={handleMouseEnter}
            onLeave={handleMouseLeave}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
};
