import { View, StyleSheet, ScrollView } from "react-native";
import { Checkbox, Text, useTheme, FAB, Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { useEffect, useState } from "react";
import { List, ListItem } from "../utils/Types";
import { updateStatusOnItem, deleteList } from "../redux/ListSlice";
import CreateNewList from "../components/CreateNewList";

const Lists = () => {
  const [lists, setLists] = useState<List[]>([]);
  const data = useSelector<RootState>((state) => state.list.lists) as List[];
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (data) setLists(data);
  }, [data]);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text>Mina listor</Text>

      <ScrollView>
        {lists.map((list) => (
          <View style={styles.list} key={list.id}>
            <Text>{list.title}</Text>
            {list.items.map((item) => (
              <View style={styles.listItem} key={item.title}>
                <Text>{item.title}</Text>
                <Checkbox
                  status={item.status}
                  onPress={() => {
                    const status: "checked" | "unchecked" | "indeterminate" =
                      item.status === "checked" ? "unchecked" : "checked";
                    const newItem: ListItem = { ...item, status: status };
                    dispatch(
                      updateStatusOnItem({ id: list.id, item: newItem })
                    );
                  }}
                />
              </View>
            ))}
            <Button onPress={() => dispatch(deleteList({ id: list.id }))}>
              Radera lista
            </Button>
          </View>
        ))}
      </ScrollView>
      <CreateNewList></CreateNewList>
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
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  listItem: {
    minWidth: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  list: {
    margin: 5,
    alignItems: "center",
    padding: 10,
    borderBlockColor: "black",
    borderCurve: "circular",
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 2,
  },
});

export default Lists;
