import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "./Navigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Navigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
