import { Coordinate } from "../types/types";

type checkGameOver = (
  Game_Boundaries: { xMin: number; xMax: number; yMin: number; yMax: number },
  snake: Coordinate[],
  walls?: Coordinate[]
) => boolean;

const checkGameOver: checkGameOver = (Game_Boundaries, snake, walls) => {
  const head = snake[0];
  if (
    head.x < Game_Boundaries.xMin ||
    head.x > Game_Boundaries.xMax ||
    head.y < Game_Boundaries.yMin ||
    head.y > Game_Boundaries.yMax
  ) {
    return true;
  }
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === head.x && snake[i].y === head.y) {
      return true;
    }
  }
  if (walls) {
    for (let i = 0; i < walls.length; i++) {
      if (walls[i].x === head.x && walls[i].y === head.y) {
        return true;
      }
    }
  }
  return false;
};

export default checkGameOver;
