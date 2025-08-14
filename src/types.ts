export interface StarRatingConfig {
  totalStars?: number;
  defaultValue?: number;
  disabled?: boolean;
}

export interface StarRatingStyle {
  size?: number;
  filledColor?: string;
  emptyColor?: string;
}

export interface StarRatingProps {
  config?: StarRatingConfig;
  style?: StarRatingStyle;
  onChange?: (rating: number) => void;
}

export interface StarProps {
  value: number;
  isFilled: boolean;
  size: number;
  filledColor: string;
  emptyColor: string;
  disabled: boolean;
  onHover: (value: number) => void;
  onLeave: () => void;
  onClick: (value: number) => void;
}
