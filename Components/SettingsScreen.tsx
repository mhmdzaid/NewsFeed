import { Text, Switch, View, StyleSheet } from "react-native";
import LanguageSwitcher from "../utilities/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useDisplayMode } from "../Contexts/DisplayModeContext";
const SettingsScreen = () => {
  const { colors, mode, changeMode } = useDisplayMode();
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const modeSwitchHandler = () => {
    setDarkMode((prevState) => !prevState);
  };

  const changeDisplayMode = () => {
    changeMode(darkMode ? "dark" : "light");
  };

  useEffect(changeDisplayMode, [darkMode]);

  return (
    <View style = {[styles.bg,{backgroundColor: colors.bgColor}]}>
      <View style={[styles.contaier, { backgroundColor: colors.bgColor }]}>
        <Text style={[styles.label, { color: colors.textColor }]}>
          {t("changeLang")}{" "}
        </Text>
        <LanguageSwitcher firstLang="En" secondLang="It" />
      </View>
      <View
        style={[
          styles.verticalLine,
          { backgroundColor: colors.separatorColor },
        ]}
      />
      <View style={styles.contaier}>
        <Text style={[styles.label, { color: colors.textColor }]}>
          {t("darkMode")}{" "}
        </Text>
        <Switch
          value={darkMode}
          onChange={modeSwitchHandler}
          style={styles.modeSwitch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg:{
    flex: 1
  },
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
  },
  modeSwitch: {
    marginRight: 40,
  },
});

export default SettingsScreen;
