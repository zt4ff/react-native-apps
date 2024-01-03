import { StatusBar } from "expo-status-bar";
import { useState, useRef } from "react";
import {
  Button,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);
  const [idToDelete, setIdToDelete] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const textInputRef = useRef();

  const handleClick = () => {
    setGoals((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        value: text,
      },
    ]);
    if (textInputRef.current) {
      textInputRef.current.clear();
    }
  };

  const handleDelete = (id) => {
    const newGoals = goals.filter((goal) => goal.id !== idToDelete);
    setGoals(newGoals);
    setIdToDelete(null);
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" backgroundColor="green" />
      <View style={styles.inputContainer}>
        <TextInput
          ref={textInputRef}
          value={text}
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={setText}
        />
        <Button title="Add Goals" onPress={handleClick} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <View style={styles.goalItem}>
              <Pressable
                onPress={() => {
                  setModalOpen(true);
                  setIdToDelete(item.item.id);
                }}
                android_ripple={{
                  color: "darkgreen",
                }}
              >
                <Text style={styles.goalText}>{item.item.value}</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContainer}>
          <Text>Are you sure you want to delete goal</Text>
          <View style={styles.btnContainer}>
            <Button
              title="Cancel"
              color="black"
              onPress={() => setModalOpen(false)}
            />
            <Button
              title="Delete"
              color="red"
              onPress={() => {
                handleDelete();
                setModalOpen(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 16,
    paddingTop: 50,
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
  goalItem: {
    backgroundColor: "green",
    marginVertical: 5,
  },
  goalText: {
    color: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  btnContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
