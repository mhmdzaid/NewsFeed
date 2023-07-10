import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";
import FeedDetailsScreen from "./FeedDetailsScreen";
import Colors from "../assets/Colors";
import { NewsModel, FeedModel } from "../Model/NewsModel";
import FeedView from "./FeedView";
import { HomeScreenProps } from "../Model/HomeScreenProps";

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [newsLoaded, setNewsLoaded] = useState(false);
  const [news, setNews] = useState<Array<FeedModel>>([]);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?category=technology&language=en&apikey=7ac2d2b17b574131a5d0a05bc59bd807"
      );
      const data: NewsModel = await response.json();
      console.log(data.status);
      setNews(data.articles);
      setNewsLoaded(true);
    } catch (error) {
      console.log("---------------- Error -----------");
      console.log(error);
    }
  };

  useEffect(() => {
    const cleanUp = async () => {
      await fetchNews();
    };
    cleanUp();
  }, []);

  if (!newsLoaded) {
    return <Text style={styles.loadingText}> Loading ...</Text>;
  }
  return (
    <View style={styles.containerView}>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <FeedView navigation={navigation} item={item} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  containerView: {
    marginTop: 30,
    flex: 1,
    backgroundColor: Colors.bgColor,
  },
  loadingText: {
    fontFamily: "Anton-Regular",
    fontSize: 15,
    color: Colors.middleColor,
  },
});
export default HomeScreen;
