import { View, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { Item } from "../utils/Types";
import { useTheme, Text } from "react-native-paper";
import { DateTimePickerExample } from "../components/DateTimePicker";

const Planner = () => {
  const [selectedDate, setSelectedDate] = useState<Item[]>([]);
  const [markedDates, setMarkedDates] = useState<{ [key: string]: any }>({});
  const data = useSelector<RootState>((state) => state.planner.items) as Item[];

  const theme = useTheme();

  function onSelectDay(day: any) {
    if (data && data.length > 0) {
      const item = data.filter((i) => i.date.split("T")[0] === day.dateString);
      if (item) {
        setSelectedDate(item);
      }
    }
  }

  useEffect(() => {
    if (data && data.length > 0) {
      const newMarkedDates: { [key: string]: any } = {};

      data.forEach((item) => {
        const dateString = item.date.split("T")[0];
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
        theme={{
          backgroundColor: theme.colors.background,
          calendarBackground: theme.colors.background,
          textSectionTitleColor: theme.colors.primary,
          selectedDayBackgroundColor: "blue",
          selectedDayTextColor: theme.colors.primary,
          todayTextColor: theme.colors.secondary,
          dayTextColor: theme.colors.primary,
        }}
        markedDates={markedDates}
        onDayPress={(day: any) => {
          onSelectDay(day);
        }}
      />
      {selectedDate?.map((i) => (
        <View
          key={i._id}
          style={{ width: "100%", alignItems: "center", padding: 15 }}
        >
          <Text>
            {i?.title} {i?.date.split("T")[1].slice(0, 5)}
          </Text>
          <Text>{i?.title}</Text>
        </View>
      ))}

      <DateTimePickerExample />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Planner;
