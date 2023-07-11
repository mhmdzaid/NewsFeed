import { Settings, Text, Switch, View, StyleSheet } from "react-native";
import Colors from "../assets/Colors";
import LanguageSwitcher from "../utilities/LanguageSwitcher";

const SettingsScreen = () => {
  const changeLanguageHandler = (value: Boolean) => {
    console.log(value);
    // do localization here 
  };

  return (
    <View>
      <View style={styles.contaier}>
        <Text style={styles.label}> Change language </Text>
        <LanguageSwitcher
          firstLang="En"
          secondLang="It"
          onChange={changeLanguageHandler}
        />
      </View>
      <View style={styles.verticalLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    flex: 2,
    fontWeight: "bold",
  },
  contaier: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
  },
  verticalLine: {
    height: 1,
    backgroundColor: Colors.middleColor,
  },
});

export default SettingsScreen;
