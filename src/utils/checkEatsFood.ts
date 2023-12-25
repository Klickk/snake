import { Coordinate } from "../types/types";

type checkEatsFoodFunc = (head: Coordinate, food: Coordinate) => boolean;

const checkEatsFood: checkEatsFoodFunc = (head, food) => {
  return head.x === food.x && head.y === food.y;
};

export default checkEatsFood;
