import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const PrimaryButton = (props) => {
  const { children, onPress } = props;
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.container, styles.pressed] : styles.container
        }
        onPress={onPress}
        android_ripple={{
          color: "black",
        }}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    flex: 1,
    margin: 4,
    elevation: 2,
    overflow: "hidden",
  },
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#4e0329",
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
  // this style for ripple effect work around on python
  pressed: {
    opacity: 0.75,
  },
});
