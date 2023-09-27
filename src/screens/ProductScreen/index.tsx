import React from 'react';
import Container from '../../components/container';
import ProductCarousel from '../../components/productcarousel';
import {styles} from './styles';
import {View} from 'react-native';
import CustomText from '../../components/customtext';
import CollapsableText from '../../components/collapsabletext';
import ProductAttribute from '../../components/productatrribute';
import InputController from '../../components/InputController';
import Button from '../../components/button';
import {Route, useNavigation, useRoute} from '@react-navigation/core';
import {IProduct} from '../../components/productcard/ProductCard.types';

const ProductScreen = () => {
  const {goBack} = useNavigation();
  const {params} = useRoute() as Route<'ProductDetails', {product: IProduct}>;
  const {product} = params;
  const {productName, price, images, alternativeName, currency, attributes} =
    product;
  return (
    <Container
      headerProps={{
        hasBackBtn: true,
        onBackPressed: () => goBack(),
      }}
      isScrollable>
      <View style={styles.container}>
        <ProductCarousel images={images} style={styles.carouselView} />
        <View style={styles.productDeatils}>
          <CustomText style={styles.text}>
            {productName} {alternativeName ? `(${alternativeName})` : ''}
          </CustomText>
          <CustomText style={styles.price}>
            {currency}
            {price}
          </CustomText>
        </View>
        <CollapsableText>
          Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are
          made from yeast dough, shaped into balls and deep-fried until golden
          brown. It has a doughnut-like texture but slightly o Rare Eat Puff
          Puff Mix can be made into a deep-fried dough. They are made from yeast
          dough, shaped into balls and deep-fried until golden brown. It has a
          doughnut-like texture but slightly o Rare Eat Puff Puff Mix can be
          made into a deep-fried dough. They are made from yeast dough, shaped
          into balls and deep-fried until golden brown. It has a doughnut-like
          texture but slightly o Rare Eat Puff Puff Mix can be made into a
          deep-fried dough. They are made from yeast dough, shaped into balls
          and deep-fried until golden brown. It has a doughnut-like texture but
          slightly o
        </CollapsableText>
        <View style={styles.attributesContainer}>
          {attributes.map((attr, index) => (
            <View key={attr} style={styles.row}>
              <ProductAttribute attribute={attr} />
              {index !== attributes.length - 1 && (
                <View style={styles.divider} />
              )}
            </View>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <InputController />
          <Button label="Add to cart" />
          <Button
            label="Subscribe to a Plan"
            style={styles.subscribeBtn}
            labelStyles={styles.subscribe}
          />
        </View>
      </View>
    </Container>
  );
};

export default ProductScreen;
