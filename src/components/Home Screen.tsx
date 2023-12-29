import { StyleSheet, Text, View } from "react-native";
import { GameMode } from "../types/types";
import { TouchableOpacity } from "react-native-gesture-handler";

interface HomeScreenProps {
  setGameMode: (GameMode: GameMode) => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const HomeScreen: React.FC<HomeScreenProps> = ({ setGameMode }) => {
  return (
    <View style={styles.container}>
      <Text>Snake Game</Text>
      <TouchableOpacity onPress={() => setGameMode(GameMode.Normal)}>
        <Text>Normal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setGameMode(GameMode.Hard)}>
        <Text>Hard</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setGameMode(GameMode.PowerUps)}>
        <Text>Power Ups</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
