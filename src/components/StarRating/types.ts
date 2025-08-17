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

  export type StarState = 'empty' | 'half' | 'full';