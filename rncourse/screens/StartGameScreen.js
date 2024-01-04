import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 18,
    backgroundColor: "#72063c",
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
    fontSize: 42,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
  },
});
