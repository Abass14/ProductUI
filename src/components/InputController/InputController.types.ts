import {ViewProps} from 'react-native-svg/lib/typescript/fabric/utils';

export interface IInputController extends ViewProps {
  onAdd?: () => void;
  onRemove?: () => void;
  orientation?: 'vertical' | 'horizontal';
}
