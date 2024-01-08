import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../contants/colors";
import PrimaryButton from "../components/PrimaryButton";

const generateRandomNumber = (min, max, exclude) => {
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;

  if (rndNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  }
  return rndNumber;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = (props) => {
  const { userNumber } = props;
  const intialGuess = generateRandomNumber(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(intialGuess);

  const nextGuessHandler = (direction /** "lower", "higher" */) => {
    if (direction === "lower") {
      maxBoundary = currentGuess;
      minBoundary = 1;
    } else {
      minBoundary = currentGuess + 1;
      maxBoundary = 100;
    }
    const newRndNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opponent's Guess </Text>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{currentGuess}</Text>
      </View>
      <View>
        <Text>Higher or lower?</Text>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={() => nextGuessHandler("higher")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            -
          </PrimaryButton>
        </View>
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
  buttonsContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
