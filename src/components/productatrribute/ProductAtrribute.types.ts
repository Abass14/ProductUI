import {PressableProps} from 'react-native';

export interface IProductAttribute extends Omit<PressableProps, 'style'> {
  attribute: string;
}
