import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MenuScreen from '../../screens/MenuScreen';
import ProductScreen from '../../screens/ProductScreen';
import {Menu, ProductDetails} from './routes';

const Stack = createStackNavigator();
const MenuStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Menu}
        component={MenuScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ProductDetails}
        component={ProductScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MenuStack;
