import { Coordinate } from "../types/types";

type randomCoordinateGenerator = (
  Game_Boundaries: { xMin: number; xMax: number; yMin: number; yMax: number },
  forbiddenCoords?: Coordinate[]
) => Coordinate;

const randomCoordinateGenerator: randomCoordinateGenerator = (
  Game_Boundaries,
  forbiddenCoords
) => {
  const x =
    Math.floor(Math.random() * (Game_Boundaries.xMax - Game_Boundaries.xMin)) +
    Game_Boundaries.xMin;
  const y =
    Math.floor(Math.random() * (Game_Boundaries.yMax - Game_Boundaries.yMin)) +
    Game_Boundaries.yMin;
  const newCoord: Coordinate = { x, y };
  if (forbiddenCoords)
    if (
      forbiddenCoords.some(
        (coord) => coord.x === newCoord.x && coord.y === newCoord.y
      )
    ) {
      return randomCoordinateGenerator(Game_Boundaries, forbiddenCoords);
    }
  return newCoord;
};

export default randomCoordinateGenerator;
