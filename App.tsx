import "react-native-gesture-handler";
import Game from "./src/components/Game";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { GameMode } from "./src/types/types";
import HomeScreen from "./src/components/Home Screen";

const App = () => {
  const [gameMode, setGameMode] = React.useState<GameMode>(0);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {gameMode > 0 ? (
        <Game GameMode={gameMode} setGameMode={setGameMode} />
      ) : (
        <HomeScreen setGameMode={setGameMode} />
      )}
    </GestureHandlerRootView>
  );
};

export default App;
