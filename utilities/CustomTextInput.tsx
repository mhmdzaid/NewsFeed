import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState, useTransition } from "react";
import { useTranslation } from "react-i18next";
import { useDisplayMode } from "../Contexts/DisplayModeContext";
type CustomInputProps = { value: string , onChangeText: (text: string) => void } 

const CustomTextInput = ({value, onChangeText}: CustomInputProps) => {
  const {t} = useTranslation();
  const {colors} = useDisplayMode();
  return (
    <View style={[styles.inputContainer,{borderColor: colors.textColor}]}>
      <EvilIcons name="search" size={30} color={colors.textColor} />
      <TextInput
        style={[styles.input,{color: colors.textColor}]}
        onChangeText={onChangeText}
        value={value}
        placeholder= {t("searchPlaceHolder")}
        placeholderTextColor={colors.textColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 0.5,
    borderRadius: 16,
    margin: 16,
    height: 50,
  },
  input: {
    padding: 16,
  },
});
export default CustomTextInput;