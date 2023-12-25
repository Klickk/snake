import React from "react";
import { Coordinate } from "../types/types";
import { StyleSheet, View } from "react-native";

interface FoodProps {
  food: Coordinate;
}

const styles = StyleSheet.create({
  food: {
    width: 10,
    height: 10,
    borderRadius: 7,
    backgroundColor: "red",
    position: "absolute",
  },
});

const Food: React.FC<FoodProps> = ({ food }) => {
  return (
    <View style={[styles.food, { left: food.x * 10, top: food.y * 10 }]} />
  );
};

export default Food;
