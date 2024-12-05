import { View, Text, StyleSheet } from "react-native";

type CardProps = {
  title: string;
  description: string;
  time: string;
};

const Card = (props: CardProps) => {
  return (
    <View style={styles.container}>
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
