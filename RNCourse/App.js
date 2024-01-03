import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);

  const handleClick = () => {
    goals.push(goals);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          value={text}
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={setText}
        />
        <Button title="Add Goals" onPress={handleClick} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals ...</Text>
      </View>
      {/* <FlatList renderItem={item => ()} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
