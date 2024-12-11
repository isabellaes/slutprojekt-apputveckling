import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Settings from "../screens/Settings";
import Planner from "../screens/Planner";
import Lists from "../screens/Lists";
import Moodtracker from "../screens/Moodtracker";
import TimerScreen from "../screens/Timer";
import { useTheme, adaptNavigationTheme } from "react-native-paper";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { useEffect } from "react";
import { fetchLists } from "../redux/ListSlice";
import { fetchMoods } from "../redux/MoodSlice";
import { fetchItems } from "../redux/plannerSlice";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export type RootStackParamList = {
  Hem: undefined;
  Inställningar: undefined;
  Kalender: undefined;
  Listor: undefined;
  Moodtracker: undefined;
  Timer: undefined;
};

const Drawer = createDrawerNavigator<RootStackParamList>();

const Navigator = () => {
  const theme = useTheme();
  const { LightTheme } = adaptNavigationTheme({
    reactNavigationLight: DefaultTheme,
  });
  const { DarkTheme } = adaptNavigationTheme({
    reactNavigationDark: DefaultTheme,
  });

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchLists());
    dispatch(fetchMoods());
  }, [dispatch]);

  return (
    <NavigationContainer theme={theme.dark ? DarkTheme : LightTheme}>
      <Drawer.Navigator screenOptions={{}}>
        <Drawer.Screen
          name="Hem"
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
          component={Home}
        />
        <Drawer.Screen
          name="Inställningar"
          component={Settings}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Kalender"
          component={Planner}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="calendar-today" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Listor"
          component={Lists}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Moodtracker"
          component={Moodtracker}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="happy-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Timer"
          component={TimerScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="timer-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
