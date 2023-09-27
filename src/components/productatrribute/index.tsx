import React from 'react';
import {IProductAttribute} from './ProductAtrribute.types';
import {Pressable} from 'react-native';
import {styles} from './styles';
import CustomText from '../customtext';
import SvgLoader from '../svgloader';
import {ChevronDown} from '../../assets/svg/ChevronDown';

const ProductAttribute = ({attribute, ...rest}: IProductAttribute) => {
  return (
    <Pressable style={styles.container} {...rest}>
      <CustomText style={styles.text}>{attribute}</CustomText>
      <SvgLoader xml={ChevronDown} width={10} height={10} />
    </Pressable>
  );
};

export default ProductAttribute;
