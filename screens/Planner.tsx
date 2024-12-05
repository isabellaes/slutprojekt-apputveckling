import { Text, View, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
type Item = {
  id: string;
  title: string;
  date: Date;
};
const Planner = () => {
  const [selectedDate, setSelectedDate] = useState<Item>();
  const [markedDates, setMarkedDates] = useState<{ [key: string]: any }>({});
  const data = useSelector<RootState>((state) => state.planner.items) as Item[];

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
    <View style={styles.container}>
      <Calendar
        style={{
          borderWidth: 1,
          borderColor: "gray",
          height: 350,
        }}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: "blue",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#dd99ee",
        }}
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

export default Planner;
