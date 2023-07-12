import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { DetailsScreenProps } from "../Types/DetailsScreenProps";
import { useDisplayMode } from "../Contexts/DisplayModeContext";
import { allColors } from "../assets/Colors";
const FeedDetailsScreen = ({ route, navigation }: DetailsScreenProps) => {
  const { item } = route.params;
  const { height } = useWindowDimensions();
  const { colors } = useDisplayMode();
  return (
    <ScrollView style={{ backgroundColor: colors.bgColor }}>
      <View
        style={StyleSheet.compose(styles.containerView, {
          backgroundColor: colors.bgColor,
        })}
      >
        <Image
          source={{ uri: item.urlToImage }}
          style={{ height: height * 0.3 }}
        />
        <Text
          style={StyleSheet.compose(styles.title, { color: colors.textColor })}
        >
          {" "}
          {item.title}{" "}
        </Text>
        <Text
          style={StyleSheet.compose(styles.desc, { color: colors.textColor })}
        >
          {" "}
          {item.description}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1
  },
  title: {
    fontFamily: "Anton-Regular",
    fontSize: 18,
    color: allColors.light.textColor,
    margin: 16,
  },
  desc: {
    margin: 16,
    marginTop: 0,
    fontSize: 14,
  },
});
export default FeedDetailsScreen;
