import React from 'react';
import {ISearchbar} from './ISearchbar.types';
import {TextInput, View} from 'react-native';
import {styles} from './styles';
import SvgLoader from '../svgloader';
import {SearchIcon} from '../../assets/svg/Search';
import {colors} from '../../assets/colors';

const SearchBar = ({containerStyle, style, ...rest}: ISearchbar) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <SvgLoader xml={SearchIcon()} width={16} height={16} />
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={colors.textGrey}
        {...rest}
      />
    </View>
  );
};

export default SearchBar;
