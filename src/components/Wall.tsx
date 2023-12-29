import { Fragment } from "react";
import { Coordinate } from "../types/types";
import { StyleSheet, View } from "react-native";
import { ColorScheme } from "../styles/ColorScheme";

interface WallProps {
  wall: Coordinate[];
}

const styles = StyleSheet.create({
  wall: {
    width: 10,
    height: 10,
    backgroundColor: ColorScheme.wall,
    position: "absolute",
  },
});

const Wall: React.FC<WallProps> = ({ wall }) => {
  return (
    <Fragment>
      {wall.map((segment: Coordinate, index: number) => {
        const segmentStyle = {
          left: segment.x * 10,
          top: segment.y * 10,
        };
        return <View key={index} style={[styles.wall, segmentStyle]} />;
      })}
    </Fragment>
  );
};

export default Wall;
