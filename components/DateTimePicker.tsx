import React, { useState } from "react";
import { Pressable, SafeAreaView, View } from "react-native";
import {
  Text,
  Button,
  Modal,
  Portal,
  useTheme,
  TextInput,
  IconButton,
} from "react-native-paper";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { Item } from "../utils/Types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addItem } from "../redux/plannerSlice";
import { generateRandomId } from "../utils/getRandomId";

export const DateTimePickerExample = () => {
  const [date, setDate] = useState(new Date());
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  function saveActivity() {
    const item: Item = {
      id: generateRandomId(),
      title: title,
      date: date.toISOString(),
    };
    dispatch(addItem(item));
  }

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate;
    if (currentDate) setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const theme = useTheme();

  return (
    <SafeAreaView>
      <Portal>
        <Modal
          contentContainerStyle={{
            flex: 1,
          }}
          visible={visible}
          onDismiss={() => setVisible(false)}
        >
          <View
            style={{
              padding: 10,
              backgroundColor: theme.colors.background,
              gap: 10,
            }}
          >
            <IconButton icon={"close"} onPress={() => setVisible(false)} />

            <Text style={{ textAlign: "center" }}>
              Datum och tid: {date.toISOString().split("T")[0]}{" "}
              {date.toISOString().split("T")[1].substring(0, 5)}
            </Text>
            <TextInput
              label={"Titel"}
              onChangeText={(text) => setTitle(text)}
            />
            <Button onPress={() => showMode("date")}>Välj datum</Button>
            <Button onPress={() => showMode("time")}>Välj tid</Button>
            <Button
              onPress={() => {
                saveActivity();
                setVisible(false);
              }}
            >
              Spara
            </Button>
          </View>
        </Modal>
      </Portal>
      <Button onPress={() => setVisible(true)}>Lägg till ny händelse</Button>
    </SafeAreaView>
  );
};
