import { View, StyleSheet } from "react-native";
import { useTheme, Text } from "react-native-paper";

type CardProps = {
  title: string;
  description: string;
  time: string;
};

const Card = (props: CardProps) => {
  const theme = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text>{props.title}</Text>
      <Text>{props.time}</Text>
      <Text>{props.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
  },
});

export default Card;
