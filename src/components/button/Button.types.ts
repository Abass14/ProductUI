import React from 'react';
import {PressableProps, StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface IButton extends Omit<PressableProps, 'style'> {
  leftIcon?: React.ReactNode;
  label: string;
  labelStyles?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}
