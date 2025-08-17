export interface StarRatingConfig {
  totalStars?: number;
  defaultValue?: number;
  enableHalfRating?: boolean;
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
  starState: 'empty' | 'half' | 'full';
  enableHalfRating?: boolean;
  starStyle: React.CSSProperties;
  onHover: (value: number) => void;
  onLeave: () => void;
  onClick: (value: number) => void;
}
