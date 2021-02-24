import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';

import NAVIGATION from '../constants/navigation';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import theme from '../theme';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
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
                    iconName={
                      Platform.OS === 'android' ? 'md-cart' : 'ios-cart'
                    }
                    onPress={() => navigation.navigate(NAVIGATION.Cart)}
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
            return { title: 'Cart' };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
