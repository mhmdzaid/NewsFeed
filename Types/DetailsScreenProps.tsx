import { Props } from "../Types/Props";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../Types/Props";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
type DetailsScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Details'>;
export type DetailsScreenProps = {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
};