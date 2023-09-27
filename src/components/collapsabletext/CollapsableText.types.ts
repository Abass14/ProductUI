import {TextProps} from 'react-native';

export interface ICollapsableText extends TextProps {
  onReadMore?: () => void;
}
