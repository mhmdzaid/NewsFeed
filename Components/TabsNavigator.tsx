import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import FeedDetailsScreen from "./FeedDetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../assets/Colors";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "../Types/Props";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeParams" component={TabsNavigator} />
      <Stack.Screen name="Details" component={FeedDetailsScreen} />
    </Stack.Navigator>
  );
};

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: Colors.middleColor,
        tabBarActiveTintColor: Colors.aggresiveCardBGColor,
        tabBarStyle: {height: 90}
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="home"
              color={color}
              size={26}
              style={{ backgroundColor: "#FFFFFF" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
