import {TextProps} from 'react-native';

export interface ICustomText extends TextProps {
  type?: 'bold' | 'medium' | 'light';
}
