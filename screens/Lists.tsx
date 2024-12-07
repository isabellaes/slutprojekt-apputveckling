import { View, StyleSheet, ScrollView } from "react-native";
import { FAB } from "react-native-paper";
import { Text } from "react-native-paper";
import { Checkbox } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { List } from "../utils/Types";

const Lists = () => {
  const [lists, setLists] = useState<List[]>([]);
  const data = useSelector<RootState>((state) => state.list.lists) as List[];

  useEffect(() => {
    if (data) setLists(data);
  }, [data]);

  return (
    <View style={styles.container}>
      <Text>Mina listor</Text>
      <ScrollView>
        {lists.map((list) => (
          <View style={styles.list} key={list.id}>
            <Text>{list.title}</Text>
            {list.items.map((item) => (
              <View style={styles.listItem} key={item.title}>
                <Text>{item.title}</Text>
                <Checkbox status={item.status} />
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
      <FAB
        icon="plus"
        style={styles.fab}
        color="green"
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
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
    backgroundColor: "lightgreen",
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
