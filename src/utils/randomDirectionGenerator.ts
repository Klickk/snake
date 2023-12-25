import { Direction } from "../types/types";

const randomDirectionGenerator = (): Direction => {
  const randomInt = Math.floor(Math.random() * 4);
  switch (randomInt) {
    case 0:
      return Direction.Up;
    case 1:
      return Direction.Down;
    case 2:
      return Direction.Left;
    case 3:
      return Direction.Right;
    default:
      throw new Error("Invalid randomInt");
  }
};

export default randomDirectionGenerator;
