import { View, StyleSheet } from "react-native";
import { useTheme, Text } from "react-native-paper";

const Moodtracker = () => {
  const theme = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text>Moodtracker screen</Text>
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
export default Moodtracker;
