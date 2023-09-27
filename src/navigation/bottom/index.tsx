/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {colors} from '../../assets/colors';
import SvgLoader from '../../components/svgloader';
import {Home} from '../../assets/svg/Home';
import MenuStack from '../stack/MenuStack';
import {MenuIcon} from '../../assets/svg/Menu';
import {CartIcon} from '../../assets/svg/Cart';
import {AccountIcon} from '../../assets/svg/Account';
import CartStack from '../stack/CartStack';
import CustomText from '../../components/customtext';
import {Platform} from 'react-native';
import {
  AccountStacks,
  CartStacks,
  HomeStacks,
  MenuStacks,
} from '../stack/routes';

const Stack = createBottomTabNavigator();

const getIconColor = (focused: boolean) =>
  focused ? colors.buttonRed : colors.textGrey;
const HomeTab = (focused: boolean) => (
  <SvgLoader xml={Home(getIconColor(focused))} />
);
const MenuTab = (focused: boolean) => (
  <SvgLoader xml={MenuIcon(getIconColor(focused))} />
);
const CartTab = (focused: boolean) => (
  <SvgLoader xml={CartIcon(getIconColor(focused))} />
);
const AccountTab = () => <SvgLoader xml={AccountIcon} />;

const BottomTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingBottom: Platform.select({ios: 20}),
          height: Platform.select({ios: 80, android: 60}),
        },
      }}>
      <Stack.Screen
        name={HomeStacks}
        component={MenuStack}
        options={{
          tabBarIcon: ({focused}) => HomeTab(focused),
          tabBarLabel: ({focused}) => {
            return (
              <CustomText style={{color: getIconColor(focused)}}>
                Home
              </CustomText>
            );
          },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={MenuStacks}
        component={MenuStack}
        options={{
          tabBarIcon: ({focused}) => MenuTab(focused),
          tabBarLabel: ({focused}) => {
            return (
              <CustomText style={{color: getIconColor(focused)}}>
                Menu
              </CustomText>
            );
          },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={CartStacks}
        component={CartStack}
        options={{
          tabBarIcon: ({focused}) => CartTab(focused),
          tabBarLabel: ({focused}) => {
            return (
              <CustomText style={{color: getIconColor(focused)}}>
                Cart
              </CustomText>
            );
          },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={AccountStacks}
        component={MenuStack}
        options={{
          tabBarIcon: () => AccountTab(),
          tabBarLabel: ({focused}) => {
            return (
              <CustomText style={{color: getIconColor(focused)}}>
                Account
              </CustomText>
            );
          },
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default BottomTab;
