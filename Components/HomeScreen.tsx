import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  RefreshControl,
} from "react-native";
import { useState, useEffect } from "react";
import FeedDetailsScreen from "./FeedDetailsScreen";
import Colors from "../assets/Colors";
import { NewsModel, FeedModel } from "../Model/NewsModel";
import FeedView from "./FeedView";
import { HomeScreenProps } from "../Model/HomeScreenProps";
import LoadingSpinner from "../utilities/LoadingSpinner";
import CustomTextInput from "../utilities/CustomTextInput";

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  // states

  const [newsLoaded, setNewsLoaded] = useState(false);
  const [news, setNews] = useState<Array<FeedModel>>([]);
  const [searchText, setSearchText] = useState("");
  const [filteredFeed, setFilteredFeed] = useState<Array<FeedModel>>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // fetching news

  useEffect(() => {
    const cleanUp = async () => {
      await fetchNews();
    };
    cleanUp();
  }, [isRefreshing]);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?category=technology&language=en&apikey=7ac2d2b17b574131a5d0a05bc59bd807"
      );
      const data: NewsModel = await response.json();
      console.log(data.status);
      setNews(data.articles);
      setFilteredFeed(() => {
        return data.articles.filter((item) => item.title.includes(searchText));
      });
      setNewsLoaded(true);
    } catch (error) {
      console.log("---------------- Error -----------");
      console.log(error);
    }
  };

  // prop functions

  const onChangeSearchText = (newText: string) => {
    setSearchText(newText);
    if (newText === "") {
      setFilteredFeed(news);
      return;
    }
    setFilteredFeed(() => {
      return news.filter((item) => item.title.includes(newText));
    });
  };

  const onRefreshingList = async () => {
    setIsRefreshing(true);
    await fetchNews();
    setIsRefreshing(false);
  };

  // JSX elements

  if (!newsLoaded) {
    return <LoadingSpinner />;
  }

  const notFoundText = (
    <Text style={styles.notFoundText}>
      Sorry, we couldn't find any news articles that match your search. Please
      try a different search term.
    </Text>
  );

  const feedList = (
    <FlatList
      data={filteredFeed}
      renderItem={({ item }) => (
        <FeedView navigation={navigation} item={item} />
      )}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefreshingList}
        />
      }
    />
  );

  return (
    <View style={styles.containerView}>
      <CustomTextInput value={searchText} onChangeText={onChangeSearchText} />
      {filteredFeed.length === 0 ? notFoundText : feedList}
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
  notFoundText: {
    padding: 16,
    fontSize: 13,
    color: Colors.aggresiveCardBGColor,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default HomeScreen;
