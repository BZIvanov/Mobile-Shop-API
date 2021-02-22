import * as React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import theme from '../theme';
import { CATEGORIES } from '../data/dummy-data';

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // this is how we share common styles for different screens
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? theme.palette.primary : '',
          },
          headerTintColor:
            Platform.OS === 'android'
              ? theme.palette.white
              : theme.palette.primary,
        }}
      >
        <Stack.Screen
          name='Categories'
          component={CategoriesScreen}
          options={{ title: 'Meal Categories' }}
        />
        <Stack.Screen
          name='CategoryMeals'
          component={CategoryMealsScreen}
          // if we use as function we can get the same props as in the components
          options={({ route }) => {
            const { categoryId } = route.params;
            const { title } = CATEGORIES.find(
              (category) => category.id === categoryId
            );

            return { title };
          }}
        />
        <Stack.Screen name='MealDetails' component={MealDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
