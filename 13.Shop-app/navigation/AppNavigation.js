import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';

import { Ionicons } from '@expo/vector-icons';
import NAVIGATION from '../constants/navigation';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import theme from '../theme';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ProductsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.palette.primary,
        },
        headerTintColor: theme.palette.white,
        headerTitleStyle: {
          fontFamily: theme.typography.fontBold,
        },
      }}
    >
      <Stack.Screen
        name={NAVIGATION.ProductsOverview}
        component={ProductsOverviewScreen}
        options={({ navigation }) => {
          return {
            title: 'All Products',
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title='Cart'
                  iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                  onPress={() => navigation.navigate(NAVIGATION.Cart)}
                />
              </HeaderButtons>
            ),
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title='Menu'
                  iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                  onPress={() => navigation.toggleDrawer()}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
      <Stack.Screen
        name={NAVIGATION.ProductDetail}
        component={ProductDetailScreen}
        options={({ route }) => {
          return { title: route.params.productTitle };
        }}
      />
      <Stack.Screen
        name={NAVIGATION.Cart}
        component={CartScreen}
        options={() => {
          return { title: 'Your Cart' };
        }}
      />
    </Stack.Navigator>
  );
};

const OrdersStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.palette.primary,
        },
        headerTintColor: theme.palette.white,
        headerTitleStyle: {
          fontFamily: theme.typography.fontBold,
        },
      }}
    >
      <Stack.Screen
        name={NAVIGATION.Orders}
        component={OrdersScreen}
        options={({ navigation }) => {
          return {
            title: 'Orders',
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title='Menu'
                  iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                  onPress={() => navigation.toggleDrawer()}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: theme.palette.white,
          width: 270,
        }}
        drawerContentOptions={{
          activeTintColor: theme.palette.primary,
          labelStyle: {
            fontFamily: theme.typography.fontBold,
          },
        }}
      >
        <Drawer.Screen
          name={NAVIGATION.Products}
          component={ProductsStack}
          options={{
            title: 'Products',
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={NAVIGATION.Orders}
          component={OrdersStack}
          options={{
            title: 'Your Orders',
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
