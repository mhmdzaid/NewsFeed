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
  const feedImage = item.urlToImage ? (
    <Image source={{ uri: item.urlToImage }} style={{ height: height * 0.3 }} />
  ) : (
    <Image
      style={{ height: height * 0.3 }}
      source={require("../assets/placeholder.png")}
    />
  );
  return (
    <ScrollView style={{ backgroundColor: colors.bgColor }}>
      <View
        style={StyleSheet.compose(styles.containerView, {
          backgroundColor: colors.bgColor,
        })}
      >
        {feedImage}
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
        <Text style={styles.auth}>
          {" "}
          <Text style={styles.authLabel}>Author</Text>: {item.author}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
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
  authLabel: {
    fontWeight: "bold",
    fontSize: 12,
  },
  auth: {
    marginRight: 16,
    textAlign: "right",
    fontSize: 12,
  },
});
export default FeedDetailsScreen;
