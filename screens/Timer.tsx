import { View, StyleSheet } from "react-native";
import { Button, Snackbar, useTheme, Text } from "react-native-paper";
import useTimer from "easytimer-react-hook";
import { useEffect, useState } from "react";

const TimerScreen = () => {
  const [timer] = useTimer({
    startValues: {
      minutes: 20,
      seconds: 0,
      secondTenths: 0,
    },
    countdown: true,
  });

  const [timer2] = useTimer({
    startValues: {
      minutes: 5,
      seconds: 0,
      secondTenths: 0,
    },
    countdown: true,
  });

  const [visible, setVisible] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    if (
      timer.getTimeValues().minutes == 0 &&
      timer.getTimeValues().seconds == 0
    )
      setVisible(true);
  });

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text variant="titleMedium">FOKUS TIMER</Text>
      <View style={styles.circle}>
        <Text>{timer.getTimeValues().toString()}</Text>
      </View>
      <Button onPress={() => timer.start()}>Starta</Button>
      <Button onPress={() => timer.stop()}>Stoppa</Button>

      <Text variant="titleMedium">PAUS TIMER</Text>
      <View style={styles.circle}>
        <Text>{timer2.getTimeValues().toString()}</Text>
      </View>
      <Button onPress={() => timer2.start()}>Starta</Button>
      <Button onPress={() => timer2.stop()}>Stoppa</Button>

      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        action={{
          label: "Undo",
          onPress: () => {
            // Do something
          },
        }}
      >
        Hey there! Times up!!
      </Snackbar>
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
  circle: {
    width: 150,
    height: 150,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TimerScreen;
