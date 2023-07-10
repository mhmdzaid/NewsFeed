import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { TabsNavigator } from "./Components/TabsNavigator";
import LoadingSpinner from "./utilities/LoadingSpinner";
export default function App() {
  const [loaded] = useFonts({
    "Anton-Regular": require("./assets/fonts/Anton-Regular.ttf"),
  });

  if (!loaded) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loading}>
          <LoadingSpinner/>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
