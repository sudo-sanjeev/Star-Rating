export interface StarRatingConfig {
  totalStars?: number;
  defaultValue?: number;
  disabled?: boolean;
  allowHalfRating?: boolean;
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
  isHalfFilled?: boolean;
  disabled: boolean;
  allowHalfRating?: boolean;
  starClassName: string;
  starStyle: React.CSSProperties;
  onHover: (value: number) => void;
  onHalfHover?: (value: number) => void;
  onLeave: () => void;
  onClick: (value: number) => void;
}
