import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Opponent's Guess</Text>
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
  title: {},
});
