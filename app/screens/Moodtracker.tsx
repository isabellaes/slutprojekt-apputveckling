import { View, StyleSheet, Pressable } from "react-native";
import { useTheme, Text, Avatar, TextInput, Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { useEffect, useState } from "react";
import { DTOMood, Mood } from "../utils/Types";
import mapImages from "../utils/imageMapper";
import { fetchPostMood } from "../redux/MoodSlice";
import MoodAvatar from "../components/MoodAvatar";
import { ScrollView } from "react-native-gesture-handler";

const Moodtracker = () => {
  const [moodData, setMoodData] = useState<Mood[]>([]);
  const [todayMood, setTodayMood] = useState<DTOMood>({
    img: "",
    note: "",
    date: "",
  });
  const data = useSelector<RootState>((state) => state.mood.moods) as Mood[];
  const dispatch = useDispatch<AppDispatch>();

  const today = new Date();

  const avatarImg = [
    "../assets/avatarSadSmile.png",
    "../assets/avatarOkSmile.png",
    "../assets/AvatarHappySmile.png",
  ];

  useEffect(() => {
    if (data) setMoodData(data.toReversed());
  }, [data]);

  const theme = useTheme();

  function getImageAvatar(avatar: string) {
    return (
      <Avatar.Image
        style={{ backgroundColor: theme.colors.background }}
        size={50}
        source={mapImages[avatar]}
      />
    );
  }

  function registerTodaysMood() {
    dispatch(
      fetchPostMood({
        date: today.toISOString().split("T")[0],
        img: todayMood.img,
        note: todayMood.note,
      })
    );
  }

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text variant="titleLarge">Välj dagens mood</Text>
      <View style={styles.moodContainer}>
        {avatarImg.map((avatar) => (
          <Pressable
            key={avatar}
            onPress={() =>
              setTodayMood({
                ...todayMood,
                img: avatar,
              })
            }
          >
            <MoodAvatar img={avatar} selected={todayMood.img === avatar} />
          </Pressable>
        ))}
      </View>
      <Text>Skriv ner dina tankar för dagen: </Text>
      <TextInput
        value={todayMood.note}
        onChangeText={(notes) => setTodayMood({ ...todayMood, note: notes })}
        style={{ width: 300 }}
      />
      <Button onPress={() => registerTodaysMood()}>Spara</Button>

      <View style={styles.statisticsContainer}>
        <Text variant="titleLarge">Statistik</Text>
        <ScrollView contentContainerStyle={{ width: 200 }}>
          {moodData.map((m) => (
            <View style={styles.statisticsContainer} key={m._id}>
              <Text>{m.date}</Text>
              {getImageAvatar(m.img)}
              <Text>{m.note}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
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
  moodContainer: {
    flexDirection: "row",
    gap: 20,
  },
  statisticsContainer: {
    alignItems: "center",
    padding: 5,
    gap: 5,
  },
});
export default Moodtracker;
