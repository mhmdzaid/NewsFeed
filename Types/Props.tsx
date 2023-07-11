import { StackNavigationProp } from "@react-navigation/stack";
import { FeedModel } from "../Model/NewsModel";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
export type RootStackParamList = {
  News: undefined;
  Details: { item: FeedModel };
  Settings: undefined;
};
export type Props = {
  navigation: NativeStackScreenProps<RootStackParamList, "News"> & {
    navigate: (screen: keyof RootStackParamList, params?: any) => void;
  };
};
