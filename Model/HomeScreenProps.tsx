import { StackNavigationProp } from '@react-navigation/stack';
import { FeedModel } from './NewsModel';

type RootStackParamList = {
  HomeScreen: undefined;
  Details: { item: FeedModel };
  Settings: undefined;
};

export type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'HomeScreen'>;
};
