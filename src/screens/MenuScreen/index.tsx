import React from 'react';
import Container from '../../components/container';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import SearchBar from '../../components/searchbar';
import {products} from '../../mock/products';
import ProductCard from '../../components/productcard';
import {useNavigation} from '@react-navigation/core';
import {ProductDetails} from '../../navigation/stack/routes';
import {StackNavigationProp} from '@react-navigation/stack';

const MenuScreen = () => {
  const {navigate} = useNavigation() as StackNavigationProp<any, any>;
  return (
    <Container
      headerProps={{
        title: 'Menu',
        hasBackBtn: false,
      }}>
      <View style={styles.container}>
        <SearchBar placeholder="Search" />
        <FlatList
          data={products}
          contentContainerStyle={styles.flatlist}
          keyExtractor={item => item.productName}
          renderItem={({item}) => {
            return (
              <View style={styles.productItems}>
                <ProductCard
                  product={item}
                  onPress={() => navigate(ProductDetails, {product: item})}
                />
              </View>
            );
          }}
          numColumns={2}
        />
      </View>
    </Container>
  );
};

export default MenuScreen;
