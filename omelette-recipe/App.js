import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { HeaderImage } from "./components/HeaderImage";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderImage />
      <View style={[styles.scrollContainer]}>
        <View>
          <Text style={styles.title}>Simple Omelette Recipe</Text>
        </View>
        <View>
          <Text>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 40,
  },

  border: {
    borderWidth: 4,
    borderColor: "red",
    borderStyle: "solid",
  },
});
