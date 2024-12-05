import { Text, View, StyleSheet } from "react-native";

const Moodtracker = () => {
  return (
    <View style={styles.container}>
      <Text>Moodtracker screen</Text>
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
});
export default Moodtracker;
