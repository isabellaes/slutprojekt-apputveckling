import { View, StyleSheet, Pressable, Image } from "react-native";
import { useTheme, Text, Avatar, TextInput, Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { useEffect, useState } from "react";
import { Mood } from "../utils/Types";
import mapImages from "../utils/imageMapper";
import { addMood } from "../redux/MoodSlice";
import { generateRandomId } from "../utils/getRandomId";
import MoodAvatar from "../components/MoodAvatar";

const Moodtracker = () => {
  const [moodData, setMoodData] = useState<Mood[]>([]);
  const [todayMood, setTodayMood] = useState<Mood>({
    id: "",
    img: "",
    notes: "",
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
    if (data) setMoodData(data);
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
      addMood({
        id: generateRandomId(),
        date: today.toISOString(),
        img: todayMood.img,
        notes: todayMood.notes,
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
        value={todayMood.notes}
        onChangeText={(notes) => setTodayMood({ ...todayMood, notes: notes })}
        style={{ width: 300 }}
      />
      <Button onPress={() => registerTodaysMood()}>Spara</Button>

      <View style={styles.statisticsContainer}>
        <Text variant="titleLarge">Statistik</Text>
        {moodData.map((m) => (
          <View style={styles.statisticsContainer} key={m.id}>
            <Text>{m.date.split("T")[0]}</Text>
            {getImageAvatar(m.img)}
            <Text>{m.notes}</Text>
          </View>
        ))}
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
