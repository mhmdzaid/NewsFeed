import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    useWindowDimensions,
  } from "react-native";
  import { DetailsScreenProps } from "../Types/DetailsScreenProps";
import Colors from "../assets/Colors";
  const FeedDetailsScreen = ({ route, navigation }: DetailsScreenProps) => {
    const { item } = route.params;
    const { height } = useWindowDimensions();
  
    return (
      <ScrollView style = {{backgroundColor: Colors.bgColor}}>
        <View style={styles.containerView}>
          <Image source={{ uri: item.urlToImage }} style={{ height: height * 0.3 }} />
          <Text style={styles.title}> {item.title} </Text>
          <Text style={styles.desc}> {item.description}</Text>
        </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    containerView: {
      backgroundColor: Colors.bgColor,
      flex: 1
    },
    title: {
      fontFamily: "Anton-Regular",
      fontSize: 18,
      color: Colors.aggresiveCardBGColor,
      margin: 16,
    },
    desc: {
      margin: 16,
      marginTop: 0,
      fontSize: 14,
      
    }
  });
  export default FeedDetailsScreen;
  