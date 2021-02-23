import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import HeaderButton from '../components/HeaderButton';
import theme from '../theme';
import { CATEGORIES } from '../data/dummy-data';
import { toggleFavorite, setFilters } from '../store/actions/meals';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MealsNavigator = () => {
  const meals = useSelector((state) => state.meals.meals);
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  const dispatch = useDispatch();

  return (
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
        headerTitleStyle: {
          fontFamily: theme.typography.fontBold,
        },
      }}
    >
      <Stack.Screen
        name='Categories'
        component={CategoriesScreen}
        options={({ navigation }) => {
          return {
            headerTitle: 'Meal Categories',
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title='Menu'
                  iconName='ios-menu'
                  onPress={() => navigation.toggleDrawer()}
                />
              </HeaderButtons>
            ),
          };
        }}
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
      <Stack.Screen
        name='MealDetails'
        component={MealDetailsScreen}
        options={({ route }) => {
          const { mealId } = route.params;
          const { title } = meals.find((meal) => meal.id === mealId);
          const isFavorite = favMeals.some((meal) => meal.id === mealId);

          return {
            headerTitle: title,
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title='Favorite'
                  iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
                  onPress={() => dispatch(toggleFavorite(mealId))}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

const FavoritesNavigator = () => {
  const meals = useSelector((state) => state.meals.meals);
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  const dispatch = useDispatch();

  return (
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
        headerTitleStyle: {
          fontFamily: theme.typography.fontBold,
        },
      }}
    >
      <Stack.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={({ navigation }) => {
          return {
            headerTitle: 'Your Favorites',
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title='Menu'
                  iconName='ios-menu'
                  onPress={() => navigation.toggleDrawer()}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
      <Stack.Screen
        name='MealDetails'
        component={MealDetailsScreen}
        options={({ route }) => {
          const { mealId } = route.params;
          const { title } = meals.find((meal) => meal.id === mealId);
          const isFavorite = favMeals.some((meal) => meal.id === mealId);

          return {
            headerTitle: title,
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title='Favorite'
                  iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
                  onPress={() => dispatch(toggleFavorite(mealId))}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

const FiltersNavigator = () => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? theme.palette.primary : '',
        },
        headerTintColor:
          Platform.OS === 'android'
            ? theme.palette.white
            : theme.palette.primary,
        headerTitleStyle: {
          fontFamily: theme.typography.fontBold,
        },
      }}
    >
      <Stack.Screen
        name='Filters'
        component={FiltersScreen}
        options={({ route, navigation }) => {
          return {
            headerTitle: 'Filters',
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title='Menu'
                  iconName='ios-menu'
                  onPress={() => navigation.toggleDrawer()}
                />
              </HeaderButtons>
            ),
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title='Save'
                  iconName='ios-save'
                  onPress={() => dispatch(setFilters(route.params.filters))}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

// the first Tab.Screen will contain the main navigator, because we always use only one NavigationContainer
const TabsNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.palette.accent,
        labelStyle: {
          fontFamily: theme.typography.fontBold,
        },
      }}
    >
      <Tab.Screen
        name='Meals'
        component={MealsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-restaurant' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={FavoritesNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-star' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: theme.palette.white,
        width: 270,
      }}
      drawerContentOptions={{
        activeTintColor: theme.palette.accent,
        labelStyle: {
          fontFamily: theme.typography.fontBold,
        },
      }}
    >
      <Drawer.Screen name='Meals' component={TabsNavigator} />
      <Drawer.Screen name='Filters' component={FiltersNavigator} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default DrawerNavigator;
