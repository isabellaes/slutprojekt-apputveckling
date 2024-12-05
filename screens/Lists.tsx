import { View, StyleSheet, ScrollView } from "react-native";
import { FAB } from "react-native-paper";
import { Surface, Text } from "react-native-paper";
import { Checkbox } from "react-native-paper";

const Lists = () => {
  return (
    <View style={styles.container}>
      <Text>Mina listor</Text>
      <ScrollView>
        <View style={styles.list}>
          <Text>Checklista Städ</Text>
          <View style={styles.listItem}>
            <Text>Damma</Text>
            <Checkbox status={"checked"} />
          </View>
          <View style={styles.listItem}>
            <Text>Moppa</Text>
            <Checkbox status={"checked"} />
          </View>
          <View style={styles.listItem}>
            <Text>Städa kök</Text>
            <Checkbox status={"checked"} />
          </View>
          <View style={styles.listItem}>
            <Text>Städa toalett</Text>
            <Checkbox status={"checked"} />
          </View>
          <View style={styles.listItem}>
            <Text>Dammsuga</Text>
            <Checkbox status={"checked"} />
          </View>
        </View>
        <View style={styles.list}>
          <Text>Checklista Morgonrutiner</Text>
          <View style={styles.listItem}>
            <Text>Mata katterna</Text>
            <Checkbox status={"checked"} />
          </View>
          <View style={styles.listItem}>
            <Text>Äta frukost</Text>
            <Checkbox status={"checked"} />
          </View>
          <View style={styles.listItem}>
            <Text>Ta mediciner</Text>
            <Checkbox status={"checked"} />
          </View>
          <View style={styles.listItem}>
            <Text>Plocka ur diskmaskinen</Text>
            <Checkbox status={"checked"} />
          </View>
          <View style={styles.listItem}>
            <Text>Borsta tänderna</Text>
            <Checkbox status={"checked"} />
          </View>
        </View>
      </ScrollView>
      <FAB
        icon="plus"
        style={styles.fab}
        color="green"
        onPress={() => console.log("Pressed")}
      />
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
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  listItem: {
    minWidth: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  list: {
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

export default Lists;
