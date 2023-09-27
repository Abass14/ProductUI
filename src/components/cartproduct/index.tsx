import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';
import {ICartProduct} from './CartPage.types';
import CustomText from '../customtext';
import SvgLoader from '../svgloader';
import {Delete} from '../../assets/svg/Delete';
import InputController from '../InputController';

const CartProduct = ({product}: ICartProduct) => {
  return (
    <View style={styles.container}>
      <Image source={product.images[0]} style={styles.image} />
      <View style={styles.details}>
        <CustomText numberOfLines={1} style={styles.text}>
          {product.productName}{' '}
          {product.alternativeName && (
            <CustomText style={styles.grey}>
              ({product.alternativeName})
            </CustomText>
          )}
        </CustomText>
        <CustomText style={styles.red}>
          {product.currency}
          {product.price}
        </CustomText>
        <SvgLoader xml={Delete()} />
      </View>
      <InputController orientation="vertical" />
    </View>
  );
};

export default CartProduct;
