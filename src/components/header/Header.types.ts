import React from 'react';
import {ViewProps} from 'react-native';

export interface IHeader extends ViewProps {
  hasBackBtn?: boolean;
  title?: string;
  rightComponent?: React.ReactNode;
  onBackPressed?: () => void;
}
