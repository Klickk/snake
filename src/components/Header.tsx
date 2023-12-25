import { Pause, Play, RotateCcw } from "lucide-react-native";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ColorScheme } from "../styles/ColorScheme";

interface HeaderProps {
  reloadGame: () => void;
  pauseGame: () => void;
  children: JSX.Element;
  isPaused: boolean;
  isGameOver: boolean;
}

const styles = StyleSheet.create({
  container: {
    flex: 0.05,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: ColorScheme.primary,
    borderWidth: 12,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomWidth: 0,
    padding: 15,
    backgroundColor: ColorScheme.background,
    color: ColorScheme.primary,
  },
});

const Header: React.FC<HeaderProps> = ({
  reloadGame,
  pauseGame,
  children,
  isPaused,
  isGameOver,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={reloadGame}>
        <RotateCcw />
      </TouchableOpacity>
      {isGameOver ? (
        <Text>Game Over</Text>
      ) : (
        <TouchableOpacity onPress={pauseGame}>
          {isPaused ? <Play /> : <Pause />}
        </TouchableOpacity>
      )}
      {children}
    </View>
  );
};

export default Header;
