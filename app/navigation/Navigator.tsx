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

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Planner: undefined;
  Lists: undefined;
  Moodtracker: undefined;
  Timer: undefined;
  CreateNewList: undefined;
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
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Planner" component={Planner} />
        <Drawer.Screen name="Lists" component={Lists} />
        <Drawer.Screen name="Moodtracker" component={Moodtracker} />
        <Drawer.Screen name="Timer" component={TimerScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
