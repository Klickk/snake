import * as React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { ColorScheme } from "../styles/ColorScheme";
import {
  GestureEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import { Coordinate, Direction } from "../types/types";
import randomCoordinateGenerator from "../utils/randomCoordinateGenerator";
import Snake from "./Snake";
import checkGameOver from "../utils/checkGameOver";
import Food from "./Food";
import checkEatsFood from "../utils/checkEatsFood";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorScheme.primary,
  },
  boundaries: {
    flex: 1,
    borderColor: ColorScheme.primary,
    borderWidth: 12,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: ColorScheme.background,
  },
});

const Game_Bounds = { xMin: 0, xMax: 39, yMin: 0, yMax: 81 };
const Move_Interval = 50;
const Score_Increment = 1;

const Game = () => {
  const [direction, setDirection] = React.useState<Direction>(Direction.None);
  const [snake, setSnake] = React.useState<Coordinate[]>([{ x: 0, y: 0 }]);
  const [food, setFood] = React.useState<Coordinate>({ x: 0, y: 0 });
  const [isGameOver, setIsGameOver] = React.useState<boolean>(false);
  const [isPaused, setIsPaused] = React.useState<boolean>(false);
  const [score, setScore] = React.useState<number>(0);

  React.useEffect(() => {
    setSnake([randomCoordinateGenerator(Game_Bounds)]);
    setFood(randomCoordinateGenerator(Game_Bounds, snake));
    setIsGameOver(false);
  }, []);

  React.useEffect(() => {
    console.log(snake);
  }, [snake]);

  React.useEffect(() => {
    if (!isGameOver && !isPaused) {
      const interval = setInterval(() => {
        moveSnake();
      }, Move_Interval);
      return () => clearInterval(interval);
    }
  }, [snake, isGameOver, isPaused, direction]);

  const moveSnake = () => {
    const snakeHead = snake[0];
    const newHead = { ...snakeHead };

    switch (direction) {
      case Direction.Up:
        newHead.y -= 1;
        break;
      case Direction.Down:
        newHead.y += 1;
        break;
      case Direction.Left:
        newHead.x -= 1;
        break;
      case Direction.Right:
        newHead.x += 1;
        break;
    }

    if (checkGameOver(Game_Bounds, [newHead, ...snake.slice(0, -1)])) {
      setIsGameOver((prev) => !prev);
      return;
    }

    if (checkEatsFood(newHead, food)) {
      setSnake([newHead, ...snake]);
      setFood(randomCoordinateGenerator(Game_Bounds, snake));
    } else {
      setSnake([newHead, ...snake.slice(0, -1)]);
    }
  };

  const handleGesture = (
    event: GestureEvent<PanGestureHandlerEventPayload>
  ) => {
    const { translationX, translationY } = event.nativeEvent;

    if (Math.abs(translationX) > Math.abs(translationY)) {
      if (translationX > 0 && direction !== Direction.Left) {
        setDirection(Direction.Right);
      } else if (translationX <= 0 && direction !== Direction.Right) {
        setDirection(Direction.Left);
      }
    } else {
      if (translationY > 0 && direction !== Direction.Up) {
        setDirection(Direction.Down);
      } else if (translationY <= 0 && direction !== Direction.Down) {
        setDirection(Direction.Up);
      }
    }
    console.log(direction.toString());
  };

  return (
    <PanGestureHandler onGestureEvent={handleGesture}>
      <SafeAreaView style={styles.container}>
        <View style={styles.boundaries}>
          <Snake snake={snake} />
          <Food food={food} />
        </View>
      </SafeAreaView>
    </PanGestureHandler>
  );
};

export default Game;
