import { View, StyleSheet, ScrollView } from "react-native";
import { Switch, Text, useTheme } from "react-native-paper";
import {
  changeHomeLists,
  changeHomeMoodtracker,
  changeHomePlanner,
  changeNotifications,
  changeTheme,
  SettingsState,
} from "../redux/SettingsSlice";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { useEffect, useState } from "react";
import { RootState } from "../redux/store";

const Settings = () => {
  const [settings, setSettings] = useState<SettingsState>();
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector<RootState>(
    (state) => state.settings
  ) as SettingsState;

  useEffect(() => {
    setSettings(data);
  });

  const theme = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text>Inställningar</Text>

      <ScrollView contentContainerStyle={{ gap: 10 }}>
        <View style={[styles.box, { borderColor: theme.colors.primary }]}>
          <Text>Hemskärm</Text>
          <View style={styles.switchBox}>
            <Text>Visa planner</Text>
            <Switch
              value={settings?.home.planner}
              onValueChange={() => {
                dispatch(changeHomePlanner(!settings?.home.planner));
              }}
            />
          </View>
          <View style={styles.switchBox}>
            <Text>Visa senaste lista</Text>
            <Switch
              value={settings?.home.lists}
              onValueChange={() => {
                dispatch(changeHomeLists(!settings?.home.lists));
              }}
            />
          </View>
          <View style={styles.switchBox}>
            <Text>Visa moodtracker</Text>
            <Switch
              value={settings?.home.moodtracker}
              onValueChange={() => {
                dispatch(changeHomeMoodtracker(!settings?.home.moodtracker));
              }}
            />
          </View>
        </View>
        <View style={[styles.box, { borderColor: theme.colors.primary }]}>
          <Text>Tema</Text>
          <View style={styles.switchBox}>
            <Text>Darkmode</Text>
            <Switch
              value={settings?.theme.dark}
              onValueChange={() => {
                dispatch(changeTheme(!settings?.theme.dark));
              }}
            />
          </View>
        </View>
        <View style={[styles.box, { borderColor: theme.colors.primary }]}>
          <Text>Notiser</Text>
          <View style={styles.switchBox}>
            <Text>Slå på notiser</Text>
            <Switch
              value={settings?.notifications}
              onValueChange={() => {
                dispatch(changeNotifications(!settings?.notifications));
              }}
            />
          </View>
        </View>
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
  switchBox: {
    minWidth: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Settings;
