import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../contants/colors";

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opponent's Guess</Text>
      <Text>GUESS</Text>
      <View>
        <Text>Higher or lower?</Text>
        <Text>+ -</Text>
      </View>
      <View>
        <Text>LOG ROUND</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: COLORS.yellow,
    marginTop: 50,
    borderWidth: 2,
    borderColor: COLORS.yellow,
    padding: 12,
  },
});
