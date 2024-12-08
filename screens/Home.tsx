import { StyleSheet, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { Item, List } from "../utils/Types";
import { SettingsState } from "../redux/SettingsSlice";
import { useTheme, Text } from "react-native-paper";

const Home = () => {
  const [items, setItems] = useState<Item[]>();
  const [lists, setLists] = useState<List[]>();
  const [settings, setSettings] = useState<SettingsState>();

  const date = new Date();
  const data = useSelector<RootState>((state) => state.planner.items) as Item[];
  const dataLists = useSelector<RootState>(
    (state) => state.list.lists
  ) as List[];

  const settingState = useSelector<RootState>(
    (state) => state.settings
  ) as SettingsState;

  useEffect(() => {
    setSettings(settingState);
  });

  function getActivityToday() {
    return (
      items?.find(
        (i) => i.date.split("T")[0] === date.toISOString().split("T")[0]
      )?.title || "Inga aktiviteter idag"
    );
  }

  function getActivityTomorrow() {
    const tomorrow = new Date(date);
    tomorrow.setDate(date.getDate() + 1);
    return (
      items?.find(
        (i) => i.date.split("T")[0] === tomorrow.toISOString().split("T")[0]
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
  const theme = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text>Välkommen!</Text>
      <Text>{date.toISOString().split("T")[0]}</Text>
      <ScrollView contentContainerStyle={{ gap: 10 }}>
        {settings?.home.planner ? (
          <>
            <View style={styles.box}>
              <Text>Idag</Text>
              <Text>{getActivityToday()}</Text>
            </View>
            <View style={styles.box}>
              <Text>Imorgon</Text>
              <Text>{getActivityTomorrow()}</Text>
            </View>
          </>
        ) : (
          <></>
        )}
        {settings?.home.lists ? (
          <View style={styles.box}>
            <Text>Listor</Text>
            {lists?.map((list) => (
              <Text key={list.id}>{list.title}</Text>
            ))}
          </View>
        ) : (
          <></>
        )}
      </ScrollView>
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
  box: {
    minHeight: 100,
    minWidth: 300,
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

export default Home;
