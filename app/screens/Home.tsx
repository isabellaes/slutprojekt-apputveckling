import { StyleSheet, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { Item, List, Mood } from "../utils/Types";
import { SettingsState } from "../redux/SettingsSlice";
import { useTheme, Text } from "react-native-paper";
import MoodAvatar from "../components/MoodAvatar";

const Home = () => {
  const [itemsToday, setItemsToday] = useState<Item[]>();
  const [itemsTomorrow, setItemsTomorrow] = useState<Item[]>();
  const [lists, setLists] = useState<List[]>();
  const [mood, setMood] = useState<Mood>();
  const [settings, setSettings] = useState<SettingsState>();

  const date = new Date();
  const tomorrows = new Date(date);
  tomorrows.setDate(date.getDate() + 1);

  const data = useSelector<RootState>((state) => state.planner.items) as Item[];

  const dataLists = useSelector<RootState>(
    (state) => state.list.lists
  ) as List[];

  const settingState = useSelector<RootState>(
    (state) => state.settings
  ) as SettingsState;

  const moodData = useSelector<RootState>(
    (state) => state.mood.moods
  ) as Mood[];

  useEffect(() => {
    setSettings(settingState);
  }, [settingState]);

  useEffect(() => {
    if (data) {
      const todaysitem = data.filter(
        (i) => i.date.split("T")[0] === date.toISOString().split("T")[0]
      );
      const tommorowsItem = data.filter(
        (i) => i.date.split("T")[0] === tomorrows.toISOString().split("T")[0]
      );
      setItemsToday(todaysitem);
      setItemsTomorrow(tommorowsItem);
    }
  }, [data]);

  useEffect(() => {
    if (dataLists) {
      setLists(dataLists);
    }
  }, [dataLists]);

  useEffect(() => {
    if (moodData) {
      const todayMood = moodData.find(
        (m) => m.date.split("T")[0] === date.toISOString().split("T")[0]
      );
      setMood(todayMood);
    }
  }, [moodData]);

  const theme = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text variant="titleLarge">Välkommen!</Text>
      <Text>{date.toISOString().split("T")[0]}</Text>
      <ScrollView contentContainerStyle={{ gap: 10 }}>
        {settings?.home.planner ? (
          <>
            <View style={[styles.box, { borderColor: theme.colors.primary }]}>
              <Text variant="titleMedium">Idag</Text>

              {itemsToday && itemsToday.length > 0 ? (
                <>
                  {itemsToday?.map((i) => (
                    <Text key={i._id}>
                      {i?.title} {i?.date.split("T")[1].slice(0, 5)}
                    </Text>
                  ))}
                </>
              ) : (
                <Text>Inga aktiviteter idag</Text>
              )}
            </View>
            <View style={[styles.box, { borderColor: theme.colors.primary }]}>
              <Text variant="titleMedium">Imorgon</Text>
              {itemsTomorrow && itemsTomorrow.length > 0 ? (
                <>
                  {itemsTomorrow?.map((i) => (
                    <Text key={i._id}>
                      {i?.title} {i?.date.split("T")[1].slice(0, 5)}
                    </Text>
                  ))}
                </>
              ) : (
                <Text>Inga aktiviteter imorgon</Text>
              )}
            </View>
          </>
        ) : (
          <></>
        )}
        {settings?.home.lists ? (
          <View style={[styles.box, { borderColor: theme.colors.primary }]}>
            <Text variant="titleMedium">Mina Listor</Text>
            {lists?.map((list) => (
              <Text key={list._id}>{list.title}</Text>
            ))}
          </View>
        ) : (
          <></>
        )}
        {settings?.home.moodtracker ? (
          <View style={[styles.box, { borderColor: theme.colors.primary }]}>
            <Text variant="titleMedium">Dagens mood</Text>
            {mood ? (
              <MoodAvatar img={mood.img} selected={false} />
            ) : (
              <Text>Inget registrerat idag</Text>
            )}
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
    borderCurve: "circular",
    borderRadius: 5,
    borderWidth: 2,
  },
});

export default Home;
