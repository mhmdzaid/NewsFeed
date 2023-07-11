import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StackNavigator } from "./Components/TabsNavigator";
import LoadingSpinner from "./utilities/LoadingSpinner";
import i18n from "./Localization/Strings";
import { LanguageProvider } from "./Contexts/LanguageContext";

export default function App() {
  const [loaded] = useFonts({
    "Anton-Regular": require("./assets/fonts/Anton-Regular.ttf"),
  });
  i18n.loadResources();
  if (!loaded) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loading}>
          <LoadingSpinner />
        </View>
      </SafeAreaView>
    );
  }
  return (
    <LanguageProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </LanguageProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
