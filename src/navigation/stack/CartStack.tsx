import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CartScreen from '../../screens/CartScreen';
import {Cart} from './routes';

const Stack = createStackNavigator();
const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Cart}
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
