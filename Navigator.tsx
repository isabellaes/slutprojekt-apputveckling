import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Settings from "./screens/Settings";
import Planner from "./screens/Planner";
import Lists from "./screens/Lists";
import Moodtracker from "./screens/Moodtracker";
import TimerScreen from "./screens/Timer";

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Planner: undefined;
  Lists: undefined;
  Moodtracker: undefined;
  Timer: undefined;
};

const Drawer = createDrawerNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
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