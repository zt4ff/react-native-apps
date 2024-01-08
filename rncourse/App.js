import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { COLORS } from "./contants/colors";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const pickNumberHandler = (num) => {
    setUserNumber(num);
  };

  let screen = <StartGameScreen pickNumberHandler={pickNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[COLORS.primary800, COLORS.yellow]}
    >
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,
  },
});
