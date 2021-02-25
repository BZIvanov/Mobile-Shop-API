import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';

import { createProduct, updateProduct } from '../store/actions';
import { Ionicons } from '@expo/vector-icons';
import NAVIGATION from '../constants/navigation';
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

// this stack is the screen itself and the icons are the ones we see on the screen
const UserStack = () => {
  const dispatch = useDispatch();

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
        name={NAVIGATION.UserProducts}
        component={UserProductsScreen}
        options={({ navigation }) => {
          return {
            title: 'Your Products List',
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title='Menu'
                  iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                  onPress={() => navigation.toggleDrawer()}
                />
              </HeaderButtons>
            ),
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title='Add'
                  iconName={
                    Platform.OS === 'android' ? 'md-create' : 'ios-create'
                  }
                  onPress={() => navigation.navigate(NAVIGATION.EditProduct)}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
      <Stack.Screen
        name={NAVIGATION.EditProduct}
        component={EditProductScreen}
        options={({ route, navigation }) => {
          return {
            title:
              route.params && route.params.productId
                ? 'Edit Product'
                : 'Add Product',
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title='Save'
                  iconName={
                    Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
                  }
                  onPress={() => {
                    if (route.params && route.params.productId) {
                      dispatch(
                        updateProduct(
                          route.params.productId,
                          route.params.product
                        )
                      );
                    } else {
                      dispatch(createProduct(route.params.product));
                    }

                    navigation.goBack();
                  }}
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
        {/* each drawer screen is an item in the drawer window */}
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
        <Drawer.Screen
          name={NAVIGATION.UserProducts}
          component={UserStack}
          options={{
            title: 'Your Products',
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
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
