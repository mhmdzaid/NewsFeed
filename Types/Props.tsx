import { StackNavigationProp } from "@react-navigation/stack";
import { FeedModel } from "../Model/NewsModel";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
export type RootStackParamList = {
  HomeScreen: undefined;
  Details: { item: FeedModel };
  Settings: undefined;
};
export type Props = {
  navigation: NativeStackScreenProps<RootStackParamList, "HomeScreen"> & {
    navigate: (screen: keyof RootStackParamList, params?: any) => void;
  };
};
