import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';

import NAVIGATION from '../constants/navigation';
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
          options={{
            title: 'All Products',
          }}
        />
        <Stack.Screen
          name={NAVIGATION.ProductDetail}
          component={ProductDetailScreen}
          options={({ route }) => {
            return { title: route.params.productTitle };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
