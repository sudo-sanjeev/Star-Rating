import { useState } from 'react';

interface UseStarRatingProps {
  defaultValue: number;
  disabled: boolean;
  allowHalfRating?: boolean;
  onChange?: (rating: number) => void;
}

export const useStarRating = ({ defaultValue, disabled, allowHalfRating = false, onChange }: UseStarRatingProps) => {
  const [selected, setSelected] = useState<number>(defaultValue);
  const [hovered, setHovered] = useState<number | null>(null);

  const handleClick = (rating: number): void => {
    if (disabled) return;
    
    setSelected(rating);
    onChange?.(rating);
  };

  const handleMouseEnter = (rating: number): void => {
    if (!disabled) {
      setHovered(rating);
    }
  };

  const handleHalfMouseEnter = (rating: number): void => {
    if (!disabled && allowHalfRating) {
      setHovered(rating - 0.5);
    }
  };

  const handleMouseLeave = (): void => {
    if (!disabled) {
      setHovered(null);
    }
  };

  const isStarFilled = (value: number): boolean => {
    const currentRating = hovered !== null ? hovered : selected;
    return currentRating >= value;
  };

  const isStarHalfFilled = (value: number): boolean => {
    if (!allowHalfRating) return false;
    const currentRating = hovered !== null ? hovered : selected;
    return currentRating >= value - 0.5 && currentRating < value;
  };

  return {
    selected,
    hovered,
    handleClick,
    handleMouseEnter,
    handleHalfMouseEnter,
    handleMouseLeave,
    isStarFilled,
    isStarHalfFilled,
  };
};
