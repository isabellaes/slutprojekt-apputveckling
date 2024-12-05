import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import useTimer from "easytimer-react-hook";

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

  return (
    <View style={styles.container}>
      <Text>Timer</Text>
      <Text>FOKUS TIMER</Text>
      <View style={styles.circle}>
        <Text>{timer.getTimeValues().toString()}</Text>
      </View>
      <Button mode="contained" onPress={() => timer.start()}>
        Starta
      </Button>
      <Button mode="contained" onPress={() => timer.stop()}>
        Stoppa
      </Button>

      <Text>PAUS TIMER</Text>
      <View style={styles.circle}>
        <Text>{timer2.getTimeValues().toString()}</Text>
      </View>
      <Button mode="contained" onPress={() => timer2.start()}>
        Starta
      </Button>
      <Button mode="contained" onPress={() => timer2.stop()}>
        Stoppa
      </Button>
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
