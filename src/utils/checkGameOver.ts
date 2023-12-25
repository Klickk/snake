import { Coordinate } from "../types/types";

type checkGameOver = (
  Game_Boundaries: { xMin: number; xMax: number; yMin: number; yMax: number },
  snake: Coordinate[]
) => boolean;

const checkGameOver: checkGameOver = (Game_Boundaries, snake) => {
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
  return false;
};

export default checkGameOver;
