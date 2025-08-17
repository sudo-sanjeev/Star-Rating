import { DEFAULT_CONFIG } from '../constants';
import { StarRatingStyle } from '../types';

export type StarState = 'empty' | 'half' | 'full';

export const getStarStyle = (
  state: StarState, 
  style: StarRatingStyle = {}
): React.CSSProperties => {
  const size = style.size ?? DEFAULT_CONFIG.SIZE;
  const filledColor = style.filledColor ?? DEFAULT_CONFIG.FILLED_COLOR;
  const emptyColor = style.emptyColor ?? DEFAULT_CONFIG.EMPTY_COLOR;
  
  const starColor = state === 'full' ? filledColor : emptyColor;
  
  return {
    '--star-color': starColor,
    '--star-size': `${size}px`,
    '--filled-color': filledColor,
  } as React.CSSProperties;
};
