import { StyleSheet, View, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { COLORS } from "../contants/colors";

const StartGameScreen = (props) => {
  const { pickNumberHandler } = props;
  const [enteredNumber, setEnteredNumber] = useState("");

  const confirmNumber = () => {
    const choseNumber = parseInt(enteredNumber);

    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert("Invalid number", "Number has to be between 1 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: () => setEnteredNumber(""),
        },
      ]);
    } else {
      pickNumberHandler(choseNumber);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={setEnteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={() => setEnteredNumber("")}>
          Reset
        </PrimaryButton>
        <PrimaryButton onPress={confirmNumber}>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 18,
    backgroundColor: COLORS.primary500,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  textInput: {
    height: 50,
    width: 70,
    fontSize: 42,
    borderBottomColor: COLORS.yellow,
    borderBottomWidth: 2,
    color: COLORS.yellow,
    textAlign: "center",
  },
  buttonsContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
