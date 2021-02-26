import * as React from 'react';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PlacesListScreen from '../screens/PlacesListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';

import NAVIGATION from '../constants/navigation';
import HeaderButton from '../components/HeaderButton';
import theme from '../theme';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: theme.palette.white,
          headerStyle: { backgroundColor: theme.palette.primary },
        }}
      >
        <Stack.Screen
          name={NAVIGATION.Places}
          component={PlacesListScreen}
          options={({ navigation }) => {
            return {
              title: 'All Places',
              headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                  <Item
                    title='Add Place'
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => navigation.navigate(NAVIGATION.NewPlace)}
                  />
                </HeaderButtons>
              ),
            };
          }}
        />
        <Stack.Screen
          name={NAVIGATION.PlaceDetails}
          component={PlaceDetailScreen}
          options={({ route }) => {
            return {
              title: route.params.title,
            };
          }}
        />
        <Stack.Screen
          name={NAVIGATION.NewPlace}
          component={NewPlaceScreen}
          options={{
            title: 'Add Place',
          }}
        />
        <Stack.Screen name={NAVIGATION.Map} component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
