import { Avatar, useTheme } from "react-native-paper";
import mapImages from "../utils/imageMapper";
import { View } from "react-native";

type MoodAvatarProps = {
  img: string;
  selected: boolean;
};

const MoodAvatar = (props: MoodAvatarProps) => {
  const theme = useTheme();
  return (
    <View
      style={{
        borderRadius: "50%",
        borderColor: props.selected
          ? theme.colors.primary
          : theme.colors.background,
        borderWidth: 2,
      }}
    >
      <Avatar.Image
        style={{
          backgroundColor: theme.colors.background,
        }}
        size={50}
        source={mapImages[props.img]}
      />
    </View>
  );
};

export default MoodAvatar;
