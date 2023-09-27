import React from 'react';
import {Pressable, View} from 'react-native';
import {styles} from './styles';
import SvgLoader from '../svgloader';
import {ChevronLeft} from '../../assets/svg/ChevronLeft';
import CustomText from '../customtext';
import {IHeader} from './Header.types';

const Header = ({
  hasBackBtn,
  title,
  rightComponent,
  style,
  onBackPressed,
  ...rest
}: IHeader) => {
  return (
    <View style={[styles.container, style]} {...rest}>
      {hasBackBtn && (
        <Pressable onPress={onBackPressed} style={styles.backBtnContainer}>
          <SvgLoader xml={ChevronLeft()} width={10} height={10} />
        </Pressable>
      )}
      <View style={styles.titleContainer}>
        <CustomText type="bold" style={styles.title}>
          {title}
        </CustomText>
      </View>
      {hasBackBtn && (
        <View style={styles.rightComponentContainer}>{rightComponent}</View>
      )}
    </View>
  );
};

export default Header;
