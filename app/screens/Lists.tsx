import { View, StyleSheet, ScrollView } from "react-native";
import { Checkbox, Text, useTheme, FAB, Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { useEffect, useState } from "react";
import { List } from "../utils/Types";
import {
  fetchDeleteListById,
  fetchUpdateList,
} from "../redux/ListSlice";
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
      <Text variant="titleLarge">Mina listor</Text>

      <ScrollView>
        {lists.map((list) => (
          <View
            style={[styles.list, { borderColor: theme.colors.primary }]}
            key={list._id}
          >
            <Text variant="titleMedium">{list.title}</Text>
            {list.items.map((item) => (
              <View style={styles.listItem} key={item._id}>
                <Text>{item.title}</Text>
                <Checkbox
                  status={item.status}
                  onPress={() => {
                    const status: "checked" | "unchecked" | "indeterminate" =
                      item.status === "checked" ? "unchecked" : "checked";
                    const newItem = { ...item, status: status };
                    dispatch(
                      fetchUpdateList({
                        listId: list._id,
                        itemId: item._id,
                        item: newItem,
                      })
                    );
                  }}
                />
              </View>
            ))}
            <Button onPress={() => dispatch(fetchDeleteListById(list._id))}>
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
    borderWidth: 2,
  },
});

export default Lists;
