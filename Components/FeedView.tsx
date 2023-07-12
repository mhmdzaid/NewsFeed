import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useWindowDimensions } from "react-native";
import { FeedModel } from "../Model/NewsModel";
import { Props } from "../Types/Props";
import { useDisplayMode } from "../Contexts/DisplayModeContext";
type FeedViewProps = {
  item: FeedModel;
  navigation: Props["navigation"];
};

const FeedView = ({ item, navigation }: FeedViewProps) => {
  const { colors } = useDisplayMode();
  const { width, height } = useWindowDimensions();
  const navigateToFeedDetailsHandler = () => {
    navigation.navigate("Details", { item });
  };

  const image = item.urlToImage ? (
    <Image style={styles.imageView} source={{ uri: item.urlToImage }} />
  ) : (
    <Image
      style={styles.imageView}
      source={require("../assets/placeholder.png")}
    />
  );
  return (
    <View
      key={Math.random()}
      style={[
        styles.containerView,
        { height: height * 0.3 },
        { shadowColor: colors.textColor },
        { backgroundColor: colors.bgColor },
      ]}
    >
      <Pressable onPress={navigateToFeedDetailsHandler}>
        <View
          style={[styles.feedView, { backgroundColor: colors.cardBGColor }]}
        >
          {image}
          <Text
            numberOfLines={2}
            style={[styles.title, { color: colors.cardTitleColor }]}
          >
            {item.title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    margin: 16,
    flex: 1,
    overflow: "visible",
    elevation: 2,
    shadowOffset: { width: -1, height: -1 },
    shadowRadius: 3,
    shadowOpacity: 0.4,
    borderRadius: 16,
  },
  feedView: {
    borderRadius: 16,
    overflow: "hidden",
  },
  imageView: {
    height: 180,
  },
  title: {
    fontFamily: "Anton-Regular",
    fontSize: 17,
    padding: 16,
    marginBottom: 10,
  },
});

export default FeedView;
