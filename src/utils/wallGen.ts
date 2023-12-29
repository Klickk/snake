import { Coordinate } from "../types/types";
import randomCoordinateGenerator from "./randomCoordinateGenerator";

type wallGenFunc = (GameBounds: {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
}) => Coordinate[];

const wallGen: wallGenFunc = (GameBounds) => {
  const walls: Coordinate[] = [];
  for (let i = 0; i < 100; i++) {
    const genChance = Math.random();
    if (genChance < 0.5) {
      const wall = randomCoordinateGenerator(GameBounds, walls);
      const verticalOrHorizontal = Math.random();
      if (verticalOrHorizontal < 0.5) {
        const wallSide = Math.random();
        if (wallSide < 0.5) {
          if (wall.x + 1 <= GameBounds.xMax) {
            walls.push(wall);
            walls.push({ x: wall.x + 1, y: wall.y });
          } else {
            walls.push(wall);
            walls.push({ x: wall.x - 1, y: wall.y });
          }
        } else {
          if (wall.x - 1 >= GameBounds.xMin) {
            walls.push(wall);
            walls.push({ x: wall.x - 1, y: wall.y });
          } else {
            walls.push(wall);
            walls.push({ x: wall.x + 1, y: wall.y });
          }
        }
      } else {
        const wallSide = Math.random();
        if (wallSide < 0.5) {
          if (wall.y + 1 <= GameBounds.yMax) {
            walls.push(wall);
            walls.push({ x: wall.x, y: wall.y + 1 });
          } else {
            walls.push(wall);
            walls.push({ x: wall.x, y: wall.y - 1 });
          }
        } else {
          if (wall.y - 1 >= GameBounds.yMin) {
            walls.push(wall);
            walls.push({ x: wall.x, y: wall.y - 1 });
          } else {
            walls.push(wall);
            walls.push({ x: wall.x, y: wall.y + 1 });
          }
        }
      }
    }
    if (walls.length === 75) {
      return walls;
    }
  }
  return walls;
};

export default wallGen;
