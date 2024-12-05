import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Switch } from "react-native-paper";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>Inställningar</Text>

      <ScrollView contentContainerStyle={{ gap: 10 }}>
        <View style={styles.box}>
          <Text>Hemskärm</Text>
          <View style={styles.switchBox}>
            <Text>Visa planner</Text>
            <Switch />
          </View>
          <View style={styles.switchBox}>
            <Text>Visa senaste lista</Text>
            <Switch />
          </View>
          <View style={styles.switchBox}>
            <Text>Visa moodtracker</Text>
            <Switch />
          </View>
        </View>
        <View style={styles.box}>
          <Text>Tema</Text>
          <View style={styles.switchBox}>
            <Text>Light</Text>
            <Switch />
          </View>
        </View>
        <View style={styles.box}>
          <Text>Notiser</Text>
          <View style={styles.switchBox}>
            <Text>Slå på notiser</Text>
            <Switch />
          </View>
        </View>
      </ScrollView>
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
  switchBox: {
    minWidth: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Settings;
