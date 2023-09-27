import {StyleProp, TextInputProps, ViewStyle} from 'react-native';

export interface ISearchbar extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
}
