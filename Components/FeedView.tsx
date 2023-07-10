import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useWindowDimensions } from "react-native";
import { FeedModel } from "../Model/NewsModel";
import { HomeScreenProps } from "../Model/HomeScreenProps";
import Colors from "../assets/Colors";
import { white } from "react-native-paper/lib/typescript/src/styles/themes/v2/colors";

type FeedViewProps = {
  item: FeedModel;
  navigation: HomeScreenProps["navigation"];
};

const FeedView = ({ item, navigation }: FeedViewProps) => {
  const { width, height } = useWindowDimensions();
  const navigateToFeedDetailsHandler = () => {
    navigation.navigate("Details", { item });
  };
  return (
    <View
      key={Math.random()}
      style={[styles.containerView, { height: height * 0.3 }]}
    >
      <Pressable onPress={navigateToFeedDetailsHandler}>
        <View style={styles.feedView}>
          <Image style={styles.imageView} source={{ uri: item.urlToImage }} />
          <Text numberOfLines={2} style={styles.title}>
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
    shadowColor: Colors.aggresiveCardBGColor,
    shadowOffset: { width: -1, height: -1 },
    shadowRadius: 3,
    shadowOpacity: 0.4,
    backgroundColor:  Colors.aggresiveCardBGColor,
    borderRadius:16
  },
  feedView: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: Colors.aggresiveCardBGColor,
  },
  imageView: {
    height: 180,
  },
  title: {
    fontFamily: "Anton-Regular",
    fontSize: 17,
    color: "#FFFFFF",
    padding: 16,
    marginBottom: 10,
  },
});

export default FeedView;
