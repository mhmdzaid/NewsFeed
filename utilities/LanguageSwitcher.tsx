import { Text, Switch, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useLanguage } from "../Contexts/LanguageContext";
import i18n from "../Localization/Strings";
import { useDisplayMode } from "../Contexts/DisplayModeContext";
type LangSwitcherProps = {
  firstLang: string;
  secondLang: string;
};

const LanguageSwitcher = ({
  firstLang,
  secondLang
}: LangSwitcherProps) => {
  const [lang, setLang] = useState(false);
  const {colors} =  useDisplayMode();
  const { language, changeLanguage } = useLanguage();
  const onChangeHandler = () => {
    setLang((prevLang) => !prevLang);
  };

  const changeLanguageHandler = () => {
    const langCode = lang ? "it" : "en"
    i18n.changeLanguage(langCode);
    changeLanguage(langCode);
  };
  useEffect(changeLanguageHandler,[lang])

  return (
    <View style={styles.languageSwitch}>
      <Text style={[styles.firstLabel,{color: colors.textColor}]}>{firstLang}</Text>
      <Switch value={lang} onChange={onChangeHandler} />
      <Text style={[styles.secondLabel,{color: colors.textColor}]}>{secondLang}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  languageSwitch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
  },
  firstLabel: {
    width: 20,
  },
  secondLabel: {
    width: 20,
  },
});

export default LanguageSwitcher;
