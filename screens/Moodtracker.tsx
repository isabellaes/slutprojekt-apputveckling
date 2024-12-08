import { View, StyleSheet, Pressable, Image } from "react-native";
import { useTheme, Text, Avatar } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { useEffect, useState } from "react";
import { Mood } from "../utils/Types";
import mapImages from "../utils/imageMapper";
import { addMood } from "../redux/MoodSlice";
import { generateRandomId } from "../utils/getRandomId";

const Moodtracker = () => {
  const [moodData, setMoodData] = useState<Mood[]>([]);
  const data = useSelector<RootState>((state) => state.mood.moods) as Mood[];
  const dispatch = useDispatch<AppDispatch>();

  const today = new Date();

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

  function registerTodaysMood(img: string) {
    dispatch(
      addMood({ id: generateRandomId(), date: today.toISOString(), img: img })
    );
  }

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text>Välj dagens mood</Text>
      <View style={styles.moodContainer}>
        <Pressable
          onPress={() => registerTodaysMood("../assets/avatarSadSmile.png")}
        >
          <Avatar.Image
            style={{ backgroundColor: theme.colors.background }}
            size={50}
            source={require("../assets/avatarSadSmile.png")}
          />
        </Pressable>

        <Pressable
          onPress={() => registerTodaysMood("../assets/avatarOkSmile.png")}
        >
          <Avatar.Image
            style={{ backgroundColor: theme.colors.background }}
            size={50}
            source={require("../assets/avatarOkSmile.png")}
          />
        </Pressable>

        <Pressable
          onPress={() => registerTodaysMood("../assets/AvatarHappySmile.png")}
        >
          <Avatar.Image
            style={{ backgroundColor: theme.colors.background }}
            size={50}
            source={require("../assets/AvatarHappySmile.png")}
          />
        </Pressable>
      </View>
      <View style={styles.statisticsContainer}>
        <Text>Statistik</Text>
        {moodData.map((m) => (
          <View style={styles.statisticsContainer} key={m.id}>
            <Text>{m.date.split("T")[0]}</Text>
            {getImageAvatar(m.img)}
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
