import { ReactNode } from "react";
import { View, ViewStyle } from "react-native";

type StyleProviderProps = {
  children: ReactNode;
  stylesheet: ViewStyle;
};

const StyleProvider = (props: StyleProviderProps) => {
  return <View style={props.stylesheet}>{props.children}</View>;
};

export default StyleProvider;
