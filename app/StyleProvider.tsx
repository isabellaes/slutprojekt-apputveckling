import { ReactNode } from "react";
import { PaperProvider, MD3LightTheme, MD3DarkTheme } from "react-native-paper";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

type StyleProviderProps = {
  children: ReactNode;
};

const StyleProvider = (props: StyleProviderProps) => {
  const [darkMode, setDarkmode] = useState(false);
  const theme = useSelector<RootState>(
    (state) => state.settings.theme.dark
  ) as boolean;

  useEffect(() => {
    setDarkmode(theme);
  }, [theme]);

  return (
    <PaperProvider theme={darkMode ? MD3DarkTheme : MD3LightTheme}>
      {props.children}
    </PaperProvider>
  );
};

export default StyleProvider;
