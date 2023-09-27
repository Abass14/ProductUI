import React from 'react';
import {Text} from 'react-native';
import {ICustomText} from './CustomText.types';
import {stylles} from './styles';

const CustomText = ({
  type = 'medium',
  style,
  children,
  ...rest
}: ICustomText) => {
  const fontFamilyType = {
    light: 'Poppins-Light',
    medium: 'Poppins-Medium',
    bold: 'Poppins-Bold',
  };

  return (
    <Text
      style={[stylles.text, {fontFamily: fontFamilyType[type]}, style]}
      {...rest}>
      {children}
    </Text>
  );
};

export default CustomText;
