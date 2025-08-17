import { useState } from 'react';
import { StarState } from '../components/StarRating/types';

interface UseStarRatingProps {
  defaultValue: number;
  onChange?: (rating: number) => void;
}

export const useStarRating = ({ defaultValue, onChange }: UseStarRatingProps) => {
  const [selected, setSelected] = useState<number>(defaultValue);
  const [hovered, setHovered] = useState<number | null>(null);

  const handleClick = (rating: number): void => {
    setSelected(rating);
    onChange?.(rating);
  };

  const handleMouseEnter = (rating: number): void => {
    setHovered(rating);
  };

  const handleMouseLeave = (): void => {
    setHovered(null);
  };

  const getStarState = (value: number): StarState => {
    const currentRating = hovered !== null ? hovered : selected;
    if (currentRating >= value) return 'full';
    if (currentRating === value - 0.5) return 'half';
    return 'empty';
  };

  return {
    selected,
    hovered,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    getStarState,
  };
};
