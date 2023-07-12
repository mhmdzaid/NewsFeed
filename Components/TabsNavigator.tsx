import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import FeedDetailsScreen from "./FeedDetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "../Types/Props";
import { useTranslation } from "react-i18next";
import { useDisplayMode } from "../Contexts/DisplayModeContext";
import { ViewStyle } from "react-native";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  const { colors, mode } = useDisplayMode();
  const { t } = useTranslation();
  const newsTitle = t("news");
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: "",
        headerTitleStyle: {
          color: colors.textColor,
        },
        headerTintColor: colors.textColor,
        headerStyle: {
          backgroundColor: colors.bgColor
        }
      }}
    >
      <Stack.Screen name="News" component={TabsNavigator}/>
      <Stack.Screen name="Details" component={FeedDetailsScreen} />
    </Stack.Navigator>
  );
};

const TabsNavigator = () => {
  const { colors, mode } = useDisplayMode();
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colors.cardBGColor,
        tabBarActiveTintColor: colors.textColor,
        tabBarStyle: {
          backgroundColor: colors.bgColor,
          height: 90,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{
          tabBarLabel: t("news"),
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={mode == "light" ? "book" : "book-outline"}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsScreen}
        options={{
          tabBarLabel: t("settings"),
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
