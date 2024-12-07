import { StyleSheet, Text, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { Item, List } from "../utils/Types";

const Home = () => {
  const [items, setItems] = useState<Item[]>();
  const [lists, setLists] = useState<List[]>();

  const date = new Date();
  const data = useSelector<RootState>((state) => state.planner.items) as Item[];
  const dataLists = useSelector<RootState>(
    (state) => state.list.lists
  ) as List[];

  function getActivityToday() {
    return (
      items?.find(
        (i) =>
          i.date.toISOString().split("T")[0] ===
          date.toISOString().split("T")[0]
      )?.title || "Inga aktiviteter idag"
    );
  }

  function getActivityTomorrow() {
    const tomorrow = new Date(date);
    tomorrow.setDate(date.getDate() + 1);
    return (
      items?.find(
        (i) =>
          i.date.toISOString().split("T")[0] ===
          tomorrow.toISOString().split("T")[0]
      )?.title || "Inga aktiviteter imorgon"
    );
  }

  useEffect(() => {
    if (data) {
      setItems(data);
    }
  }, [data]);

  useEffect(() => {
    if (dataLists) {
      setLists(dataLists);
    }
  }, [dataLists]);
  return (
    <View style={styles.container}>
      <Text>Välkommen!</Text>
      <Text>{date.toISOString().split("T")[0]}</Text>
      <ScrollView contentContainerStyle={{ gap: 10 }}>
        <View style={styles.box}>
          <Text>Idag</Text>
          <Text>{getActivityToday()}</Text>
        </View>
        <View style={styles.box}>
          <Text>Imorgon</Text>
          <Text>{getActivityTomorrow()}</Text>
        </View>
        <View style={styles.box}>
          <Text>Listor</Text>
          {lists?.map((list) => (
            <Text key={list.id}>{list.title}</Text>
          ))}
        </View>
      </ScrollView>
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
  box: {
    minHeight: 100,
    minWidth: 300,
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

export default Home;
