import { ReactElement, ReactNode } from "react";
import { Surface } from "react-native-paper";
import { StyleSheet } from "react-native";

const Container = ({ children }: any) => {
  return (
    <Surface style={styles.surface} elevation={3}>
      {children}
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 200,
    width: 400,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default Container;
