export interface StarProps {
  value: number;
  starState: 'empty' | 'half' | 'full';
  enableHalfRating: boolean;
  starStyle: React.CSSProperties;
  onHover: (value: number) => void;
  onLeave: () => void;
  onClick: (value: number) => void;
}
