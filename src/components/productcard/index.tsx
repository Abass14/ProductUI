import React, {useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import {IProductCard} from './ProductCard.types';
import {styles} from './styles';
import SvgLoader from '../svgloader';
import {Favorite} from '../../assets/svg/Favorite';
import {colors} from '../../assets/colors';
import CustomText from '../customtext';
import Button from '../button';
import {CartIcon} from '../../assets/svg/Cart';

const ProductCard = ({
  style,
  onAddToCart,
  onFavorite,
  product,
  ...rest
}: IProductCard) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const favoriteStrokeColor = isFavorited
    ? colors.buttonRed
    : colors.textDarkGrey;
  const favoriteFillColor = isFavorited ? colors.buttonRed : 'transparent';
  return (
    <Pressable style={[styles.container, style]} {...rest}>
      <SvgLoader
        xml={Favorite(favoriteStrokeColor, favoriteFillColor)}
        onPress={() => {
          setIsFavorited(prev => !prev);
          if (onFavorite) {
            onFavorite();
          }
        }}
        style={styles.favoriteIcon}
      />
      <Image source={product.images[0]} style={styles.image} />
      <View style={styles.details}>
        <CustomText style={styles.productName} numberOfLines={1}>
          {product.productName}{' '}
          {product.alternativeName && (
            <CustomText style={styles.alternative}>
              (${product.alternativeName})
            </CustomText>
          )}
        </CustomText>
        <CustomText style={styles.productPrice}>
          {product.currency}
          {product.price}
        </CustomText>
      </View>
      <Button
        label="Add to cart"
        leftIcon={
          <SvgLoader xml={CartIcon(colors.white)} width={20} height={20} />
        }
        labelStyles={styles.btnText}
        style={styles.btn}
        onPress={() => {
          if (onAddToCart) {
            onAddToCart();
          }
        }}
      />
    </Pressable>
  );
};

export default ProductCard;
