import { View, Image, StyleSheet } from "react-native";

export const ImageViewer = (props) => {
  const { selectedImage, placeholderImageSource } = props;

  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  console.log(imageSource);

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
