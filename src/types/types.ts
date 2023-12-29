export interface Coordinate {
  x: number;
  y: number;
}

export enum Direction {
  Up,
  Down,
  Left,
  Right,
  None,
}

export enum GameMode {
  None,
  Normal,
  Hard,
  PowerUps,
}
