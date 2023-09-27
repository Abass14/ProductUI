import {ViewProps} from 'react-native';
import {IHeader} from '../header/Header.types';

export interface IContainer extends ViewProps {
  isScrollable?: boolean;
  headerProps?: IHeader;
}
