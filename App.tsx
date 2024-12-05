import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "./Navigator";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PaperProvider>
          <Navigator />
        </PaperProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
