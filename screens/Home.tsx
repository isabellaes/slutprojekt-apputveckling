import { StyleSheet, Text, ScrollView, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Välkommen!</Text>
      <Text>Dagens datum och klockslag</Text>
      <ScrollView contentContainerStyle={{ gap: 10 }}>
        <View style={styles.box}>
          <Text>Idag</Text>
        </View>
        <View style={styles.box}>
          <Text>Imorgon</Text>
        </View>
        <View style={styles.box}>
          <Text>Listor</Text>
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
});

export default Home;
