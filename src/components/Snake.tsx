import { Fragment } from "react";
import { Coordinate } from "../types/types";
import { StyleSheet, View } from "react-native";
import { ColorScheme } from "../styles/ColorScheme";

interface SnakeProps {
  snake: Coordinate[];
}

const styles = StyleSheet.create({
  snake: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: ColorScheme.secondary,
    position: "absolute",
  },
});

const Snake: React.FC<SnakeProps> = ({ snake }) => {
  return (
    <Fragment>
      {snake.map((segment: Coordinate, index: number) => {
        const segmentStyle = {
          left: segment.x * 10,
          top: segment.y * 10,
        };
        return <View key={index} style={[styles.snake, segmentStyle]} />;
      })}
    </Fragment>
  );
};

export default Snake;
