import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../contants/colors";

const generateRandomNumber = (min, max, exclude) => {
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;

  if (rndNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  }
  return rndNumber;
};

const GameScreen = (props) => {
  const { userNumber } = props;
  const intialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(intialGuess);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opponent's Guess</Text>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{currentGuess}</Text>
      </View>
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
  numberContainer: {
    borderWidth: 4,
    borderColor: COLORS.yellow,
    padding: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: COLORS.yellow,
    fontSize: 36,
    fontWeight: "bold",
  },
});
