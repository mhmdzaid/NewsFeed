import { Text, Switch, View, StyleSheet } from "react-native";
import { useState } from "react";
type LangSwitcherProps = {
  firstLang: string;
  secondLang: string;
  onChange: (value: Boolean) => void;
};

const LanguageSwitcher = ({
  firstLang,
  secondLang,
  onChange,
}: LangSwitcherProps) => {
  const [lang, setLang] = useState(false);
  const onChangeHandler = () => {
    setLang((prevLang) => {
      onChange(!prevLang);
      return !prevLang;
    });
  };
  return (
    <View style={styles.languageSwitch}>
      <Text style={styles.englishLabel}>{firstLang}</Text>
      <Switch value={lang} onChange={onChangeHandler} />
      <Text style={styles.italianLabel}>{secondLang}</Text>
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
  englishLabel: {
    width: 20,
  },
  italianLabel: {
    width: 20,
  },
});

export default LanguageSwitcher;
