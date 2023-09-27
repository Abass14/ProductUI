import React from 'react';
import {Pressable, View} from 'react-native';
import {styles} from './styles';
import {IButton} from './Button.types';
import CustomText from '../customtext';

const Button = ({label, leftIcon, labelStyles, style, ...rest}: IButton) => {
  return (
    <Pressable style={[styles.container, style]} {...rest}>
      {leftIcon}
      <View style={styles.labelContainer}>
        <CustomText style={[styles.label, labelStyles]}>{label}</CustomText>
      </View>
    </Pressable>
  );
};

export default Button;
