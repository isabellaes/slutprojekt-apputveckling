import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "./navigation/Navigator";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import StyleProvider from "./StyleProvider";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <StyleProvider>
          <Navigator />
        </StyleProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
