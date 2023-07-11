import { Settings, Text, Switch, View, StyleSheet } from "react-native";
import Colors from "../assets/Colors";
import LanguageSwitcher from "../utilities/LanguageSwitcher";
import i18n from "../Localization/Strings";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../Contexts/LanguageContext";
const SettingsScreen = () => {
  const { t } = useTranslation();
  const {language, changeLanguage} = useLanguage();
  const changeLanguageHandler = (value: Boolean) => {
    console.log(value);
    const langCode = value ? "it" : "en"
    i18n.changeLanguage(langCode);
  };

  return (
    <View>
      <View style={styles.contaier}>
        <Text style={styles.label}>{t('changeLang')} </Text>
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
