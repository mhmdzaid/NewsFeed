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
import LoadingSpinner from "../utilities/LoadingSpinner";
import CustomTextInput from "../utilities/CustomTextInput";
import { Props } from "../Types/Props";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../Contexts/LanguageContext";
const HomeScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const {language} = useLanguage();
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
  }, [language]);

  const fetchNews = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?category=technology&language=${language}&apikey=7ac2d2b17b574131a5d0a05bc59bd807`
      console.log(url)
      const response = await fetch(url);
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
     {t('notFoundMsg')}
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
    flex: 1,
    backgroundColor: Colors.bgColor,
    height: 100
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
