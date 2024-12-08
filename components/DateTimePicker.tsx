import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import {
  Text,
  Button,
  Modal,
  Portal,
  useTheme,
  TextInput,
} from "react-native-paper";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { Item } from "../utils/Types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addItem } from "../redux/plannerSlice";

export const DateTimePickerExample = () => {
  const [date, setDate] = useState(new Date());
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  function saveActivity() {
    const item: Item = {
      id: "124lsdl",
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
          style={{ padding: 5, backgroundColor: theme.colors.background }}
          visible={visible}
          onDismiss={() => setVisible(false)}
        >
          <Text>{date.toISOString()}</Text>
          <TextInput
            style={{ width: 200, marginBottom: 5 }}
            label={"Titel Lista"}
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
        </Modal>
      </Portal>
      <Button onPress={() => setVisible(true)}>Lägg till ny händelse</Button>
    </SafeAreaView>
  );
};
