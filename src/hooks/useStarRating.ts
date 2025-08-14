import { useState } from 'react';

interface UseStarRatingProps {
  defaultValue: number;
  disabled: boolean;
  onChange?: (rating: number) => void;
}

export const useStarRating = ({ defaultValue, disabled, onChange }: UseStarRatingProps) => {
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

  const handleMouseLeave = (): void => {
    if (!disabled) {
      setHovered(null);
    }
  };

  const isStarFilled = (value: number): boolean => {
    return hovered !== null ? value <= hovered : value <= selected;
  };

  return {
    selected,
    hovered,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    isStarFilled,
  };
};
