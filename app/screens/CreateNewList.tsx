import { View, StyleSheet, ScrollView } from "react-native";
import { Button, TextInput, useTheme } from "react-native-paper";
import { Text } from "react-native-paper";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { useState } from "react";
import { List, ListItem } from "../utils/Types";
import { addList } from "../redux/ListSlice";
import { generateRandomId } from "../utils/getRandomId";

const CreateNewList = () => {
  const [items, setItems] = useState([
    <TextInput
      style={{ width: 200, marginBottom: 5 }}
      label="List item"
      onChangeText={(text) => updateList(text)}
      key={0}
    />,
  ]);
  const [list, setList] = useState<ListItem[]>([]);
  const [title, setTitle] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();

  function updateList(title: string) {
    const newItem: ListItem = {
      title: title,
      description: "",
      status: "unchecked",
    };
    setList([...list, newItem]);
  }

  function addListItem() {
    setItems((prevItems) => [
      ...prevItems,
      <TextInput
        style={{ width: 200, marginBottom: 5 }}
        label="List item"
        key={prevItems.length}
        onChangeText={(text) => updateList(text)}
      />,
    ]);
  }

  function createList() {
    const newList: List = {
      id: generateRandomId(),
      title: title,
      items: list,
    };
    dispatch(addList(newList));
  }

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text variant="titleMedium">Skapa ny lista</Text>
      <ScrollView>
        <TextInput
          style={{ width: 200, marginBottom: 5 }}
          label={"Titel Lista"}
          onChangeText={(text) => setTitle(text)}
        />
        {items}

        <Button onPress={addListItem}>Add item</Button>
      </ScrollView>
      <Button mode="contained" onPress={createList}>
        Skapa lista
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
});

export default CreateNewList;
