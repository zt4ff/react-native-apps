import { Image, StyleSheet, View } from "react-native";

export const HeaderImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require("../assets/image-omelette.jpeg")}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 220,
  },
  imageStyle: { height: 220 },
});
