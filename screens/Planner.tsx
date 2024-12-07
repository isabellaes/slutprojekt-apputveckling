import { View, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { Item } from "../utils/Types";
import { useTheme, Text } from "react-native-paper";

const Planner = () => {
  const [selectedDate, setSelectedDate] = useState<Item>();
  const [markedDates, setMarkedDates] = useState<{ [key: string]: any }>({});
  const data = useSelector<RootState>((state) => state.planner.items) as Item[];

  const theme = useTheme();

  function onSelectDay(day: any) {
    if (data && data.length > 0) {
      const item = data.find(
        (i) => i.date.toISOString().split("T")[0] === day.dateString
      );
      if (item) {
        setSelectedDate(item);
      }
    }
  }

  useEffect(() => {
    if (data && data.length > 0) {
      const newMarkedDates: { [key: string]: any } = {};

      data.forEach((item) => {
        const dateString = item.date.toISOString().split("T")[0];
        newMarkedDates[dateString] = {
          marked: true,
          dotColor: "blue",
          selectedColor: "green",
        };
      });

      setMarkedDates(newMarkedDates);
    }
  }, [data]);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Calendar
        theme={theme}
        markedDates={markedDates}
        onDayPress={(day: any) => {
          onSelectDay(day);
        }}
      />

      <View>
        <Text>{selectedDate?.date.toISOString().split("T")[0]}</Text>
        <Text>{selectedDate?.title}</Text>
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
});

export default Planner;
