import { LogOut, Pause, Play, RotateCcw } from "lucide-react-native";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ColorScheme } from "../styles/ColorScheme";
import { GameMode } from "../types/types";
import { Fragment } from "react";

interface HeaderProps {
  reloadGame: () => void;
  pauseGame: () => void;
  children: JSX.Element;
  isPaused: boolean;
  isGameOver: boolean;
  setGameMode: (GameMode: GameMode) => void;
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
  },
});

const Header: React.FC<HeaderProps> = ({
  reloadGame,
  pauseGame,
  children,
  isPaused,
  isGameOver,
  setGameMode,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={reloadGame}>
        <RotateCcw color={ColorScheme.primary} />
      </TouchableOpacity>
      {isGameOver ? (
        <Fragment>
          <Text style={{ color: ColorScheme.food }}>Game Over</Text>
        </Fragment>
      ) : (
        <TouchableOpacity onPress={pauseGame}>
          {isPaused ? (
            <Play color={ColorScheme.primary} />
          ) : (
            <Pause color={ColorScheme.primary} />
          )}
        </TouchableOpacity>
      )}
      {children}
      <TouchableOpacity onPress={() => setGameMode(GameMode.None)}>
        <LogOut color={ColorScheme.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
