import React from 'react';
import Container from '../../components/container';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import {products} from '../../mock/products';
import CartProduct from '../../components/cartproduct';
import CustomText from '../../components/customtext';
import Button from '../../components/button';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';

const CartScreen = () => {
  const {goBack} = useNavigation() as StackNavigationProp<any, any>;
  const cartProducts = products.slice(0, 3);
  return (
    <Container
      headerProps={{
        title: 'Cart',
        hasBackBtn: true,
        onBackPressed: () => goBack(),
      }}>
      <View style={styles.container}>
        <View style={styles.list}>
          <FlatList
            data={cartProducts}
            keyExtractor={item => item.productName}
            renderItem={({item}) => {
              return <CartProduct product={item} />;
            }}
          />
        </View>
        <View style={styles.row}>
          <CustomText style={styles.text}>
            Total{' '}
            <CustomText style={styles.grey}>
              ({cartProducts.length} items)
            </CustomText>
          </CustomText>
          <CustomText style={styles.text}>£90</CustomText>
        </View>
        <Button label="Checkout - £90" />
      </View>
    </Container>
  );
};

export default CartScreen;
